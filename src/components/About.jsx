import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ABOUT_CARDS } from '../data';
import './About.css';

const About = () => {
  const [index, setIndex] = useState(0);
  // Optional but useful to track if currently animating to prevent spam clicks
  const isAnimating = useRef(false);
  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // Section entrance animation
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  const goTo = (newIndex, dir) => {
    if (isAnimating.current) return;
    if (newIndex === index) return;
    
    isAnimating.current = true;
    
    gsap.to(cardRef.current, { 
      rotateY: dir * 90, 
      opacity: 0, 
      duration: 0.3,
      onComplete: () => {
        setIndex(newIndex);
        // Reset rotation immediately from opposite side, then animate to 0
        gsap.set(cardRef.current, { rotateY: -dir * 90 });
        gsap.to(cardRef.current, { 
          rotateY: 0, 
          opacity: 1, 
          duration: 0.4,
          onComplete: () => {
            isAnimating.current = false;
          }
        });
      }
    });

    // Reset auto-advance timer
    resetTimer();
  };

  const handleNext = () => {
    const nextIndex = (index + 1) % ABOUT_CARDS.length;
    goTo(nextIndex, 1);
  };

  const handlePrev = () => {
    const prevIndex = (index - 1 + ABOUT_CARDS.length) % ABOUT_CARDS.length;
    goTo(prevIndex, -1);
  };

  const handleDotClick = (i) => {
    if (i > index) {
      goTo(i, 1);
    } else if (i < index) {
      goTo(i, -1);
    }
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % ABOUT_CARDS.length;
        // directly calling animation side-effects in interval is tricky due to stale closures
        // but we can just use the DOM elements via GSAP
        if (!isAnimating.current) {
          isAnimating.current = true;
          gsap.to(cardRef.current, { 
            rotateY: 90, 
            opacity: 0, 
            duration: 0.3,
            onComplete: () => {
              // we can update index from inside here by using the callback
              // but react state update will trigger re-render
              gsap.set(cardRef.current, { rotateY: -90 });
              gsap.to(cardRef.current, { 
                rotateY: 0, 
                opacity: 1, 
                duration: 0.4,
                onComplete: () => {
                  isAnimating.current = false;
                }
              });
            }
          });
        }
        return nextIndex;
      });
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const card = ABOUT_CARDS[index];

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <h2 className="section-title orbitron">About Me</h2>
      
      <div className="card-container">
        <button className="nav-arrow prev-arrow" onClick={handlePrev}>❮</button>
        
        <div className="glass-card about-card" ref={cardRef}>
          <div className="card-icon">{card.icon}</div>
          <h3 className="card-title orbitron">{card.title}</h3>
          <p className="card-body">{card.body}</p>
        </div>

        <button className="nav-arrow next-arrow" onClick={handleNext}>❯</button>
      </div>

      <div className="dot-indicators">
        {ABOUT_CARDS.map((_, i) => (
          <div 
            key={i} 
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
