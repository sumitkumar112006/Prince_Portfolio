import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SKILLS } from '../data';
import './Skills.css';

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    // ScrollTrigger entrance
    gsap.fromTo(skillsRef.current,
      { opacity: 0, y: 20, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.06,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <h2 className="section-title orbitron">Constellation of Skills</h2>
      
      <div className="skills-grid">
        {SKILLS.map((skill, index) => {
          const isHovered = hoveredIndex === index;
          
          return (
            <div
              key={index}
              ref={el => skillsRef.current[index] = el}
              className="skill-badge glass-card orbitron"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                borderColor: isHovered ? skill.color : 'rgba(255,255,255,0.1)',
                color: isHovered ? skill.color : '#fff',
                boxShadow: isHovered ? `0 0 20px ${skill.color}40` : 'none',
                transform: isHovered ? 'translateY(-4px) scale(1.05)' : 'none'
              }}
            >
              {skill.name}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
