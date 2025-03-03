'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const chipRef = useRef<HTMLParagraphElement | null>(null);
  const sloganRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!nameRef.current) return;
    const firstName = nameRef.current.children[0] as HTMLElement;
    const lastName = nameRef.current.children[1] as HTMLElement;
    const tl = gsap.timeline();

    tl.fromTo(
      firstName,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    )
      .fromTo(
        lastName,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
      )
      .fromTo(
        chipRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      )
      .fromTo(
        sloganRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, delay: 0.2, ease: 'power2.out' }
      );
  }, []);

  return (
    <div className="md:mx-8 mt-6 mb-3 py-20 lg:py-32 border border-stone-900/20 bg-black flex items-center flex-col md:flex-row">
      <div className="w-full space-y-8 flex flex-col items-center justify-center">
        <h1
          ref={nameRef}
          className="font-medium text-5xl lg:text-7xl text-center tracking-wide leading-snug custom-border"
        >
          <span className="block opacity-0">Prodipta</span>
          <span className="block opacity-0">Banerjee</span>
        </h1>
        <p
          ref={chipRef}
          className="inline-block max-w-44 lg:max-w-56 whitespace-nowrap text-center font-mono w-full px-2 py-0.5 text-xs lg:text-sm rounded-full border border-primaryPurple bg-primaryPurple/20 text-primaryPurple opacity-0"
        >
          Software Engineer
        </p>

        <p
          ref={sloganRef}
          className="font-medium text-sm lg:text-lg custom-border text-lime-300 opacity-0"
        >
          Crafting Code, Building Futures!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
