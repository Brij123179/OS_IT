import React from 'react';

export default function Footer({ meta, setActivePage }) {
  const currentYear = new Date().getFullYear();

  const ictUrl = meta?.instructionalToolsUrl || "https://drive.google.com/drive/folders/15iGzzOxu6NIdt03TgINZRteYsY9UdFpj?usp=sharing";
  const pedagogyUrl = meta?.pedagogicalPlanningUrl || "https://drive.google.com/drive/folders/1vRHixVCcNtzafO1n3BaO3PdWhiodE1EQ";
  const enrichmentUrl = meta?.contentEnrichmentUrl || "https://drive.google.com/drive/folders/1KtbMiTAJ2GZOtohRNWXL2K5Agv8Nzn3V";
  const nptelUrl = meta?.nptelCourseUrl || "https://onlinecourses.nptel.ac.in/e-learning/preview/noc26_cs123";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1: Brand & Course Info */}
          <div className="footer-col footer-brand">
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{meta?.shortCode || 'CEUC301 - FOS'}</h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '340px' }}>
              {meta?.name || 'Fundamentals of Operating System Design'}<br />
              Information Technology, CSPIT, CHARUSAT.
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-blue">{meta?.semester || 'Semester V'}</span>
              <span className="badge badge-emerald">{meta?.credits || '4.0 Credits'}</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4>Quick Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => { setActivePage('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Home</button></li>
              <li><button onClick={() => { setActivePage('syllabus'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Syllabus</button></li>
              <li><button onClick={() => { setActivePage('lessons'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Lesson Planning</button></li>
              <li><button onClick={() => { setActivePage('theory'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Theory Assessment</button></li>
              <li><button onClick={() => { setActivePage('practical'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Practical Assessment</button></li>
              <li><button onClick={() => { setActivePage('materials'); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Material</button></li>
            </ul>
          </div>

          {/* Col 3: Academic Resources & Department Planning */}
          <div className="footer-col">
            <h4>Course Resources</h4>
            <ul className="footer-links">
              <li>
                <a href={meta?.syllabusPdfUrl} target="_blank" rel="noreferrer">
                  Download Syllabus ↗
                </a>
              </li>
              <li>
                <a href={ictUrl} target="_blank" rel="noreferrer">
                  Instructional Tools & ICT Readiness ↗
                </a>
              </li>
              <li>
                <a href={pedagogyUrl} target="_blank" rel="noreferrer">
                  Pedagogical Planning & Learning Design ↗
                </a>
              </li>
              <li>
                <a href={enrichmentUrl} target="_blank" rel="noreferrer">
                  Content Enrichment Plan ↗
                </a>
              </li>
              <li>
                <a href={nptelUrl} target="_blank" rel="noreferrer">
                  NPTEL Course Certification ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Faculty Coordinators */}
          <div className="footer-col">
            <h4>Course Faculty</h4>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.6rem', lineHeight: 1.5 }}>
              <div style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>
                Prof. Nishat Shaikh <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>(Coordinator)</span>
              </div>
              <div style={{ fontWeight: 600, marginTop: '0.2rem' }}>
                Prof. Madhav Ajwalia
              </div>
              <div style={{ fontWeight: 600, marginTop: '0.2rem' }}>
                Prof. Binal Kaka
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
              Information Technology, CSPIT<br />
              CHARUSAT, Changa
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div>
            © {currentYear} Information Technology, CSPIT, CHARUSAT. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <span>CEUC301 - FOS Portal</span>
            <span>CHARUSAT IT Department</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
