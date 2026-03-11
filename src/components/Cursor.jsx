import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    // GSAP quickTo for highly performant animations
    const xToCursor = gsap.quickTo(cursorRef.current, 'x', { duration: 0, ease: 'power3' });
    const yToCursor = gsap.quickTo(cursorRef.current, 'y', { duration: 0, ease: 'power3' });
    
    const xToTrail = gsap.quickTo(trailRef.current, 'x', { duration: 0.15, ease: 'power3' });
    const yToTrail = gsap.quickTo(trailRef.current, 'y', { duration: 0.15, ease: 'power3' });

    const moveCursor = (e) => {
      xToCursor(e.clientX);
      yToCursor(e.clientY);
      xToTrail(e.clientX);
      yToTrail(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    // Interactive elements hover state
    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 2.5,
        backgroundColor: '#bf00ff', // turns purple
        duration: 0.3
      });
      gsap.to(trailRef.current, {
        scale: 1.5,
        borderColor: '#bf00ff',
        duration: 0.3
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: '#00f5ff', // back to cyan
        duration: 0.3
      });
      gsap.to(trailRef.current, {
        scale: 1,
        borderColor: 'rgba(0, 245, 255, 0.4)',
        duration: 0.3
      });
    };

    const setupInteractiveHover = () => {
      const interactives = document.querySelectorAll('button, a, .glass-card');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      return interactives;
    };

    // Need slight delay to allow rendering
    const interactives = setTimeout(setupInteractiveHover, 1000);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearTimeout(interactives);
      document.querySelectorAll('button, a, .glass-card').forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          top: '-8px', // Center the 16px dot
          left: '-8px',
          width: '16px',
          height: '16px',
          backgroundColor: '#00f5ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'screen',
          boxShadow: '0 0 10px #00f5ff'
        }}
      />
      <div
        ref={trailRef}
        style={{
          position: 'fixed',
          top: '-20px', // Center the 40px ring
          left: '-20px',
          width: '40px',
          height: '40px',
          border: '1px solid rgba(0, 245, 255, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
};

export default Cursor;
