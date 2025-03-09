'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const chipRef = useRef<HTMLParagraphElement | null>(null);
  const sloganRef = useRef<HTMLParagraphElement | null>(null);

  // Store the initial text in state to avoid flickering issues
  const [nameText] = useState({ first: 'Prodipta', last: 'Banerjee' });
  const [sloganText] = useState('Crafting Code, Building Futures!');

  useEffect(() => {
    if (!nameRef.current || !sloganRef.current) return;

    const firstName = nameRef.current.children[0] as HTMLElement;
    const lastName = nameRef.current.children[1] as HTMLElement;
    const tl = gsap.timeline();

    // Function to wrap each letter in spans without causing flicker
    const splitText = (element: HTMLElement) => {
      const text = element.textContent || '';
      element.innerHTML = text
        .split('')
        .map((char) => `<span class="inline-block opacity-0">${char}</span>`)
        .join('');
    };

    splitText(firstName);
    splitText(lastName);

    // Animate each letter smoothly
    tl.fromTo(
      firstName.children,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' }
    )
      .fromTo(
        lastName.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.05, ease: 'power2.out' }
      )
      .fromTo(
        chipRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );

    // Split slogan into words and add padding (to avoid disappearing text issue)
    const words = sloganRef.current.textContent?.split(' ') ?? [];
    sloganRef.current.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block opacity-0 px-0.5">${word}&nbsp;</span>`
      )
      .join('');

    // Animate each word separately
    tl.fromTo(
      sloganRef.current.children,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="md:mx-8 mt-6 mb-3 py-20 lg:py-32 border border-stone-900/20 bg-black flex items-start flex-col md:flex-row">
      <div className="w-full mx-12 space-y-8 flex flex-col items-start justify-center">
        {/* Name Section */}
        <h1
          ref={nameRef}
          className="font-medium text-5xl lg:text-7xl tracking-wide leading-snug custom-border"
        >
          <span className="block">{nameText.first}</span>
          <span className="block">{nameText.last}</span>
        </h1>

        {/* Job Title */}
        <p
          ref={chipRef}
          className="inline-block max-w-44 lg:max-w-56 whitespace-nowrap font-mono px-2 py-0.5 text-xs lg:text-sm rounded-full border border-primaryPurple bg-primaryPurple/20 text-primaryPurple"
        >
          Software Engineer
        </p>

        {/* Slogan */}
        <p
          ref={sloganRef}
          className="font-medium text-sm lg:text-lg custom-border text-lime-300"
        >
          {sloganText}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
