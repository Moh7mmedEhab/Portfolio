import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  return (
    <header id="header">
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          
          {/* Brand: Clean Rounded Monogram + Name */}
          <Link to="/" className="navbar-brand-custom" onClick={closeNav}>
            <span className="brand-monogram-box">ME</span>
            <span className="fw-bold">Mohammed Ehab</span>
          </Link>

          {/* Mobile Right Controls: WhatsApp, Theme Toggle & Burger */}
          <div className="d-flex align-items-center gap-2 d-lg-none">
            <a 
              href="https://wa.me/201062089220?text=Hi%20Mohammed,%20I%20viewed%20your%20portfolio" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-nav-whatsapp"
              title="Chat on WhatsApp"
            >
              <MessageSquare size={16} />
            </a>

            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button 
              className="navbar-toggler navbar-toggler-custom" 
              type="button" 
              onClick={toggleNav}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Navigation Links with Animated Indicator (Root, About, Skills, Projects, Contact) */}
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarMain">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 py-2 py-lg-0">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  end
                  className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                >
                  Root
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/skills" 
                  className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/projects" 
                  className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `nav-link-custom ${isActive ? 'active' : ''}`}
                  onClick={closeNav}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Desktop Actions: WhatsApp Icon Button & Theme Toggle */}
            <div className="d-none d-lg-flex align-items-center gap-2">
              <a 
                href="https://wa.me/201062089220?text=Hi%20Mohammed,%20I%20viewed%20your%20portfolio" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-nav-whatsapp"
                title="Chat on WhatsApp (+201062089220)"
              >
                <MessageSquare size={17} />
              </a>

              <button 
                onClick={toggleTheme} 
                className="theme-toggle-btn"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </button>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
