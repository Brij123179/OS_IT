import React from 'react';
import SectionHeader from '../components/SectionHeader';

export default function TheoryAssessmentPage({ data }) {
  const { meta } = data;

  return (
    <div className="container" style={{ paddingTop: '2.5rem' }}>
      <SectionHeader
        tag="Academic Assessment"
        title="Theory Assessment"
        subtitle="Theory Continuous Assessment (50 Marks) & University Examination (50 Marks)"
      />

      {/* Official Theory Assessment Structure */}
      <div className="card card-glass" style={{ marginBottom: '3rem', padding: '2rem', border: '1px solid var(--border-medium)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
          <div>
            <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', fontWeight: 700 }}>
              Evaluation Structure
            </span>
            <h3 style={{ fontSize: '1.4rem', margin: '0.2rem 0 0' }}>Theory Assessment Scheme [100 Marks]</h3>
          </div>
          <span className="badge badge-blue" style={{ fontSize: '0.85rem' }}>Total: 100 Marks</span>
        </div>

        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '780px', lineHeight: '1.6' }}>
          Continuous internal evaluation and university examination criteria for <strong>{meta?.code || 'CEUC301'}: {meta?.name || 'Fundamentals of Operating System Design'}</strong>, Information Technology, CSPIT, CHARUSAT.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          
          {/* Card 1: Theory Continuous Assessment (50 Marks) */}
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h4 style={{ margin: 0, fontSize: '1.15rem' }}>Theory Continuous Assessment</h4>
              <span className="badge badge-blue">50 Marks</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              Evaluated continually throughout the semester:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              {/* Component 1: CCE */}
              <div style={{ padding: '0.9rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <strong style={{ fontSize: '0.92rem' }}>Continuous and Comprehensive Evaluation (CCE)</strong>
                  <span className="badge badge-cyan">20 Marks</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Classroom tutorials, surprise tests, and regular problem sets.</div>
              </div>

              {/* Component 2: Sessional Exam */}
              <div style={{ padding: '0.9rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <strong style={{ fontSize: '0.92rem' }}>Sessional Exam [Tablet based]</strong>
                  <span className="badge badge-blue">20 Marks</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Digital institutional mid-semester tablet examination.</div>
              </div>

              {/* Component 3: NPTEL Course */}
              <div style={{ padding: '0.9rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <strong style={{ fontSize: '0.92rem' }}>NPTEL Course Certification</strong>
                  <span className="badge badge-emerald">10 Marks</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                  <a href={meta?.nptelCourseUrl} target="_blank" rel="noreferrer" style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>
                    Introduction To Operating Systems ↗
                  </a>{' '}
                  <span style={{ color: 'var(--text-muted)' }}>By Prof. Chester Rebeiro | IIT Madras</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: University Theory Examination (50 Marks) */}
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <h4 style={{ margin: 0, fontSize: '1.15rem' }}>University Theory Examination</h4>
              <span className="badge badge-emerald">50 Marks</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              End-semester comprehensive written examination conducted by CHARUSAT:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              <div style={{ padding: '1.1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <strong style={{ fontSize: '0.95rem' }}>End-Sem Written Paper</strong>
                  <span className="badge badge-emerald">50 Marks</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  Comprehensive summative exam evaluating students across all Course Outcomes (CO1 to CO7), architectural analysis, algorithmic design, and problem solving.
                </p>
              </div>

              <div style={{ padding: '1.1rem', background: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Examination Details
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  <li><strong>Duration:</strong> 3 Hours</li>
                  <li><strong>Coverage:</strong> All 7 Syllabus Units</li>
                  <li><strong>Question Format:</strong> Analytical problems, architecture design, and algorithm derivation</li>
                  <li><strong>Passing Standard:</strong> As per CHARUSAT University academic norms</li>
                </ul>
              </div>

              <div style={{ padding: '1rem', background: '#eff6ff', borderRadius: 'var(--radius-md)', border: '1px solid #bfdbfe', marginTop: 'auto' }}>
                <div style={{ fontSize: '0.86rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                  Total Theory Weightage: 50 (Internal) + 50 (End-Sem) = 100 Marks
                </div>
              </div>
            </div>
          </div>

        </div>
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
