'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Loading = () => {
  useEffect(() => {
    // Animate each letter of "Prodipta Banerjee"
    gsap.fromTo(
      '.loading-text span',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
    );
  }, []);

  return (
    <div>
      <h1 className="loading-text">
        {'Prodipta Banerjee'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </h1>
    </div>
  );
};

export default Loading;
