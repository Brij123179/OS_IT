import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

export default function LessonPlanningPage({ data }) {
  const [selectedDivision, setSelectedDivision] = useState('IT-1');
  const sheets = data?.lessonPlanning?.sheets || {};
  
  const it1Url = sheets.it1Url || "https://docs.google.com/spreadsheets/d/1YYILyuUUB-7Ai2_4_QG_nqsuNfafK3IB/edit?gid=872519158#gid=872519158";
  const it2Url = sheets.it2Url || "https://docs.google.com/spreadsheets/d/1ciKWxeze8ELJQHIgIDZBvCPxyO2lb71Y/edit?gid=1102866220#gid=1102866220";

  // Embedded URLs for Google Sheets iframes
  const it1EmbedUrl = "https://docs.google.com/spreadsheets/d/1YYILyuUUB-7Ai2_4_QG_nqsuNfafK3IB/htmlembed?gid=872519158&widget=true&headers=false";
  const it2EmbedUrl = "https://docs.google.com/spreadsheets/d/1ciKWxeze8ELJQHIgIDZBvCPxyO2lb71Y/htmlembed?gid=1102866220&widget=true&headers=false";

  const activeUrl = selectedDivision === 'IT-1' ? it1Url : it2Url;
  const activeEmbedUrl = selectedDivision === 'IT-1' ? it1EmbedUrl : it2EmbedUrl;

  return (
    <div className="container" style={{ paddingTop: '2.5rem' }}>
      <SectionHeader
        tag="Academic Delivery"
        title="Lesson Planning"
        subtitle={`Subject Coordinator: ${data?.facultyData?.coordinator || 'Prof. Nishat Shaikh'}`}
        rightContent={
          <a
            href={activeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Open {selectedDivision} Sheet (Google Sheets) ↗
          </a>
        }
      />

      {/* Division Selector Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div className="tabs-container">
          <button
            className={`tab-btn ${selectedDivision === 'IT-1' ? 'active' : ''}`}
            onClick={() => setSelectedDivision('IT-1')}
          >
            Division IT - 1
          </button>
          <button
            className={`tab-btn ${selectedDivision === 'IT-2' ? 'active' : ''}`}
            onClick={() => setSelectedDivision('IT-2')}
          >
            Division IT - 2
          </button>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {selectedDivision === 'IT-1' ? (
            <span>Teaching Faculty: <strong>Prof. Madhav Ajwalia & Prof. Binal Kaka</strong></span>
          ) : (
            <span>Teaching Faculty: <strong>Prof. Nishat Shaikh & Prof. Binal Kaka</strong></span>
          )}
        </div>
      </div>

      {/* Active Division Spreadsheet Section */}
      <div style={{ marginBottom: '4rem' }}>
        {/* Top Info Bar */}
        <div className="card card-glass" style={{ marginBottom: '1.5rem', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', border: '1px solid var(--border-medium)' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
              <span className={`badge ${selectedDivision === 'IT-1' ? 'badge-blue' : 'badge-cyan'}`}>
                Division {selectedDivision}
              </span>
              <span className="badge badge-emerald">Live Google Sheet</span>
            </div>
            <h3 style={{ margin: 0, fontSize: '1.15rem' }}>
              Lesson Planning & Lecture Schedule ({selectedDivision})
            </h3>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <a
              href={activeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm"
            >
              Open in Google Sheets ↗
            </a>
          </div>
        </div>

        {/* Embedded Google Sheet Frame */}
        <div 
          style={{ 
            background: '#ffffff', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid var(--border-medium)', 
            overflow: 'hidden', 
            boxShadow: 'var(--shadow-md)',
            position: 'relative'
          }}
        >
          <div style={{ background: '#f8fafc', padding: '0.6rem 1rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <span>Interactive Sheet View for {selectedDivision} (Scroll horizontally/vertically to navigate)</span>
            <a href={activeUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
              Full Screen View ↗
            </a>
          </div>
          
          <iframe
            key={selectedDivision}
            src={activeEmbedUrl}
            title={`Division ${selectedDivision} Lesson Planning Sheet`}
            style={{
              width: '100%',
              height: '750px',
              border: 'none',
              display: 'block'
            }}
            allowFullScreen
          />
        </div>

        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.75rem', textAlign: 'center' }}>
          Note: If the embedded spreadsheet does not display due to institutional Google account permissions, please click{' '}
          <a href={activeUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
            Open in Google Sheets ↗
          </a>{' '}
          to view directly.
        </p>
      </div>

      {/* Course Faculty Footer Note */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginBottom: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
        <div>
          Subject Coordinator: <strong style={{ color: 'var(--text-primary)' }}>{data?.facultyData?.coordinator || 'Prof. Nishat Shaikh'}</strong>
          <span style={{ margin: '0 0.5rem' }}>•</span>
          Faculty: <strong style={{ color: 'var(--text-primary)' }}>Prof. Madhav Ajwalia, Prof. Binal Kaka</strong>
        </div>
      </div>
    </div>
  );
}
