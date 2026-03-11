import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { OWNER, CONTACT } from '../data';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(itemsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <footer id="contact" className="contact-section" ref={sectionRef}>
      <div className="contact-content">
        <h2 className="contact-title orbitron" ref={el => itemsRef.current[0] = el}>
          Let's Connect Across the Galaxy
        </h2>
        
        <div className="contact-grid">
          {CONTACT.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card glass-card"
              ref={el => itemsRef.current[index + 1] = el}
            >
              <span className="contact-icon">{item.icon}</span>
              <div className="contact-info">
                <span className="contact-label orbitron">{item.label}</span>
                <span className="contact-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      
      <div className="footer-bar orbitron">
        © 2025 {OWNER.name} · BUILT WITH 🚀 & STARDUST
      </div>
    </footer>
  );
};

export default Contact;
