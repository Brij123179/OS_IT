import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

export default function PracticalAssessmentPage({ data, onToast }) {
  const { practicalAssessment = {}, meta } = data;
  const { universityExam, continuousAssessment, links, experimentsList = [] } = practicalAssessment;

  const [activeExp, setActiveExp] = useState(null);

  return (
    <div className="container" style={{ paddingTop: '2.5rem' }}>
      <SectionHeader
        tag="Laboratory Curriculum"
        title="Practical Assessment"
        subtitle="Practical Assessment [50 Marks] • University Exam (25M) + Practical Continuous Assessment (25M)"
      />

      {/* Top 50 Marks Scheme Breakdown */}
      <div className="card card-glass" style={{ marginBottom: '2.5rem', padding: '2rem', border: '1px solid var(--border-medium)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', fontWeight: 700 }}>
              Evaluation Structure
            </span>
            <h3 style={{ fontSize: '1.4rem', margin: '0.2rem 0 0' }}>Practical Assessment [50 Marks]</h3>
          </div>
          <span className="badge badge-emerald" style={{ fontSize: '0.85rem' }}>Total: 50 Marks</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          
          {/* Card 1: University Exam */}
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>University Examination</h4>
              <span className="badge badge-blue">25 Marks</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Conducted at the end of the semester by university examiners.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                <span>Practical Execution / Coding:</span>
                <strong style={{ color: 'var(--text-primary)' }}>20 Marks</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Viva-Voce Examination:</span>
                <strong style={{ color: 'var(--text-primary)' }}>5 Marks</strong>
              </div>
            </div>
          </div>

          {/* Card 2: Practical Continuous Assessment */}
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Practical Continuous Assessment</h4>
              <span className="badge badge-emerald">25 Marks</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
              Evaluated continually throughout the semester in laboratory sessions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.4rem' }}>
                <span>Practical Performance (Journal/Lab Work):</span>
                <strong style={{ color: 'var(--text-primary)' }}>15 Marks</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Practical Internal Examination:</span>
                <strong style={{ color: 'var(--text-primary)' }}>10 Marks</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Action Links: Lab Manual / Journal & Practical Exercises */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem' }}>
          <a
            href={links?.labManual}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            Lab Manual / Journal Link ↗
          </a>

          <a
            href={links?.practicalExercises}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            Practical Exercise Link (Google Drive) ↗
          </a>
        </div>
      </div>

      {/* Practical List Section */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader
          tag="Curriculum Experiments"
          title="Practical List"
          subtitle="Complete list of laboratory experiments designed to build practical competency in Linux and system calls."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {experimentsList.map((exp) => (
            <div 
              key={exp.id} 
              className="card"
              style={{ borderLeft: '4px solid var(--accent-primary)', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span className="badge badge-blue">{exp.number}</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Linux GCC / POSIX</span>
              </div>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-primary)' }}>{exp.title}</h3>
              <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                <strong>Objective:</strong> {exp.objective}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Course Faculty Footer Note */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginBottom: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
        <div>
          Subject Coordinator: <strong style={{ color: 'var(--text-primary)' }}>{data?.facultyData?.coordinator || 'Prof. Nishat Shaikh'}</strong>
          <span style={{ margin: '0 0.5rem' }}>•</span>
          Practical / Lab Faculty: <strong style={{ color: 'var(--text-primary)' }}>IT-1: Prof. Madhav Ajwalia | IT-2: Prof. Nishat Shaikh, Prof. Madhav Ajwalia</strong>
        </div>
      </div>
    </div>
  );
}
