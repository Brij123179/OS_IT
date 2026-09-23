import React from 'react';

export default function EmptyState({ 
  title = "No Data Added Yet", 
  message = "This section is currently waiting for your course data.",
  hint = "Populate data in src/data/courseTemplateData.js" 
}) {
  return (
    <div className="empty-state-card">
      <div className="empty-state-icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      </div>
      <div>
        <h4 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{title}</h4>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto' }}>{message}</p>
      </div>
      {hint && <span className="empty-state-hint">{hint}</span>}
    </div>
  );
}
