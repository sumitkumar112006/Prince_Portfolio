import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Navbar.css';
import { OWNER } from '../data';

const Navbar = () => {
  const navRef = useRef(null);
  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav ref={navRef} className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => handleScroll('home')}>
          PK
        </div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link} className="nav-item">
              <button 
                className="nav-btn" 
                onClick={() => handleScroll(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
