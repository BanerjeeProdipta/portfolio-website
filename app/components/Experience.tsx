'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experienceData } from '@/utils/data/experience';
import SectionLayout from './SectionLayout';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!sidebarRef.current || !containerRef.current) return;

    // Pin sidebar
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: sidebarRef.current,
        start: 'top top',
        end: 'bottom center',
        pin: sidebarRef.current,
        pinSpacing: false,
      },
    });

    const sections = document.querySelectorAll('.experience-section');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <SectionLayout title="Experience">
      <div className="relative flex w-full">
        {/* Left Side: Navigation (Pinned with GSAP) */}
        <div
          ref={sidebarRef}
          className="hidden lg:flex flex-col w-80 min-w-80 p-4 mb-12"
        >
          {experienceData.map((experience, index) => (
            <Link
              key={index}
              className="flex flex-col items-start py-2 px-4 border border-stone-900 space-y-2"
              href={`#section-${index}`}
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
            </Link>
          ))}
        </div>

        {/* Right Side: Vertically Scrolling Content */}
        <div ref={containerRef} className="flex-1 w-full py-2 space-y-4">
          {experienceData.map((experience, index) => (
            <div
              id={`section-${index}`}
              key={index}
              className="experience-section w-full bg-bgDark bg-polka-dots bg-[size:10px_10px] bg-fixed"
            >
              {/* Header Section */}
              <div className="border-b border-stone-700 m-2 p-4">
                <h3 className="text-lg font-bold text-white mb-4">
                  {experience.role}
                </h3>
                <div className="flex justify-between items-center">
                  <p
                    className={`text-sm font-mono ${
                      activeIndex === index
                        ? 'text-lime-300'
                        : 'text-primaryPurple'
                    }`}
                  >
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
