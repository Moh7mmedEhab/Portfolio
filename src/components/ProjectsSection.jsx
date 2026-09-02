import React from 'react';
import { Github, Play } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Tactical Chess Analyzer & Engine',
      category: 'Chess & Real-time Web',
      status: 'Calculated Strategy',
      description: 'Interactive chess analysis board featuring tactical puzzle generators, opening book lookups, and deep calculation algorithms mimicking master-level play (inspired by 2125 peak Elo).',
      techStack: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'Bootstrap'],
      demoUrl: '#',
      githubUrl: 'https://github.com/mohammedehab'
    },
    {
      title: 'Enterprise E-Commerce & Inventory Platform',
      category: 'Full-Stack Architecture',
      status: 'Production Ready',
      description: 'Comprehensive store platform built on Laravel and MySQL with multi-tier role authorization, order tracking, relational inventory management, and REST APIs.',
      techStack: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Bootstrap'],
      demoUrl: '#',
      githubUrl: 'https://github.com/mohammedehab'
    },
    {
      title: 'Linux Vulnerability & Security Scanner',
      category: 'Cybersecurity & Systems',
      status: 'Defensive Hardening',
      description: 'Automated Python security audit suite that inspects server configurations, scans open network ports, and generates defensive hardening reports.',
      techStack: ['Python', 'Linux CLI', 'Bash', 'Express.js', 'React'],
      demoUrl: '#',
      githubUrl: 'https://github.com/mohammedehab'
    },
    {
      title: 'Multi-Tenant SaaS Management API',
      category: 'Backend & Database',
      status: 'Scalable Systems',
      description: 'Node/Express REST API system designed for multi-tenant software with JWT authentication, rate limiting, MySQL relational schema, and secure middleware.',
      techStack: ['Node.js', 'Express.js', 'MySQL', 'JWT Auth', 'Git'],
      demoUrl: '#',
      githubUrl: 'https://github.com/mohammedehab'
    },
    {
      title: 'High-Throughput Data Pipeline',
      category: 'Systems & Algorithms',
      status: 'Low Latency',
      description: 'Fast data ingestion and processing microservice implemented in C++ and Python, handling real-time data parsing with minimal memory footprint.',
      techStack: ['C++', 'Python', 'Linux Server', 'Data Structures'],
      demoUrl: '#',
      githubUrl: 'https://github.com/mohammedehab'
    },
    {
      title: 'Zero-Gradient Modern SPA Portfolio',
      category: 'Frontend Engineering',
      status: 'Design System',
      description: 'High-performance portfolio web app engineered with React, Vite, Bootstrap 5, dark/light theme switcher, interactive Linux terminal, and direct mailer.',
      techStack: ['React', 'Vite', 'Bootstrap 5', 'CSS Variables', 'EmailJS'],
      demoUrl: '#',
      githubUrl: 'https://github.com/mohammedehab'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        
        {/* Section Heading */}
        <div className="mb-5">
          <div className="section-tag">
            <span className="font-mono text-primary-accent">Portfolio Showcase</span>
            <span className="text-dim">|</span>
            <span className="text-amber">Selected Projects</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-primary-accent">Projects</span> & Systems
          </h2>
          <p className="section-subtitle">
            A curated selection of full-stack web applications, chess systems, and security tools built with speed, precision, and clean code.
          </p>
        </div>

        {/* 3D Perspective Rounded Cards Grid */}
        <div className="row g-4">
          {projects.map((proj, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="project-card-perspective">
                <div className="project-card-inner">
                  
                  {/* Top Details */}
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="project-tag-badge">{proj.category}</span>
                      <span className="project-status-pill">{proj.status}</span>
                    </div>

                    <h3 className="project-title">{proj.title}</h3>
                    <p className="text-muted-custom mb-0" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                      {proj.description}
                    </p>
                  </div>

                  {/* Bottom: Tech Chips & Links */}
                  <div>
                    <div className="project-tech-stack">
                      {proj.techStack.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-chip">{tech}</span>
                      ))}
                    </div>

                    <div className="d-flex align-items-center justify-content-between pt-3 border-top border-dark">
                      <a 
                        href="https://wa.me/201062089220?text=Hi%20Mohammed,%20I%20am%20interested%20in%20your%20projects" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-solid-primary btn-sm py-1.5 px-3"
                        style={{ fontSize: '0.82rem' }}
                      >
                        <Play size={13} />
                        <span>Request Demo</span>
                      </a>

                      <a 
                        href={proj.githubUrl} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn-outline-custom btn-sm py-1.5 px-3 font-mono"
                        style={{ fontSize: '0.82rem' }}
                      >
                        <Github size={13} />
                        <span>Source</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="mt-5 p-4 rounded-4 custom-card text-center">
          <h3 className="h5 text-main mb-2">Need a custom web solution or specialized full-stack project?</h3>
          <p className="text-muted-custom mb-3" style={{ fontSize: '0.92rem' }}>
            I specialize in building performant frontend applications in React and secure backend APIs in Laravel and Node.js.
          </p>
          <a 
            href="https://wa.me/201062089220?text=Hi%20Mohammed,%20let's%20build%20a%20project%20together" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-solid-green"
          >
            <span>Start a Project on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
