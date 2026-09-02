import React from 'react';
import { GraduationCap, Award, Terminal, Shield, CheckCircle2, Briefcase, Mail } from 'lucide-react';
import { getDynamicAge } from '../utils/age';

const AboutSection = () => {
  const age = getDynamicAge();

  const pillars = [
    {
      icon: <Award size={22} className="text-amber" />,
      tag: "Strategic Discipline",
      title: "Strategic Thinking & 2125 Peak Elo",
      description: "With a peak chess rating of 2125 Elo, I bring tactical foresight into software development. Every architecture decision is calculated ahead, predicting edge cases, state management, and performance efficiency."
    },
    {
      icon: <Terminal size={22} className="text-green" />,
      tag: "Backend & CLI",
      title: "Linux & Full-Stack Systems",
      description: "Skilled in navigating the Linux command line, configuring server environments, and engineering reliable backend services with PHP/Laravel, Node/Express, MySQL, C++, and Advanced Python."
    },
    {
      icon: <Shield size={22} className="text-primary-accent" />,
      tag: "Security Focus",
      title: "Cybersecurity & Clean Code",
      description: "Building with defensive security habits: sanitizing inputs, securing JWT and session auth, protecting database boundaries, and applying defensive coding practices."
    },
    {
      icon: <CheckCircle2 size={22} className="text-green" />,
      tag: "UI Engineering",
      title: "Responsive Frontend Engineering",
      description: "Creating fast, fluid user interfaces in React and Bootstrap that adapt seamlessly to smartphones, tablets, and wide desktop screens."
    }
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container">
        
        {/* Section Tag & Heading */}
        <div className="mb-5">
          <div className="section-tag">
            <span className="font-mono text-primary-accent">About Mohammed</span>
            <span className="text-dim">|</span>
            <span className="text-amber">Full-Stack & Systems Developer</span>
          </div>
          <h2 className="section-title">
            Engineering Web Systems With <span className="text-primary-accent">Strategy</span> & <span className="text-green">Precision</span>
          </h2>
          <p className="section-subtitle">
            A developer who combines competitive chess calculation (2125 Elo) with 4 years of software development.
          </p>
        </div>

        {/* Narrative & Quick Facts */}
        <div className="row g-4 mb-5">
          <div className="col-lg-8">
            <div className="custom-card h-100">
              <h3 className="h4 text-main mb-3 d-flex align-items-center gap-2">
                <GraduationCap className="text-primary-accent" size={24} />
                <span>Background & Education</span>
              </h3>
              <p className="text-muted-custom mb-3" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                I am an {age.formatted} old Full-Stack Web Developer based in Egypt with <strong className="text-main">4 years of continuous learning</strong> and practical development experience.
              </p>
              <p className="text-muted-custom mb-3" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                I completed <strong className="text-main">3 intensive years of formal training at WE School for Applied Technology</strong>, specializing in Full Stack Web Development. My education focused on relational database systems, modern PHP/Laravel and JavaScript frameworks, Linux server administration, and Git teamwork.
              </p>
              <p className="text-muted-custom mb-0" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                Alongside programming, I compete as an advanced chess player with a <strong className="text-amber">highest rating of 2125 Elo</strong>. This gives me strong analytical stamina, calm debugging under pressure, and structured problem-solving skills for any development team or freelance client.
              </p>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="custom-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h5 text-main mb-3 d-flex align-items-center gap-2">
                  <Briefcase className="text-amber" size={20} />
                  <span>Profile Overview</span>
                </h3>
                <ul className="list-unstyled mb-0 font-mono text-muted-custom" style={{ fontSize: '0.88rem' }}>
                  <li className="mb-2.5 pb-2 border-bottom border-dark d-flex justify-content-between">
                    <span className="text-dim">Name:</span>
                    <span className="text-main">Mohammed Ehab</span>
                  </li>
                  <li className="mb-2.5 pb-2 border-bottom border-dark d-flex justify-content-between">
                    <span className="text-dim">Age:</span>
                    <span className="text-primary-accent">{age.formatted}</span>
                  </li>
                  <li className="mb-2.5 pb-2 border-bottom border-dark d-flex justify-content-between">
                    <span className="text-dim">Experience:</span>
                    <span className="text-main">4 Years Active</span>
                  </li>
                  <li className="mb-2.5 pb-2 border-bottom border-dark d-flex justify-content-between">
                    <span className="text-dim">Study:</span>
                    <span className="text-main">WE Applied Tech (3 Yrs)</span>
                  </li>
                  <li className="mb-2.5 pb-2 border-bottom border-dark d-flex justify-content-between">
                    <span className="text-dim">Chess Elo:</span>
                    <span className="text-amber fw-bold">2125 Peak</span>
                  </li>
                  <li className="d-flex justify-content-between">
                    <span className="text-dim">Location:</span>
                    <span className="text-main">Egypt / Remote</span>
                  </li>
                </ul>
              </div>

              <div className="pt-3 mt-3 border-top border-dark">
                <a href="#contact" className="btn-solid-primary w-100">
                  <Mail size={16} />
                  <span>Contact Mohammed</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="row g-3 g-lg-4">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="col-md-6 col-lg-3">
              <div className="custom-card h-100 p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="skill-icon-cube mb-0">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-dim" style={{ fontSize: '0.75rem' }}>{pillar.tag}</span>
                </div>
                <h4 className="h6 text-main mb-2 fw-bold">{pillar.title}</h4>
                <p className="text-muted-custom mb-0" style={{ fontSize: '0.88rem', lineHeight: '1.6' }}>
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
