import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-between mb-4">
          
          {/* Brand & Subtitle */}
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="brand-monogram-box font-mono">ME</span>
              <span className="font-mono text-main fw-bold" style={{ fontSize: '1.05rem' }}>
                Mohammed Ehab
              </span>
            </div>
            <p className="text-muted-custom mb-0 font-mono" style={{ fontSize: '0.82rem' }}>
              Full-Stack Web Developer | Competitive Chess Master (2125 Peak Elo) | Linux Power User
            </p>
          </div>

          {/* Quick SPA Links (No static button, floating scroll button handles scrolling) */}
          <div className="col-md-6 text-md-end">
            <div className="d-flex flex-wrap justify-content-md-end align-items-center gap-3 font-mono" style={{ fontSize: '0.85rem' }}>
              <Link to="/" className="text-muted-custom text-decoration-none">Root</Link>
              <Link to="/about" className="text-muted-custom text-decoration-none">About</Link>
              <Link to="/skills" className="text-muted-custom text-decoration-none">Skills</Link>
              <Link to="/projects" className="text-muted-custom text-decoration-none">Projects</Link>
              <Link to="/contact" className="text-muted-custom text-decoration-none">Contact</Link>
            </div>
          </div>

        </div>

        <div className="pt-3 border-top border-dark d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 font-mono text-dim" style={{ fontSize: '0.78rem' }}>
          <div>
            &copy; {currentYear} Mohammed Ehab. All rights reserved.
          </div>
          <div>
            Built with React, Vite & Bootstrap 5 (Zero Gradients).
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
