import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GalaxyCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let renderer;

    try {
      // Keep the rest of the portfolio usable if WebGL cannot start.
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (error) {
      console.error('Galaxy background failed to initialize:', error);
      return undefined;
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // 2. Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // 3. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x7fb6ff, 2, 100); // Soft cinematic blue
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffe6b3, 2, 100); // Warm bright star glow
    pointLight2.position.set(-20, -20, 20);
    scene.add(pointLight2);

    // Create a circular texture
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const context = canvas.getContext('2d');
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };
    const particleTexture = createCircleTexture();

    // 4. GALAXY (Realistic Spiral)
    const parameters = {
      count: 20000,
      size: 0.5, // Slightly smaller stars for realism
      radius: 120,
      branches: 4,
      spin: 1.5,
      randomness: 2,
      randomnessPower: 3,
      insideColor: '#ffdbb3', // Warm galactic core (pale orange/yellow)
      outsideColor: '#3661a8' // Deep cosmic blue
    };

    const starsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);

    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;

      const radius = Math.random() * parameters.radius;
      const spinAngle = radius * parameters.spin;
      const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius * 0.2;
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / parameters.radius);

      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: parameters.size,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      sizeAttenuation: true,
      map: particleTexture,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });

    const stars = new THREE.Points(starsGeometry, starMaterial);
    stars.rotation.x = 0.3; // Tilt galaxy for better view
    stars.rotation.z = -0.2;
    scene.add(stars);

    // 5. PLANETS
    const planetsData = [
      { color: 0x30648c, radius: 8.5, pos: [45, 15, -45], orbitSpeed: 0.002, isGasGiant: true, hasCraters: false }, // Deep icy blue / Neptune
      { color: 0x8a8a8a, radius: 4.2, pos: [-50, -10, -60], orbitSpeed: 0.004, isGasGiant: false, hasCraters: true }, // Rocky moon grey
      { color: 0x9e4736, radius: 3.8, pos: [20, -25, -25], orbitSpeed: 0.005, isGasGiant: false, hasCraters: true }, // Martian rusty red
      { color: 0xd4c0a1, radius: 7.8, pos: [-35, 25, -50], orbitSpeed: 0.003, isGasGiant: true, hasCraters: false }  // Gas giant beige / Jupiter
    ];

    const planets = [];

    const createPlanetTexture = (baseColorHex, isGasGiant, hasCraters) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      
      const baseColor = new THREE.Color(baseColorHex);
      ctx.fillStyle = `#${baseColor.getHexString()}`;
      ctx.fillRect(0, 0, 1024, 512);
      
      if (isGasGiant) {
        // Add bands (like gas giants)
        for (let i = 0; i < 40; i++) {
          const y = Math.random() * 512;
          const h = Math.random() * 60 + 10;
          ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)';
          ctx.fillRect(0, y, 1024, h);
        }
      }
      
      if (hasCraters) {
        // Add craters/surface details
        for (let i = 0; i < 4000; i++) {
          const x = Math.random() * 1024;
          const y = Math.random() * 512;
          const r = Math.random() * 4 + 1;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = Math.random() > 0.5 ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.2)';
          ctx.fill();
        }
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    planetsData.forEach((data, i) => {
      const planetTexture = createPlanetTexture(data.color, data.isGasGiant, data.hasCraters);

      // Planet Mesh
      const geo = new THREE.SphereGeometry(data.radius, 32, 32);
      const mat = new THREE.MeshStandardMaterial({
        color: data.color,
        map: planetTexture,
        emissive: data.color,
        emissiveIntensity: 0.2,
        roughness: 0.8,
        metalness: 0.2
      });
      const mesh = new THREE.Mesh(geo, mat);
      
      // Initial position
      mesh.position.set(...data.pos);
      
      // Particle Ring
      const ringGeo = new THREE.BufferGeometry();
      const ringCount = 300;
      const ringPositions = new Float32Array(ringCount * 3);
      const ringRadius = data.radius * 1.5;

      for (let j = 0; j < ringCount; j++) {
        const theta = (j / ringCount) * Math.PI * 2;
        ringPositions[j * 3] = Math.cos(theta) * ringRadius;
        ringPositions[j * 3 + 1] = (Math.random() - 0.5) * 0.5; // slight noise
        ringPositions[j * 3 + 2] = Math.sin(theta) * ringRadius;
      }

      ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
      const ringMat = new THREE.PointsMaterial({
        color: data.color,
        size: 0.15,
        transparent: true,
        opacity: 0.8,
        map: particleTexture,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      
      const ring = new THREE.Points(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 4;
      mesh.add(ring); // Attach ring to planet

      scene.add(mesh);
      planets.push({ mesh, ring, initX: data.pos[0], speed: data.orbitSpeed, offset: i });
    });

    // 6. MOUSE PARALLAX
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouseY = (event.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };

    window.addEventListener('mousemove', onDocumentMouseMove);

    // Window Resize
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // 7. ANIMATION LOOP
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Stars rotation & twinkle
      stars.rotation.y += 0.001;
      starMaterial.opacity = 0.75 + Math.sin(elapsedTime * 2) * 0.1;

      // Planets rotation & orbit
      planets.forEach((p) => {
        // Self-rotates
        p.mesh.rotation.y += p.speed * 20;
        // Ring rotates
        p.ring.rotation.z += p.speed * 5;
        // Orbital drift
        p.mesh.position.x = p.initX + Math.sin(elapsedTime * p.speed * 50 + p.offset) * 4;
      });

      // Mouse Parallax
      targetX = mouseX * 8;
      targetY = -mouseY * 5;
      
      camera.position.x += (targetX - camera.position.x) * 0.04;
      camera.position.y += (targetY - camera.position.y) * 0.04;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', onWindowResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default GalaxyCanvas;
