import React, { useState, useMemo } from 'react';

export default function CpuSchedulerWidget() {
  const [algo, setAlgo] = useState('fcfs');
  const [quantum, setQuantum] = useState(2);

  // Default demonstration process list
  const initialProcesses = useMemo(() => [
    { pid: 'P1', at: 0, bt: 5, color: '#3b82f6' },
    { pid: 'P2', at: 1, bt: 3, color: '#06b6d4' },
    { pid: 'P3', at: 2, bt: 8, color: '#10b981' },
    { pid: 'P4', at: 3, bt: 4, color: '#a855f7' }
  ], []);

  // Compute Gantt schedule and metrics based on algorithm
  const { schedule, avgWait, avgTat } = useMemo(() => {
    let sched = [];
    let wait = 0;
    let tat = 0;

    if (algo === 'fcfs') {
      let currentTime = 0;
      let totalWait = 0;
      let totalTat = 0;

      initialProcesses.forEach(p => {
        if (currentTime < p.at) currentTime = p.at;
        const start = currentTime;
        currentTime += p.bt;
        const finish = currentTime;
        const pTat = finish - p.at;
        const pWt = pTat - p.bt;
        totalWait += pWt;
        totalTat += pTat;
        sched.push({ pid: p.pid, duration: p.bt, start, finish, color: p.color });
      });

      wait = (totalWait / initialProcesses.length).toFixed(2);
      tat = (totalTat / initialProcesses.length).toFixed(2);

    } else if (algo === 'sjf') {
      let procs = JSON.parse(JSON.stringify(initialProcesses));
      let completed = 0;
      let currentTime = 0;
      let totalWait = 0;
      let totalTat = 0;
      let isCompleted = new Array(procs.length).fill(false);

      while (completed < procs.length) {
        let idx = -1;
        let minBt = 999999;
        for (let i = 0; i < procs.length; i++) {
          if (procs[i].at <= currentTime && !isCompleted[i] && procs[i].bt < minBt) {
            minBt = procs[i].bt;
            idx = i;
          }
        }

        if (idx !== -1) {
          const start = currentTime;
          currentTime += procs[idx].bt;
          const finish = currentTime;
          const pTat = finish - procs[idx].at;
          const pWt = pTat - procs[idx].bt;
          totalWait += pWt;
          totalTat += pTat;
          isCompleted[idx] = true;
          completed++;
          sched.push({ pid: procs[idx].pid, duration: procs[idx].bt, start, finish, color: procs[idx].color });
        } else {
          currentTime++;
        }
      }

      wait = (totalWait / procs.length).toFixed(2);
      tat = (totalTat / procs.length).toFixed(2);

    } else if (algo === 'rr') {
      let remBt = initialProcesses.map(p => p.bt);
      let currentTime = 0;
      let done = false;
      let finishTimes = {};

      while (!done) {
        done = true;
        for (let i = 0; i < initialProcesses.length; i++) {
          if (remBt[i] > 0) {
            done = false;
            const p = initialProcesses[i];
            const start = currentTime;
            let slice = 0;

            if (remBt[i] > quantum) {
              slice = quantum;
              remBt[i] -= quantum;
              currentTime += quantum;
            } else {
              slice = remBt[i];
              currentTime += remBt[i];
              remBt[i] = 0;
              finishTimes[p.pid] = currentTime;
            }

            sched.push({ pid: p.pid, duration: slice, start, finish: currentTime, color: p.color });
          }
        }
      }

      let totalTat = 0;
      let totalWait = 0;
      initialProcesses.forEach(p => {
        const pTat = (finishTimes[p.pid] || 0) - p.at;
        const pWt = pTat - p.bt;
        totalTat += pTat;
        totalWait += pWt;
      });

      wait = (totalWait / initialProcesses.length).toFixed(2);
      tat = (totalTat / initialProcesses.length).toFixed(2);
    }

    return { schedule: sched, avgWait: wait, avgTat: tat };
  }, [algo, quantum, initialProcesses]);

  const totalDuration = schedule.reduce((sum, item) => sum + item.duration, 0) || 1;

  return (
    <div className="card scheduler-widget" style={{ padding: 0 }}>
      {/* Widget Header */}
      <div style={{ padding: '1.25rem 1.5rem', background: 'var(--bg-surface-elevated)', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Interactive Demo
          </span>
          <h4 style={{ margin: '0.2rem 0 0', fontSize: '1.05rem' }}>CPU Scheduling Visualizer</h4>
        </div>
        <span className="badge badge-emerald">Live Kernel Simulator</span>
      </div>

      {/* Controls Bar */}
      <div style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', borderBottom: '1px solid var(--border-subtle)', background: 'rgba(0,0,0,0.15)', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Algorithm:</label>
          <select 
            value={algo} 
            onChange={(e) => setAlgo(e.target.value)}
            style={{ padding: '0.45rem 0.85rem', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', color: 'var(--text-primary)', borderRadius: 'var(--radius-md)', fontSize: '0.85rem', fontFamily: 'var(--font-heading)', cursor: 'pointer' }}
          >
            <option value="fcfs">First-Come, First-Served (FCFS)</option>
            <option value="sjf">Shortest Job First (SJF Non-Preemptive)</option>
            <option value="rr">Round Robin (RR)</option>
          </select>
        </div>

        {algo === 'rr' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Time Quantum:</label>
            <input 
              type="number" 
              min="1" 
              max="5" 
              value={quantum} 
              onChange={(e) => setQuantum(Math.max(1, parseInt(e.target.value) || 1))}
              style={{ width: '55px', padding: '0.35rem 0.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', color: 'var(--text-primary)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}
            />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>ms</span>
          </div>
        )}
      </div>

      {/* Gantt Chart Display */}
      <div style={{ padding: '1.5rem' }}>
        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
          Gantt Timeline
        </div>
        <div style={{ display: 'flex', width: '100%', height: '48px', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--border-medium)', marginBottom: '0.5rem' }}>
          {schedule.map((slot, index) => {
            const widthPct = (slot.duration / totalDuration) * 100;
            return (
              <div 
                key={index} 
                style={{
                  width: `${widthPct}%`,
                  backgroundColor: slot.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: '#fff',
                  borderRight: index < schedule.length - 1 ? '1px solid rgba(0,0,0,0.3)' : 'none',
                  transition: 'all 0.3s ease'
                }}
                title={`${slot.pid}: ${slot.start}ms → ${slot.finish}ms`}
              >
                {slot.pid}
              </div>
            );
          })}
        </div>

        {/* Time stamps */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <span>0ms</span>
          {schedule.map((slot, index) => (
            <span key={index}>{slot.finish}ms</span>
          ))}
        </div>
      </div>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem 1.5rem', background: 'var(--bg-surface-elevated)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ background: 'rgba(0,0,0,0.18)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Avg Waiting Time</div>
          <div style={{ fontSize: '1.35rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--accent-cyan)' }}>
            {avgWait} ms
          </div>
        </div>

        <div style={{ background: 'rgba(0,0,0,0.18)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Avg Turnaround Time</div>
          <div style={{ fontSize: '1.35rem', fontWeight: 800, fontFamily: 'var(--font-heading)', color: 'var(--accent-emerald)' }}>
            {avgTat} ms
          </div>
        </div>
      </div>
    </div>
  );
}
