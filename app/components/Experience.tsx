'use client';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLayout from './SectionLayout';
import { experienceData } from '@/utils/data/experience';
import { ScrollToPlugin } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.exp',
      start: 'top 10%',
      end: 'bottom bottom',
      pin: '.nav',
      pinSpacing: false,
    });
    experienceData.forEach((_, index) => {
      ScrollTrigger.create({
        trigger: `#section-${index}`,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
      });
    });

    gsap.from('.experience-title', {
      opacity: 0,
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: '.panel',
        start: 'bottom 80%',
        end: 'bottom bottom',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);
    if (window)
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: `#section-${index}`, offsetY: 10 },
        ease: 'power2',
      });
  };

  return (
    <div className="relative">
      <SectionLayout title="Experience">
        <div className="lg:flex hidden lg:flex-row w-full exp">
          {/* Navigation Links (Fixed on the left side) */}
          <div className="nav lg:w-1/3 flex flex-col z-10 mb-8 lg:mb-0">
            <h2 className="experience-title pb-3">Experience</h2>
            {experienceData.map((experience, index) => (
              <button
                key={index}
                className="nav-link flex flex-col items-start py-2 px-4 border border-stone-900 space-y-2"
                onClick={() => handleLinkClick(index)}
              >
                <p
                  className={`font-medium text-sm font-mono ${
                    index === activeIndex
                      ? 'text-lime-300'
                      : 'text-primaryPurple'
                  }`}
                >
                  {experience.company}
                </p>
                <h3
                  className={`font-semibold ${
                    index === activeIndex ? 'text-lime-300' : ''
                  }`}
                >
                  {experience.role}
                </h3>
                <p className="text-stone-400 text-sm">{experience.duration}</p>
              </button>
            ))}
          </div>

          {/* Scrolling Sections (Right side for large screens) */}
          <div className="lg:w-2/3 space-y-8">
            {experienceData.map((experience, index) => (
              <div
                id={`section-${index}`}
                key={index}
                className="panel w-full rounded-lg bg-bgDark bg-polka-dots bg-[size:10px_10px] bg-fixed"
              >
                {/* Header Section */}
                <div className="border-b border-stone-700 pb-3 p-4">
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

                <div className="p-4">
                  {/* Responsibilities */}
                  <ul className="text-stone-300 text-sm list-disc space-y-2 pl-4">
                    {experience.responsibilities.map((resp, i) => (
                      <li key={i} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>

                  {/* Technology Stack */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs text-lime-300 px-3 py-0.5 rounded-full border border-lime-300 opacity-70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card layout for smaller screens */}
        <div className="lg:hidden flex flex-col space-y-8">
          {experienceData.map((experience, index) => (
            <div key={index} className=" bg-bgDark p-6 space-y-4">
              <p className="font-mono text-lg text-white">
                {experience.company}
              </p>
              <h3 className="font-semibold text-white">{experience.role}</h3>
              <p className="text-stone-200 text-xs italic">{experience.type}</p>
              <p className="text-stone-400 text-sm">{experience.duration}</p>
              <ul className="text-stone-100 text-sm list-disc pl-4 mt-2 space-y-2">
                {experience.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-stone-700 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionLayout>
    </div>
  );
};

export default Experience;
