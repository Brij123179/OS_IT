import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function HomePage({ data, setActivePage }) {
  const { meta, courseOutcomes = [], teachingScheme, facultyData, resourcePersons = [] } = data;
  const facultyList = facultyData?.facultyList || resourcePersons || [];
  const coordinator = facultyData?.coordinator || meta?.coordinator || 'Prof. Nishat Shaikh';

  return (
    <div className="home-page-container">
      {/* 1. Hero Section */}
      <section className="hero-section" style={{ padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            
            {/* Left Col: Hero Copy */}
            <div>
              <h1 style={{ marginBottom: '1.25rem', lineHeight: '1.15' }}>
                {meta?.code} : {meta?.name}
              </h1>

              <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.7' }}>
                Official course portal for <strong>{meta?.name}</strong> at Information Technology, CSPIT, CHARUSAT.
                Access official course outcomes, syllabus content, weekly lesson planning, theoretical and practical assessment criteria, and learning materials.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a 
                  href={meta?.syllabusPdfUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-primary btn-lg"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download Syllabus
                </a>

                <button className="btn btn-secondary btn-lg" onClick={() => setActivePage('syllabus')}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  Syllabus
                </button>

                <button className="btn btn-outline" onClick={() => setActivePage('lessons')}>
                  Lesson Planning
                </button>

                <button className="btn btn-outline" onClick={() => setActivePage('practical')}>
                  Practical Assessment
                </button>

                <button className="btn btn-outline" onClick={() => setActivePage('materials')}>
                  Material
                </button>
              </div>

              {/* Quick Info Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 90px), 1fr))', gap: '1rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                    4.0
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                    Credits (3L + 2P)
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 800, color: 'var(--accent-primary)' }}>
                    7
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                    Course Outcomes
                  </div>
                </div>

                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 800, color: 'var(--accent-emerald)' }}>
                    150
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>
                    Total Marks
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col: Course Quick Reference Card */}
            <div>
              <div className="card card-glass" style={{ border: '1px solid var(--border-medium)', padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="badge badge-cyan">{meta?.shortCode || 'CEUC301 - FOS'}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)', fontWeight: 700 }}>● Active Course</span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                  {meta?.name}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  Information Technology, CSPIT, CHARUSAT
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Course Code:</span>
                    <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{meta?.code}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Semester:</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{meta?.semester}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Credit Hours:</span>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{meta?.credits}</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '0.35rem' }}>Subject Coordinator:</span>
                    <strong style={{ color: 'var(--accent-primary)', fontSize: '0.96rem' }}>{coordinator}</strong>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      Faculty: Prof. Madhav Ajwalia, Prof. Binal Kaka
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <a 
                    href={meta?.syllabusPdfUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-secondary btn-sm"
                  >
                    Download Syllabus
                  </a>
                  <button className="btn btn-outline btn-sm" onClick={() => setActivePage('materials')}>
                    Materials
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Course Outcomes (CO1 to CO7) Section */}
      <section style={{ padding: '3.5rem 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <SectionHeader
            tag="Learning Outcomes"
            title="Course Outcome"
            subtitle="Core proficiencies and technical objectives for CEUC301 : Fundamentals of Operating System Design."
            rightContent={
              <a 
                href={meta?.syllabusPdfUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-secondary btn-sm"
              >
                Course Content: Download Syllabus 📄
              </a>
            }
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            {courseOutcomes.map((co) => (
              <div key={co.code} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderLeft: '4px solid var(--accent-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span className="badge badge-blue" style={{ fontSize: '0.82rem', padding: '0.3rem 0.75rem' }}>
                    {co.code}
                  </span>
                  <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{co.title}</h4>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6', margin: 0 }}>
                  {co.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Teaching and Examination Scheme */}
      {teachingScheme && (
        <section style={{ padding: '4rem 0' }}>
          <div className="container">
            <SectionHeader
              tag="Evaluation Structure"
              title="Teaching and Examination Scheme"
              subtitle="Comprehensive credit framework, lecture hours, and theoretical & practical marks split."
            />

            <div className="card card-glass" style={{ padding: '2rem', border: '1px solid var(--border-medium)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Lectures</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-primary)', marginTop: '0.25rem' }}>
                    {teachingScheme.lectures}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Practicals</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-emerald)', marginTop: '0.25rem' }}>
                    {teachingScheme.practicals}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Credits</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-cyan)', marginTop: '0.25rem' }}>
                    {teachingScheme.credits}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>Total Marks</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-purple)', marginTop: '0.25rem' }}>
                    {teachingScheme.grandTotal} Marks
                  </div>
                </div>
              </div>

              {/* Theory and Practical Breakdown */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.5rem', background: '#ffffff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Theory Assessment</h4>
                    <span className="badge badge-blue">100 Marks</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                      <span>Theory Continuous Assessment:</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{teachingScheme.theoryMarks.continuous} Marks</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>University End-Semester Exam:</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{teachingScheme.theoryMarks.endSem} Marks</strong>
                    </div>
                  </div>
                </div>

                <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '1.5rem', background: '#ffffff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Practical Assessment</h4>
                    <span className="badge badge-emerald">50 Marks</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem' }}>
                      <span>Practical Continuous Assessment:</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{teachingScheme.practicalMarks.continuous} Marks</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>University Practical Exam & Viva:</span>
                      <strong style={{ color: 'var(--text-primary)' }}>{teachingScheme.practicalMarks.endSem} Marks</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Subject Coordinator & Division Teaching Team Section */}
      <section style={{ padding: '4rem 0 5.5rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <SectionHeader
            tag="Academic Faculty & Allocation"
            title="Subject Coordinator & Division Teaching Team"
            subtitle="Information Technology, CSPIT, CHARUSAT"
          />

          {/* Subject Coordinator Featured Spotlight Card */}
          <div className="card" style={{ 
            padding: '2rem', 
            marginBottom: '2.5rem', 
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)', 
            border: '1.5px solid var(--accent-primary)',
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.08)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                <div style={{ 
                  width: '68px', 
                  height: '68px', 
                  borderRadius: '50%', 
                  background: 'var(--grad-primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: '#ffffff', 
                  fontWeight: 800, 
                  fontSize: '1.4rem', 
                  fontFamily: 'var(--font-heading)',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
                  flexShrink: 0
                }}>
                  NS
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.35rem' }}>
                    <span className="badge badge-blue">Subject Coordinator</span>
                    <span className="badge badge-cyan">IT-2 Lecture & Lab Faculty</span>
                  </div>
                  <h3 style={{ margin: 0, fontSize: '1.4rem', color: 'var(--text-primary)' }}>
                    Prof. Nishat Shaikh
                  </h3>
                  <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    Assistant Professor • Department of Information Technology, CHARUSAT
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.86rem', color: 'var(--text-secondary)', background: 'var(--card-bg)', padding: '0.85rem 1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div><strong style={{ color: 'var(--text-primary)' }}>Course Code:</strong> {meta?.code || 'CEUC301'} - FOS</div>
                <div><strong style={{ color: 'var(--text-primary)' }}>Department:</strong> {meta?.department || 'Information Technology'}</div>
              </div>
            </div>
          </div>

          {/* Division Teaching & Laboratory Allocation Cards */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              Division Teaching & Laboratory Allocation
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
              {/* Division IT-1 */}
              <div className="card" style={{ padding: '1.75rem', borderTop: '4px solid var(--accent-primary)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Division IT - 1
                  </h4>
                  <span className="badge badge-blue">Classroom & Lab</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Lectures */}
                  <div style={{ background: 'var(--bg-secondary)', padding: '1rem 1.15rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                      Theory Lecture Faculty
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      <li>Prof. Madhav Ajwalia</li>
                      <li>Prof. Binal Kaka</li>
                    </ul>
                  </div>

                  {/* Laboratory */}
                  <div style={{ background: 'var(--bg-secondary)', padding: '1rem 1.15rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      Practical / Lab Faculty
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      <li>Prof. Madhav Ajwalia</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Division IT-2 */}
              <div className="card" style={{ padding: '1.75rem', borderTop: '4px solid var(--accent-cyan)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <h4 style={{ margin: 0, fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    Division IT - 2
                  </h4>
                  <span className="badge badge-cyan">Classroom & Lab</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {/* Lectures */}
                  <div style={{ background: 'var(--bg-secondary)', padding: '1rem 1.15rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-primary)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                      </svg>
                      Theory Lecture Faculty
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      <li>Prof. Nishat Shaikh <span style={{ fontSize: '0.78rem', color: 'var(--accent-primary)', fontWeight: 700 }}>(Coordinator)</span></li>
                      <li>Prof. Binal Kaka</li>
                    </ul>
                  </div>

                  {/* Laboratory */}
                  <div style={{ background: 'var(--bg-secondary)', padding: '1rem 1.15rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-emerald)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                      Practical / Lab Faculty
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      <li>Prof. Nishat Shaikh</li>
                      <li>Prof. Madhav Ajwalia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Faculty Profiles Grid */}
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Faculty Profiles
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '1.5rem' }}>
              {facultyList.map((faculty, idx) => (
                <div key={idx} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.5rem' }}>
                  <div style={{ 
                    width: '54px', 
                    height: '54px', 
                    borderRadius: '50%', 
                    background: faculty.name.includes('Nishat') ? 'var(--grad-primary)' : 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: '#fff', 
                    fontWeight: 800, 
                    fontSize: '1.15rem', 
                    fontFamily: 'var(--font-heading)', 
                    flexShrink: 0 
                  }}>
                    {faculty.initials}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                      <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-primary)' }}>{faculty.name}</h4>
                      {faculty.name.includes('Nishat') && (
                        <span className="badge badge-blue" style={{ fontSize: '0.7rem', padding: '0.15rem 0.45rem' }}>Coordinator</span>
                      )}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {faculty.role}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.65rem' }}>
                      {faculty.department}
                    </div>
                    <div style={{ fontSize: '0.8rem', background: 'var(--bg-secondary)', padding: '0.45rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)', color: 'var(--text-secondary)' }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Allocation: </strong>{faculty.allocations}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
