import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { OWNER } from '../data';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);
  const btnRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(eyebrowRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(taglineRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(btnRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    );

    // Pulse loop for button
    gsap.to(btnRef.current, {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(0, 245, 255, 0.4)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: tl.totalDuration()
    });

    // Scroll indicator animation
    gsap.to(".scroll-line", {
      height: "100%",
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: "power2.inOut",
      delay: tl.totalDuration()
    });

  }, []);

  const scrollToAbout = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      window.scrollTo({
        top: aboutEl.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="hero-content">
        <p ref={eyebrowRef} className="hero-eyebrow orbitron">PORTFOLIO · 2025</p>
        <h1 ref={titleRef} className="hero-title">{OWNER.name}</h1>
        <p ref={taglineRef} className="hero-tagline">{OWNER.tagline}</p>
        <button ref={btnRef} className="hero-cta orbitron" onClick={scrollToAbout}>
          Explore My Universe
        </button>
      </div>

      <div ref={scrollRef} className="scroll-indicator">
        <span className="orbitron">SCROLL</span>
        <div className="scroll-track">
          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
