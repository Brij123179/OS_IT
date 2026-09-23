import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SyllabusPage from './pages/SyllabusPage';
import LessonPlanningPage from './pages/LessonPlanningPage';
import TheoryAssessmentPage from './pages/TheoryAssessmentPage';
import PracticalAssessmentPage from './pages/PracticalAssessmentPage';
import MaterialsPage from './pages/MaterialsPage';
import { courseTemplateData } from './data/courseTemplateData';

export default function App() {
  // Page Routing State ('home' | 'syllabus' | 'lessons' | 'theory' | 'practical' | 'materials')
  const [activePage, setActivePage] = useState('home');

  // Global Toast Notifications State
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'light');
    try {
      localStorage.setItem('it_os_theme', 'light');
    } catch (e) {
      console.error(e);
    }
  }, []);

  const addToast = (message, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  return (
    <div className="app-wrapper">
      {/* Global Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        meta={courseTemplateData.meta}
      />

      {/* Main Page View Container */}
      <main className="main-content">
        {activePage === 'home' && (
          <HomePage
            data={courseTemplateData}
            setActivePage={setActivePage}
            onToast={addToast}
          />
        )}
        {activePage === 'syllabus' && (
          <SyllabusPage
            data={courseTemplateData}
            onToast={addToast}
          />
        )}
        {activePage === 'lessons' && (
          <LessonPlanningPage
            data={courseTemplateData}
            onToast={addToast}
          />
        )}
        {activePage === 'theory' && (
          <TheoryAssessmentPage
            data={courseTemplateData}
            onToast={addToast}
          />
        )}
        {activePage === 'practical' && (
          <PracticalAssessmentPage
            data={courseTemplateData}
            onToast={addToast}
          />
        )}
        {activePage === 'materials' && (
          <MaterialsPage
            data={courseTemplateData}
            onToast={addToast}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        meta={courseTemplateData.meta}
        setActivePage={setActivePage}
      />

      {/* Toast Notification Container */}
      <div 
        style={{ 
          position: 'fixed', 
          bottom: '24px', 
          right: '24px', 
          zIndex: 1000, 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '10px', 
          pointerEvents: 'none' 
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            style={{
              background: 'var(--bg-surface-elevated)',
              color: 'var(--text-primary)',
              padding: '0.85rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              border: `1px solid ${toast.type === 'success' ? 'var(--accent-emerald)' : 'var(--accent-primary)'}`,
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '0.88rem',
              fontWeight: 500,
              pointerEvents: 'auto',
              animation: 'fadeIn 0.25s ease'
            }}
          >
            {toast.type === 'success' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
            )}
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
