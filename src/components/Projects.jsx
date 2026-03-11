import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PROJECTS } from '../data';
import './Projects.css';

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <h2 className="section-title orbitron">Featured Projects</h2>
      
      <div className="projects-grid">
        {PROJECTS.map((proj, index) => (
          <a 
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card glass-card"
            ref={el => cardsRef.current[index] = el}
          >
            <div className="card-top-border"></div>
            
            <div className="project-content">
              <span className="project-num orbitron">{proj.num}</span>
              <h3 className="project-title orbitron">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              
              <div className="project-link orbitron">
                View Project <span className="arrow">→</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
