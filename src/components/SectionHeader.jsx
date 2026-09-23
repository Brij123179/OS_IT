import React from 'react';

export default function SectionHeader({ tag, title, subtitle, center = false, rightContent = null }) {
  return (
    <div className={`section-header ${center ? 'center' : ''}`} style={{ display: 'flex', justifyContent: rightContent ? 'space-between' : 'flex-start', alignItems: center ? 'center' : (rightContent ? 'flex-end' : 'flex-start'), flexWrap: 'wrap', gap: '1rem' }}>
      <div>
        {tag && <span className="section-tag">{tag}</span>}
        <h2 style={{ marginTop: '0.4rem' }}>{title}</h2>
        {subtitle && <p className="section-subtitle" style={{ marginTop: '0.35rem' }}>{subtitle}</p>}
      </div>
      {rightContent && <div>{rightContent}</div>}
    </div>
  );
}
