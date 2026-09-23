import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

function parseGoogleSheetUrl(url) {
  if (!url) return null;
  const idMatch = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  const gidMatch = url.match(/gid=([0-9]+)/);
  
  const sheetId = idMatch ? idMatch[1] : null;
  const gid = gidMatch ? gidMatch[1] : '0';

  if (!sheetId) {
    return {
      directUrl: url,
      previewUrl: url,
      embedUrl: url
    };
  }

  return {
    directUrl: `https://docs.google.com/spreadsheets/d/${sheetId}/edit?gid=${gid}#gid=${gid}`,
    previewUrl: `https://docs.google.com/spreadsheets/d/${sheetId}/preview?gid=${gid}`,
    embedUrl: `https://docs.google.com/spreadsheets/d/${sheetId}/htmlembed?gid=${gid}&widget=true&headers=false`
  };
}

export default function LessonPlanningPage({ data }) {
  const [selectedDivision, setSelectedDivision] = useState('IT-1');
  const [embedMode, setEmbedMode] = useState('preview'); // 'preview' | 'embed'
  const [showTroubleshoot, setShowTroubleshoot] = useState(false);

  const sheets = data?.lessonPlanning?.sheets || {};
  
  // IT-1 is the sheet provided by the user (1ciKWxeze8ELJQHIgIDZBvCPxyO2lb71Y)
  const it1Url = sheets.it1Url || "https://docs.google.com/spreadsheets/d/1ciKWxeze8ELJQHIgIDZBvCPxyO2lb71Y/edit?gid=1102866220#gid=1102866220";
  // IT-2 sheet provided by user (1LUrKNOOZSM-s_PdZyMMSYJABAlDi4OH8)
  const it2Url = sheets.it2Url || "https://docs.google.com/spreadsheets/d/1LUrKNOOZSM-s_PdZyMMSYJABAlDi4OH8/edit?gid=287454461#gid=287454461";

  const activeRawUrl = selectedDivision === 'IT-1' ? it1Url : it2Url;
  const parsedSheet = parseGoogleSheetUrl(activeRawUrl);

  const activeEmbedUrl = parsedSheet 
    ? (embedMode === 'preview' ? parsedSheet.previewUrl : parsedSheet.embedUrl)
    : null;

  return (
    <div className="container" style={{ paddingTop: '2.5rem' }}>
      <SectionHeader
        tag="Academic Delivery"
        title="Lesson Planning"
        subtitle={`Subject Coordinator: ${data?.facultyData?.coordinator || 'Prof. Nishat Shaikh'} • Course: ${data?.meta?.code || 'CEUC301'}`}
        rightContent={
          parsedSheet?.directUrl && (
            <a
              href={parsedSheet.directUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
              id="open-sheet-header-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              Open {selectedDivision} in Google Sheets ↗
            </a>
          )
        }
      />

      {/* Division Selector & Faculty Allocations */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div className="tabs-container" id="division-tabs">
          <button
            id="tab-it1"
            className={`tab-btn ${selectedDivision === 'IT-1' ? 'active' : ''}`}
            onClick={() => setSelectedDivision('IT-1')}
          >
            Division IT - 1
          </button>
          <button
            id="tab-it2"
            className={`tab-btn ${selectedDivision === 'IT-2' ? 'active' : ''}`}
            onClick={() => setSelectedDivision('IT-2')}
          >
            Division IT - 2
          </button>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          {selectedDivision === 'IT-1' ? (
            <span>Teaching Faculty: <strong style={{ color: 'var(--text-primary)' }}>Prof. Madhav Ajwalia & Prof. Binal Kaka</strong></span>
          ) : (
            <span>Teaching Faculty: <strong style={{ color: 'var(--text-primary)' }}>Prof. Nishat Shaikh & Prof. Binal Kaka</strong></span>
          )}
        </div>
      </div>

      {/* Section Content based on selected division */}
      {selectedDivision === 'IT-2' && !it2Url ? (
        /* Pending IT-2 Sheet Card */
        <div 
          className="card" 
          style={{ 
            padding: '3rem 2rem', 
            textAlign: 'center', 
            marginBottom: '4rem', 
            background: 'var(--bg-card)', 
            border: '1px dashed var(--border-medium)',
            borderRadius: 'var(--radius-lg)'
          }}
        >
          <div 
            style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '50%', 
              background: 'var(--accent-primary-subtle)', 
              color: 'var(--accent-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1.25rem auto' 
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="12" y1="18" x2="12" y2="12"></line>
              <line x1="9" y1="15" x2="15" y2="15"></line>
            </svg>
          </div>
          <span className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>
            Awaiting Coordinator Link
          </span>
          <h3 style={{ margin: '0.5rem 0', fontSize: '1.35rem', color: 'var(--text-primary)' }}>
            Division IT-2 Lesson Planning Sheet
          </h3>
          <p style={{ maxWidth: '540px', margin: '0 auto 1.5rem auto', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
            The lesson planning spreadsheet for Division IT-2 is currently being finalized by the course coordinator (<strong style={{ color: 'var(--text-primary)' }}>Prof. Nishat Shaikh</strong>). Once provided, it will be embedded and synchronized here.
          </p>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => setSelectedDivision('IT-1')}
          >
            ← View Division IT-1 Lesson Planning
          </button>
        </div>
      ) : (
        /* Active Division (IT-1 or IT-2 when provided) */
        <div style={{ marginBottom: '4rem' }}>
          
          {/* Top Control & Direct Link Bar */}
          <div 
            className="card card-glass" 
            style={{ 
              marginBottom: '1.25rem', 
              padding: '1.25rem 1.5rem', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              flexWrap: 'wrap', 
              gap: '1rem', 
              border: '1px solid var(--border-medium)' 
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                <span className={`badge ${selectedDivision === 'IT-1' ? 'badge-blue' : 'badge-cyan'}`}>
                  Division {selectedDivision}
                </span>
                <span className="badge badge-emerald">Live Syllabus Tracker</span>
              </div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                Lesson Planning & Lecture Delivery ({selectedDivision})
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Embed Mode Toggle */}
              <div style={{ display: 'inline-flex', background: 'var(--bg-body)', padding: '0.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', fontSize: '0.8rem' }}>
                <button
                  type="button"
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: 'none',
                    background: embedMode === 'preview' ? 'var(--accent-primary)' : 'transparent',
                    color: embedMode === 'preview' ? '#ffffff' : 'var(--text-muted)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  onClick={() => setEmbedMode('preview')}
                >
                  Preview Mode
                </button>
                <button
                  type="button"
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: 'var(--radius-sm)',
                    border: 'none',
                    background: embedMode === 'embed' ? 'var(--accent-primary)' : 'transparent',
                    color: embedMode === 'embed' ? '#ffffff' : 'var(--text-muted)',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                  onClick={() => setEmbedMode('embed')}
                >
                  Grid Mode
                </button>
              </div>

              {/* Direct Open Button */}
              {parsedSheet?.directUrl && (
                <a
                  href={parsedSheet.directUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                  id="direct-open-sheet-btn"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  <span>Open in Google Sheets</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Notice Banner with Troubleshooting Toggle */}
          <div 
            style={{ 
              background: '#f8fafc', 
              border: '1px solid #e2e8f0', 
              borderRadius: 'var(--radius-md)', 
              padding: '0.85rem 1.25rem', 
              marginBottom: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '0.75rem',
              fontSize: '0.85rem',
              color: 'var(--text-secondary)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '1.1rem' }}>ℹ️</span>
              <span>
                Viewing Division {selectedDivision} live planner. For optimal editing or viewing full grid without iframe borders, open in Google Sheets.
              </span>
            </div>
            
            <button
              type="button"
              onClick={() => setShowTroubleshoot(!showTroubleshoot)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--accent-primary)',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.82rem',
                textDecoration: 'underline'
              }}
            >
              {showTroubleshoot ? 'Hide Loading Guide ▲' : 'Sheet not loading? Read this ▼'}
            </button>
          </div>

          {/* Expandable Troubleshooting / Permission Guide */}
          {showTroubleshoot && (
            <div 
              style={{ 
                background: '#fffbeb', 
                border: '1px solid #fef3c7', 
                borderRadius: 'var(--radius-md)', 
                padding: '1.25rem', 
                marginBottom: '1.25rem',
                fontSize: '0.85rem',
                color: '#92400e'
              }}
            >
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#b45309', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Why might Google Sheets show "docs.google.com refused to connect" or a blank frame?
              </h4>
              <p style={{ margin: '0 0 0.75rem 0', lineHeight: 1.5 }}>
                Modern browsers (Chrome, Edge, Safari) restrict <strong>third-party cookies</strong> inside embedded frames. If a Google Sheet requires user login or has restricted permissions, Google blocks the iframe via <code>X-Frame-Options: DENY</code>.
              </p>
              <div style={{ background: '#ffffff', padding: '0.85rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid #fde68a' }}>
                <strong style={{ display: 'block', marginBottom: '0.35rem', color: '#78350f' }}>How to enable instant loading for everyone:</strong>
                <ol style={{ margin: '0', paddingLeft: '1.25rem', lineHeight: 1.6 }}>
                  <li>Open the sheet directly: <a href={parsedSheet?.directUrl} target="_blank" rel="noreferrer" style={{ color: '#2563eb', fontWeight: 600 }}>Click here to open in Google Sheets ↗</a></li>
                  <li>Click <strong>Share</strong> (top right) → Change <em>General access</em> to <strong>"Anyone with the link"</strong> (Viewer).</li>
                  <li>Go to <strong>File</strong> → <strong>Share</strong> → <strong>Publish to web</strong> → Select <em>Embed</em> or <em>Link</em> → Click <strong>Publish</strong>.</li>
                </ol>
              </div>
              <div style={{ marginTop: '0.85rem', display: 'flex', gap: '0.75rem' }}>
                <a
                  href={parsedSheet?.directUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ background: '#d97706', borderColor: '#d97706' }}
                >
                  Open Direct Google Sheet ↗
                </a>
              </div>
            </div>
          )}

          {/* Embedded Google Sheet Iframe Container */}
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
            {/* Header Toolbar */}
            <div 
              style={{ 
                background: '#f8fafc', 
                padding: '0.65rem 1rem', 
                borderBottom: '1px solid var(--border-subtle)', 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                fontSize: '0.82rem', 
                color: 'var(--text-muted)' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }}></span>
                <span>Division {selectedDivision} Live Sheet ({embedMode === 'preview' ? 'Standard Preview' : 'Interactive Grid'})</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {parsedSheet?.directUrl && (
                  <a 
                    href={parsedSheet.directUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ color: 'var(--accent-primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    <span>Full Screen View</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                )}
              </div>
            </div>
            
            {/* The Iframe */}
            {activeEmbedUrl ? (
              <iframe
                key={`${selectedDivision}-${embedMode}`}
                src={activeEmbedUrl}
                title={`Division ${selectedDivision} Lesson Planning Sheet`}
                style={{
                  width: '100%',
                  height: '760px',
                  border: 'none',
                  display: 'block'
                }}
                allowFullScreen
              />
            ) : null}
          </div>
        </div>
      )}

      {/* Course Faculty Footer Attribution */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', marginBottom: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
        <div>
          Subject Coordinator: <strong style={{ color: 'var(--text-primary)' }}>{data?.facultyData?.coordinator || 'Prof. Nishat Shaikh'}</strong>
          <span style={{ margin: '0 0.5rem' }}>•</span>
          Faculty: <strong style={{ color: 'var(--text-primary)' }}>Prof. Madhav Ajwalia, Prof. Binal Kaka</strong>
        </div>
        <div>
          <span>Department of Information Technology, CSPIT, CHARUSAT</span>
        </div>
      </div>
    </div>
  );
}
