import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function MaterialsPage({ data }) {
  const { materialsData = {} } = data;
  const { 
    youtubePlaylists = [], 
    referenceBooks = [],
    onlineCourseMaterials = []
  } = materialsData;

  return (
    <div className="container" style={{ paddingTop: '2.5rem' }}>
      <SectionHeader
        tag="Academic Resources"
        title="Material"
        subtitle="Textbook companion resources, reference books, and curated video lectures."
      />

      {/* Online Materials of CEUC301 Section */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader
          tag="Web Repositories & Slide Portals"
          title="Text book / Reference Book / Materials of CEUC301 - Fundamentals of Operating System Design"
          subtitle="Direct links to online slide directories, university codices, and textbook companion portals."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {onlineCourseMaterials.map((mat) => (
            <div key={mat.id} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                  <span className="badge badge-blue">{mat.badge}</span>
                </div>
                <h4 style={{ fontSize: '1.05rem', margin: '0 0 0.4rem', color: 'var(--text-primary)' }}>
                  {mat.title}
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                  {mat.description}
                </p>
              </div>

              <a
                href={mat.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Open Resource ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Reference Books Section */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader
          tag="Bibliography"
          title="Reference Books"
          subtitle="Prescribed standard reference literature for CEUC301: Fundamentals of Operating System Design."
        />

        <div className="card card-glass" style={{ border: '1px solid var(--border-medium)', padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span className="badge badge-emerald" style={{ fontSize: '0.88rem' }}>❖ Reference book:</span>
          </div>

          <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', margin: 0 }}>
            {referenceBooks.map((rb) => (
              <li key={rb.id} style={{ lineHeight: '1.6', fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                {rb.url ? (
                  <a 
                    href={rb.url} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ fontWeight: 700, color: 'var(--accent-primary)', fontSize: '1.02rem', textDecoration: 'underline' }}
                  >
                    {rb.title} ↗
                  </a>
                ) : (
                  <strong style={{ fontSize: '1.02rem', color: 'var(--text-primary)' }}>{rb.title}</strong>
                )}
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                  {rb.authors ? `${rb.authors}` : ''}{rb.edition ? `, ${rb.edition}` : ''}{rb.publisher && rb.publisher !== rb.edition ? `, ${rb.publisher}` : ''}
                  {rb.isOpenAccess && (
                    <span className="badge badge-cyan" style={{ marginLeft: '0.5rem', fontSize: '0.72rem' }}>
                      available online for free
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Good Reference Links / Youtube Playlists */}
      <section style={{ marginBottom: '4rem' }}>
        <SectionHeader
          tag="Video Lectures"
          title="Good Reference Links & YouTube Playlists"
          subtitle="Curated high-quality video lecture series recommended for in-depth conceptual understanding."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {youtubePlaylists.map((pl, idx) => (
            <div key={pl.id} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
              <div style={{ maxWidth: '780px' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span className="badge badge-rose">YouTube Video</span>
                  <span className="badge badge-cyan">{pl.badge}</span>
                </div>
                <h4 style={{ fontSize: '1.15rem', margin: '0 0 0.35rem', color: 'var(--text-primary)' }}>
                  Play List {idx + 1}: {pl.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                  {pl.topics}
                </p>
              </div>

              <a
                href={pl.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ flexShrink: 0 }}
              >
                Watch Playlist ↗
              </a>
            </div>
          ))}
        </div>
      </section>

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
