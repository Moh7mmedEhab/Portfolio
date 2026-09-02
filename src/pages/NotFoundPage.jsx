import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Terminal, AlertTriangle } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="section-padding d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="error-box">
          
          <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded font-mono text-amber" style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border-color)', fontSize: '0.82rem' }}>
            <AlertTriangle size={15} />
            <span>Illegal Move | Position Not On Board</span>
          </div>

          <div className="error-code">404</div>

          <h1 className="h3 text-main mb-3">Route Not Found</h1>
          <p className="text-muted-custom mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            The URL path you requested does not exist or has been moved. Calculate your next move and return to the home command line.
          </p>

          <div className="p-3 mb-4 rounded text-start font-mono" style={{ backgroundColor: 'var(--bg-terminal)', border: '1px solid var(--border-color)', fontSize: '0.8rem', color: '#f8fafc' }}>
            <div><span className="text-green">ehab@linux:~$</span> curl -I {window.location.pathname}</div>
            <div className="text-amber">HTTP/1.1 404 Not Found</div>
            <div className="text-dim">Content-Type: text/plain; charset=utf-8</div>
            <div className="text-primary-accent">&gt; Recommendation: Return to ~ / Root</div>
          </div>

          <div className="d-flex justify-content-center gap-3">
            <Link to="/" className="btn-solid-primary">
              <Home size={16} />
              <span>Return to Root (Home)</span>
            </Link>
            <Link to="/skills" className="btn-outline-custom">
              <span>Explore Skills</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
