import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, Send, Copy, Check, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const phoneNumber = "+201062089220";
  const emailAddress = "pro.mohammedehab@gmail.com";

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Dispatching message...' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_default';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_default';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_default';

      if (serviceId !== 'service_default') {
        await emailjs.send(serviceId, templateId, formData, publicKey);
        setStatus({
          state: 'success',
          message: 'Message dispatched successfully! I will respond promptly.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(
          `Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        
        window.location.href = mailtoLink;
        
        setStatus({
          state: 'success',
          message: 'Opening your default mail client with your prefilled message!'
        });
      }
    } catch (err) {
      const fallbackMailto = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      window.location.href = fallbackMailto;
      
      setStatus({
        state: 'success',
        message: 'Mail link triggered! You can also message me directly on WhatsApp.'
      });
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        
        {/* Section Heading */}
        <div className="mb-5">
          <div className="section-tag">
            <span className="font-mono text-primary-accent">Direct Communication</span>
            <span className="text-dim">|</span>
            <span className="text-green">Worldwide Inquiries</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="text-primary-accent">Extraordinary</span>
          </h2>
          <p className="section-subtitle">
            Available for software engineering roles, technical interviews, and freelance projects worldwide.
          </p>
        </div>

        <div className="row g-4 g-lg-5">
          
          {/* Left Column: Direct Channels */}
          <div className="col-lg-5">
            <h3 className="h4 text-main mb-3">Instant Contact Channels</h3>
            <p className="text-muted-custom mb-4" style={{ fontSize: '0.95rem' }}>
              Choose your preferred communication channel. I typically respond within minutes on WhatsApp and within 24 hours via email.
            </p>

            <div className="d-flex flex-column gap-3 mb-4">
              
              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/201062089220?text=Hi%20Mohammed,%20I%20would%20like%20to%20discuss%20a%20project" 
                target="_blank" 
                rel="noreferrer" 
                className="custom-card p-3 d-flex align-items-center gap-3 text-decoration-none"
              >
                <div className="p-3 rounded-3 text-green" style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}>
                  <MessageSquare size={24} />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-main font-mono fw-bold" style={{ fontSize: '0.95rem' }}>WhatsApp Instant</span>
                    <span className="badge bg-dark text-green font-mono" style={{ borderRadius: '6px' }}>Fastest</span>
                  </div>
                  <div className="text-muted-custom font-mono" style={{ fontSize: '0.85rem' }}>+20 106 208 9220</div>
                </div>
              </a>

              {/* Phone Direct Card */}
              <div className="custom-card p-3 d-flex align-items-center gap-3">
                <div className="p-3 rounded-3 text-amber" style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}>
                  <Phone size={24} />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <a href="tel:+201062089220" className="text-main font-mono fw-bold text-decoration-none" style={{ fontSize: '0.95rem' }}>
                      Phone Call
                    </a>
                    <button 
                      onClick={handleCopyPhone} 
                      className="btn btn-sm btn-outline-custom p-1 px-2.5 font-mono"
                      style={{ fontSize: '0.75rem', borderRadius: '6px' }}
                    >
                      {copiedPhone ? <span className="text-green"><Check size={12} /> Copied</span> : <span><Copy size={12} /> Copy</span>}
                    </button>
                  </div>
                  <a href="tel:+201062089220" className="text-muted-custom font-mono text-decoration-none" style={{ fontSize: '0.85rem' }}>
                    +20 106 208 9220
                  </a>
                </div>
              </div>

              {/* Gmail Direct Card */}
              <div className="custom-card p-3 d-flex align-items-center gap-3">
                <div className="p-3 rounded-3 text-primary-accent" style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border-color)' }}>
                  <Mail size={24} />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex justify-content-between align-items-center">
                    <a href={`mailto:${emailAddress}`} className="text-main font-mono fw-bold text-decoration-none" style={{ fontSize: '0.95rem' }}>
                      Official Gmail
                    </a>
                    <button 
                      onClick={handleCopyEmail} 
                      className="btn btn-sm btn-outline-custom p-1 px-2.5 font-mono"
                      style={{ fontSize: '0.75rem', borderRadius: '6px' }}
                    >
                      {copiedEmail ? <span className="text-green"><Check size={12} /> Copied</span> : <span><Copy size={12} /> Copy</span>}
                    </button>
                  </div>
                  <a href={`mailto:${emailAddress}`} className="text-muted-custom font-mono text-decoration-none" style={{ fontSize: '0.82rem' }}>
                    pro.mohammedehab@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Status Info */}
            <div className="custom-card p-3">
              <div className="d-flex align-items-center gap-2 text-green font-mono mb-1" style={{ fontSize: '0.82rem' }}>
                <span className="text-green fw-bold">•</span>
                <span>Timezone & Location</span>
              </div>
              <p className="text-dim mb-0 font-mono" style={{ fontSize: '0.8rem' }}>
                Cairo (UTC+3) | Egypt / Open to Remote Roles Worldwide
              </p>
            </div>

          </div>

          {/* Right Column: Automated Message Form */}
          <div className="col-lg-7">
            <div className="custom-card p-4 p-md-5">
              <h3 className="h4 text-main mb-2">Send an Automated Message</h3>
              <p className="text-muted-custom mb-4" style={{ fontSize: '0.92rem' }}>
                Your message will be transmitted directly to <strong className="text-main">pro.mohammedehab@gmail.com</strong>.
              </p>

              {status.state === 'success' && (
                <div className="alert alert-dark border-success text-main mb-4 d-flex align-items-center gap-2" role="alert" style={{ backgroundColor: 'var(--bg-elevated)', borderRadius: '10px' }}>
                  <CheckCircle2 className="text-green" size={20} />
                  <span style={{ fontSize: '0.9rem' }}>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label className="form-label-custom">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mohammed Ehab"
                      className="form-control form-control-custom w-100"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label-custom">Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="pro.mohammedehab@gmail.com"
                      className="form-control form-control-custom w-100"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label-custom">Subject *</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Job Interview / Freelance Web Project / Collaboration"
                    className="form-control form-control-custom w-100"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label-custom">Message Details *</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your requirements, timeline, or interview details..."
                    className="form-control form-control-custom w-100"
                  ></textarea>
                </div>

                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <button 
                    type="submit" 
                    className="btn-solid-primary"
                    disabled={status.state === 'loading'}
                  >
                    <Send size={16} />
                    <span>{status.state === 'loading' ? 'Transmitting...' : 'Send Message Now'}</span>
                  </button>

                  <span className="font-mono text-dim" style={{ fontSize: '0.78rem' }}>
                    Direct to: pro.mohammedehab@gmail.com
                  </span>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;
