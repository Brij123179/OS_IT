import React, { useState } from 'react';

export default function Navbar({ activePage, setActivePage, meta }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'lessons', label: 'Lesson Planning' },
    { id: 'theory', label: 'Theory Assessment' },
    { id: 'practical', label: 'Practical Assessment' },
    { id: 'materials', label: 'Material' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="site-header">
        <div className="container nav-container">
          {/* Brand */}
          <div className="brand-link" onClick={() => handleNavClick('home')}>
            <div className="brand-text">
              <span className="brand-title">{meta?.shortCode || 'CEUC301 - FOS'}</span>
              <span className="brand-subtitle">{meta?.name || 'Fundamentals of Operating System Design'}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions: Mobile Hamburger */}
          <div className="nav-actions">
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
  );
}
