'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experienceData } from '@/utils/data/experience';
import SectionLayout from './SectionLayout';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!sidebarRef.current || !containerRef.current) return;

    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: sidebarRef.current, // The right side scrollable content
        start: 'top top',
        end: 'bottom bottom',
        pin: sidebarRef.current,
        pinSpacing: false, // Prevent unwanted spacing issues
      },
    });
  }, []);

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
    const targetSection = document.querySelector(`#section-${index}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <SectionLayout title="Experience">
      <div className="relative flex w-full">
        {/* Left Side: Navigation (Pinned with GSAP) */}
        <div
          ref={sidebarRef}
          className="hidden lg:flex flex-col w-80 min-w-80 p-4 bg-bgDark shadow-lg"
        >
          {experienceData.map((experience, index) => (
            <button
              key={index}
              className="flex flex-col items-start py-2 px-4 border border-stone-900 space-y-2"
              onClick={() => handleLinkClick(index)}
            >
              <p
                className={`font-medium text-sm font-mono transition-colors ${
                  index === activeIndex ? 'text-lime-300' : 'text-primaryPurple'
                }`}
              >
                {experience.company}
              </p>
              <h3 className="font-semibold">{experience.role}</h3>
              <p className="text-stone-400 text-sm">{experience.duration}</p>
            </button>
          ))}
        </div>

        {/* Right Side: Vertically Scrolling Content */}
        <div ref={containerRef} className="flex-1 w-full p-4 space-y-6">
          {experienceData.map((experience, index) => (
            <div
              id={`section-${index}`}
              key={index}
              className={`experience-section w-full rounded-lg p-4 transition-all duration-500 bg-bgDark bg-polka-dots bg-[size:10px_10px] bg-fixed ${
                index === activeIndex
                  ? 'border-2 border-lime-300 shadow-lg'
                  : 'opacity-70'
              }`}
            >
              {/* Header Section */}
              <div className="border-b border-stone-700 pb-3">
                <h3 className="text-lg font-bold text-white mb-4">
                  {experience.role}
                </h3>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-primaryPurple font-mono">
                    {experience.company}
                  </p>
                  <p className="text-xs text-stone-400 italic">
                    {experience.duration} | {experience.type}
                  </p>
                </div>
              </div>
              {/* Details */}
              <div className="p-4">
                <ul className="text-stone-300 text-sm list-disc space-y-2 pl-4">
                  {experience.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed text-xs">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default Experience;
