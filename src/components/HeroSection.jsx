import React from 'react';
import { MessageSquare, Layers, Briefcase } from 'lucide-react';
import TerminalWidget from './TerminalWidget';
import profilePic from '../assets/profile.jpeg';
import { getDynamicAge } from '../utils/age';

const HeroSection = () => {
  const age = getDynamicAge();

  return (
    <section id="hero" className="section-padding py-4 py-lg-5">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          
          {/* Left Column: Intro & Headline */}
          <div className="col-lg-7">
            {/* Tactical Tag */}
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ backgroundColor: 'var(--bg-surface)', border: '1px solid var(--border-color)', fontSize: '0.85rem' }}>
              <span className="text-amber font-mono fw-bold">2125 Peak Elo</span>
              <span className="text-dim">|</span>
              <span className="font-mono text-primary-accent">Full-Stack Developer & Linux Power User</span>
            </div>

            {/* Headline */}
            <h1 className="section-title mb-3" style={{ fontSize: '2.8rem', lineHeight: '1.16' }}>
              Hi, I'm <span className="text-primary-accent">Mohammed Ehab</span>.<br />
              Architecting Fast Web Systems & Strategic Code.
            </h1>

            {/* Narrative summary with dynamic age */}
            <p className="section-subtitle mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
              {age.formatted} old Full-Stack Web Developer with <strong className="text-main">4 years of continuous learning</strong> and <strong className="text-main">3 years at WE School for Applied Technology</strong>. Competitive chess player with a <strong className="text-amber">highest rating of 2125 Elo</strong>, bringing deep calculation, Linux precision, and security-first engineering to modern web applications.
            </p>

            {/* 4 Stats Cards */}
            <div className="row g-2 g-sm-3 mb-4">
              <div className="col-6 col-sm-3">
                <div className="custom-card p-3 text-center">
                  <div className="font-mono fw-bold text-amber" style={{ fontSize: '1.5rem' }}>4 Yrs</div>
                  <div className="text-muted-custom font-mono" style={{ fontSize: '0.74rem' }}>Learning Journey</div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="custom-card p-3 text-center">
                  <div className="font-mono fw-bold text-primary-accent" style={{ fontSize: '1.5rem' }}>3 Yrs</div>
                  <div className="text-muted-custom font-mono" style={{ fontSize: '0.74rem' }}>WE Applied Tech</div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="custom-card p-3 text-center">
                  <div className="font-mono fw-bold text-amber" style={{ fontSize: '1.5rem' }}>2125</div>
                  <div className="text-muted-custom font-mono" style={{ fontSize: '0.74rem' }}>Highest Chess Elo</div>
                </div>
              </div>
              <div className="col-6 col-sm-3">
                <div className="custom-card p-3 text-center">
                  <div className="font-mono fw-bold text-green" style={{ fontSize: '1.5rem' }}>15+</div>
                  <div className="text-muted-custom font-mono" style={{ fontSize: '0.74rem' }}>Tech Stacks</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="d-flex flex-wrap align-items-center gap-3">
              <a 
                href="https://wa.me/201062089220?text=Hi%20Mohammed,%20let's%20discuss%20a%20project" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-solid-green"
              >
                <MessageSquare size={17} />
                <span>Chat on WhatsApp</span>
              </a>

              <a href="#projects" className="btn-solid-primary">
                <Briefcase size={17} />
                <span>View Projects</span>
              </a>

              <a href="#skills" className="btn-outline-custom">
                <Layers size={17} />
                <span>Skills Matrix</span>
              </a>
            </div>
          </div>

          {/* Right Column: Avatar Frame & Terminal Widget */}
          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              
              {/* Profile Card: Photo on Left & Info Div on Right inside Flexbox */}
              <div className="custom-card p-3 p-sm-3.5">
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-3">
                  
                  {/* Left: 20px Rounded Square Picture */}
                  <div className="profile-avatar-box flex-shrink-0">
                    <img 
                      src={profilePic} 
                      alt="Mohammed Ehab Profile" 
                      className="profile-avatar-img"
                    />
                  </div>

                  {/* Right: Info Div */}
                  <div className="flex-grow-1 text-center text-sm-start">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-start gap-2 mb-1">
                      <h2 className="h5 text-main mb-0 fw-bold">Mohammed Ehab</h2>
                      <span className="badge bg-dark font-mono text-primary-accent border border-dark" style={{ fontSize: '0.72rem', borderRadius: '6px' }}>
                        18 Y/O
                      </span>
                    </div>

                    <div className="font-mono text-primary-accent fw-semibold mb-2" style={{ fontSize: '0.82rem' }}>
                      Full-Stack Developer & Systems
                    </div>

                    <ul className="list-unstyled mb-0 font-mono text-muted-custom" style={{ fontSize: '0.78rem', lineHeight: '1.7' }}>
                      <li className="d-flex justify-content-between justify-content-sm-start gap-2">
                        <span className="text-dim">Study:</span>
                        <span className="text-main">WE Applied Tech (3 Yrs)</span>
                      </li>
                      <li className="d-flex justify-content-between justify-content-sm-start gap-2">
                        <span className="text-dim">Chess Elo:</span>
                        <span className="text-amber fw-bold">2125 Peak</span>
                      </li>
                      <li className="d-flex justify-content-between justify-content-sm-start gap-2">
                        <span className="text-dim">Experience:</span>
                        <span className="text-green">4 Years Coding</span>
                      </li>
                      <li className="d-flex justify-content-between justify-content-sm-start gap-2">
                        <span className="text-dim">Location:</span>
                        <span className="text-main">Egypt (Remote Ready)</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

              {/* Terminal Widget */}
              <TerminalWidget />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
