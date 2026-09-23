import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import EmptyState from '../components/EmptyState';

export default function SyllabusPage({ data }) {
  const { lessonPlanning = {}, meta } = data;
  const { units = [], bridgeTopics = [] } = lessonPlanning;

  // 'all' | 'bridge' | '1' | '2' ... | '9'
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUnits = units.filter(u => {
    const matchTab = activeTab === 'all' || u.unit.toString() === activeTab;
    const matchSearch = !searchQuery.trim() ||
      u.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      u.topics?.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchTab && matchSearch;
  });

  const filteredBridgeTopics = bridgeTopics.filter(b => {
    if (activeTab !== 'all' && activeTab !== 'bridge') return false;
    if (!searchQuery.trim()) return true;
    return b.topic?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.reference?.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const totalHours = units.reduce((acc, u) => acc + (u.hours || 0), 0);

  return (
    <div className="container" style={{ paddingTop: '2.5rem' }}>
      <SectionHeader
        tag="Academic Curriculum"
        title="Syllabus"
        subtitle={`Subject Coordinator: ${data?.facultyData?.coordinator || 'Prof. Nishat Shaikh'}`}
        rightContent={
          <a 
            href={meta?.syllabusPdfUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-primary btn-sm"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download Syllabus Document
          </a>
        }
      />

      {/* Curricular Syllabus Overview Banner */}
      <div className="card card-glass" style={{ marginBottom: '2.5rem', padding: '1.5rem 1.75rem', border: '1px solid var(--border-medium)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>
            Curriculum Structure
          </span>
          <h3 style={{ margin: '0.2rem 0 0', fontSize: '1.25rem' }}>
            {units.length} Curriculum Units • {totalHours} Total Teaching Hours • Mapped to CO1–CO7
          </h3>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <span className="badge badge-purple">{units.length} Units</span>
          <span className="badge badge-blue">{totalHours} Lecture Hours</span>
          <span className="badge badge-emerald">4.0 Credits</span>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <div className="tabs-container" style={{ flexWrap: 'wrap' }}>
          <button
            className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Modules ({units.length + (bridgeTopics.length > 0 ? 1 : 0)})
          </button>
          <button
            className={`tab-btn ${activeTab === 'bridge' ? 'active' : ''}`}
            onClick={() => setActiveTab('bridge')}
          >
            Bridge Topics ({bridgeTopics.length})
          </button>
          {units.map((u) => (
            <button
              key={u.unit}
              className={`tab-btn ${activeTab === u.unit.toString() ? 'active' : ''}`}
              onClick={() => setActiveTab(u.unit.toString())}
            >
              Unit {u.unit}
            </button>
          ))}
        </div>

        <div className="search-bar" style={{ maxWidth: '320px', width: '100%' }}>
          <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Search syllabus topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Bridge Topics Section */}
      {filteredBridgeTopics.length > 0 && (
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <span className="badge badge-purple" style={{ fontSize: '0.85rem' }}>Prerequisite Foundation</span>
            <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Bridge Topics (Pre-requisite Modules)</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {filteredBridgeTopics.map((bt) => (
              <div key={bt.id} className="card" style={{ borderLeft: '4px solid var(--accent-purple)', padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
                  {bt.topic}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  <strong>Reference:</strong> {bt.reference}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Curriculum Units List */}
      {filteredUnits.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', marginBottom: '4rem' }}>
          {filteredUnits.map((u) => (
            <div 
              key={u.unit} 
              className="card" 
              style={{ 
                borderLeft: '4px solid var(--accent-primary)',
                background: '#ffffff',
                padding: '1.75rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
                    <span className="badge badge-blue">Unit {u.unit}</span>
                    <span className="badge badge-cyan">Mapped: {u.coMapped}</span>
                    <span className="badge badge-purple">{u.hours} Lecture Hours</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-primary)' }}>{u.title}</h3>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Topics & Curricular Modules:
                </h4>
                <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  {u.topics.map((t, tIdx) => (
                    <li key={tIdx} style={{ lineHeight: '1.5' }}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : activeTab !== 'bridge' ? (
        <EmptyState 
          title="No Matching Units Found" 
          message="Adjust your filter or search query to view syllabus."
        />
      ) : null}
    </div>
  );
}
