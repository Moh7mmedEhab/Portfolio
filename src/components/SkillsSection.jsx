import React, { useState } from 'react';
import { CheckCircle2, Code2, Cpu, Database, Globe, Layers, Server, ShieldCheck, Terminal, Users, MessageSquare } from 'lucide-react';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skillsData = [
    {
      name: 'HTML5',
      category: 'frontend',
      level: 'Advanced',
      percentage: 95,
      meterClass: 'skill-level-fill-blue',
      icon: '< >',
      experience: '4 Years',
      description: 'Semantic markup, accessibility, responsive structure, and clean SEO practices.'
    },
    {
      name: 'CSS3',
      category: 'frontend',
      level: 'Advanced',
      percentage: 92,
      meterClass: 'skill-level-fill-blue',
      icon: '{ }',
      experience: '4 Years',
      description: 'Modern CSS Grid, Flexbox, keyframe animations, custom properties, and fluid styling.'
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'frontend',
      level: 'Advanced',
      percentage: 90,
      meterClass: 'skill-level-fill-blue',
      icon: 'JS',
      experience: '4 Years',
      description: 'Async/Await, Promises, DOM APIs, event loop, and modern functional patterns.'
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      level: 'Intermediate',
      percentage: 82,
      meterClass: 'skill-level-fill-blue',
      icon: 'TS',
      experience: '2 Years',
      description: 'Static type checking, interfaces, generics, and scalable code structures.'
    },
    {
      name: 'Bootstrap 5',
      category: 'frontend',
      level: 'Advanced',
      percentage: 95,
      meterClass: 'skill-level-fill-blue',
      icon: 'BS',
      experience: '3 Years',
      description: 'Custom color systems, responsive grid layouts, and rapid prototype delivery.'
    },
    {
      name: 'React.js',
      category: 'frontend',
      level: 'Advanced',
      percentage: 88,
      meterClass: 'skill-level-fill-blue',
      icon: '⚛',
      experience: '3 Years',
      description: 'Custom Hooks, Context API, component lifecycles, state management, and Vite.'
    },
    {
      name: 'PHP',
      category: 'backend',
      level: 'Advanced',
      percentage: 90,
      meterClass: 'skill-level-fill',
      icon: 'PHP',
      experience: '3 Years',
      description: 'Object-oriented programming, MVC architecture, sessions, and secure REST APIs.'
    },
    {
      name: 'Laravel',
      category: 'backend',
      level: 'Advanced',
      percentage: 88,
      meterClass: 'skill-level-fill',
      icon: 'LAR',
      experience: '3 Years',
      description: 'Eloquent ORM, Blade templating, routing, migrations, middlewares, and authentication.'
    },
    {
      name: 'Node.js',
      category: 'backend',
      level: 'Intermediate',
      percentage: 84,
      meterClass: 'skill-level-fill',
      icon: 'NODE',
      experience: '2.5 Years',
      description: 'Server-side JavaScript runtime, event-driven servers, and npm module management.'
    },
    {
      name: 'Express.js',
      category: 'backend',
      level: 'Intermediate',
      percentage: 85,
      meterClass: 'skill-level-fill',
      icon: 'EX',
      experience: '2.5 Years',
      description: 'RESTful API routing, middleware chains, error handling, and JSON payloads.'
    },
    {
      name: 'MySQL',
      category: 'backend',
      level: 'Advanced',
      percentage: 90,
      meterClass: 'skill-level-fill',
      icon: 'SQL',
      experience: '3 Years',
      description: 'Relational database schema design, indexing, foreign keys, and performant SQL queries.'
    },
    {
      name: 'GIT & GitHub',
      category: 'tools',
      level: 'Advanced',
      percentage: 92,
      meterClass: 'skill-level-fill-amber',
      icon: 'GIT',
      experience: '4 Years',
      description: 'Branch management, pull requests, merge conflict resolution, and collaborative workflows.'
    },
    {
      name: 'CPP (C++)',
      category: 'tools',
      level: 'Intermediate',
      percentage: 80,
      meterClass: 'skill-level-fill-amber',
      icon: 'C++',
      experience: '2 Years',
      description: 'Memory concepts, pointers, algorithms, and core computer science fundamentals.'
    },
    {
      name: 'Advanced Python',
      category: 'tools',
      level: 'Advanced',
      percentage: 88,
      meterClass: 'skill-level-fill-amber',
      icon: 'PY',
      experience: '3 Years',
      description: 'Automation scripts, backend microservices, data processing, and scripting pipelines.'
    },
    {
      name: 'Hosting & Deployment',
      category: 'tools',
      level: 'Intermediate',
      percentage: 85,
      meterClass: 'skill-level-fill-amber',
      icon: 'SRV',
      experience: '3 Years',
      description: 'Linux server management, cPanel, domain configuration, VPS setups, and cloud hosting.'
    },
    {
      name: 'Leadership',
      category: 'nontech',
      level: 'Core Strength',
      percentage: 92,
      meterClass: 'skill-level-fill-amber',
      icon: '★',
      experience: '4 Years',
      description: 'Project task organization, clear milestone planning, and taking ownership of delivery.'
    },
    {
      name: 'Strategic Communication',
      category: 'nontech',
      level: 'Core Strength',
      percentage: 94,
      meterClass: 'skill-level-fill-amber',
      icon: '💬',
      experience: '4 Years',
      description: 'Articulating technical architecture and problem solutions clearly to clients and teams.'
    },
    {
      name: 'Teamwork & Collaboration',
      category: 'nontech',
      level: 'Core Strength',
      percentage: 95,
      meterClass: 'skill-level-fill-amber',
      icon: '🤝',
      experience: '4 Years',
      description: 'Constructive code reviews, agile collaboration, pair programming, and positive problem solving.'
    }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        
        {/* Section Heading */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
          <div>
            <div className="section-tag">
              <span className="font-mono text-primary-accent">Competencies Matrix</span>
              <span className="text-dim">|</span>
              <span className="text-green">Full-Stack & Systems</span>
            </div>
            <h2 className="section-title mb-1">
              Skills & <span className="text-primary-accent">Technical Stack</span>
            </h2>
            <p className="section-subtitle mb-0">
              15 technical disciplines and 3 essential collaborative strengths honed through 4 years of continuous learning.
            </p>
          </div>

          <div className="mt-3 mt-md-0 font-mono text-dim" style={{ fontSize: '0.85rem' }}>
            Total Skills: <span className="text-amber fw-bold">{skillsData.length}</span> | Showing: <span className="text-primary-accent fw-bold">{filteredSkills.length}</span>
          </div>
        </div>

        {/* Redesigned Modern Rounded Pill Buttons */}
        <div className="filter-tabs-wrapper">
          <button 
            className={`filter-tab-pill ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Skills ({skillsData.length})
          </button>
          <button 
            className={`filter-tab-pill ${activeTab === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveTab('frontend')}
          >
            Frontend (6)
          </button>
          <button 
            className={`filter-tab-pill ${activeTab === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveTab('backend')}
          >
            Backend & Database (5)
          </button>
          <button 
            className={`filter-tab-pill ${activeTab === 'tools' ? 'active' : ''}`}
            onClick={() => setActiveTab('tools')}
          >
            Languages & Tools (4)
          </button>
          <button 
            className={`filter-tab-pill ${activeTab === 'nontech' ? 'active' : ''}`}
            onClick={() => setActiveTab('nontech')}
          >
            Non-Technical Skills (3)
          </button>
        </div>

        {/* Skills Grid */}
        <div className="row g-3 g-lg-4">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <div className="skill-interactive-card">
                
                {/* Top Info */}
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div className="skill-icon-cube">
                    <span>{skill.icon}</span>
                  </div>
                  <div className="text-end">
                    <span className="badge bg-dark font-mono text-primary-accent border border-dark" style={{ fontSize: '0.75rem', borderRadius: '6px' }}>
                      {skill.level}
                    </span>
                    <div className="font-mono text-dim mt-1" style={{ fontSize: '0.72rem' }}>
                      {skill.experience}
                    </div>
                  </div>
                </div>

                {/* Skill Name & Description */}
                <h4 className="h5 text-main mb-1 fw-bold">{skill.name}</h4>
                <p className="text-muted-custom mb-3" style={{ fontSize: '0.86rem', lineHeight: '1.55' }}>
                  {skill.description}
                </p>

                {/* Level Meter */}
                <div className="skill-level-meter">
                  <div 
                    className={`skill-level-fill ${skill.meterClass}`} 
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-1.5 font-mono text-dim" style={{ fontSize: '0.72rem' }}>
                  <span>Proficiency</span>
                  <span>{skill.percentage}%</span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <div className="mt-5 p-4 custom-card">
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <h3 className="h5 text-main mb-2 d-flex align-items-center gap-2">
                <CheckCircle2 className="text-green" size={20} />
                <span>Ready for Full-Stack Roles & Freelance Delivery</span>
              </h3>
              <p className="text-muted-custom mb-0" style={{ fontSize: '0.92rem' }}>
                Full-stack expertise connecting modern React/TypeScript frontends to scalable Laravel/Node/MySQL backends, all managed cleanly in Linux and Git environments.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a href="https://wa.me/201062089220" target="_blank" rel="noreferrer" className="btn-solid-green">
                <span>Discuss Stack on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
