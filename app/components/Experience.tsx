'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import SectionLayout from './SectionLayout';
import { experienceData } from '@/utils/data/experience';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray<HTMLElement>('.experience-section');

    const sectionWidth = containerRef.current?.scrollWidth;

    gsap.to(containerRef.current, {
      x: () => `-${sectionWidth - window.innerWidth}px`,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${sectionWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,

        onUpdate: (self) => {
          const progress = self.progress;
          const snapIndex = Math.round(progress * (sections.length - 1));
          setActiveIndex(snapIndex);
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleLinkClick = (index: number) => {
    setActiveIndex(index);

    const targetSection = document.querySelector(`#section-${index}`);
    if (targetSection && containerRef.current) {
      const offsetX = targetSection.offsetLeft;

      gsap.to(containerRef.current, {
        duration: 1,
        x: -offsetX, // Correct scrolling logic
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <div ref={sectionRef} className="relative">
      <SectionLayout title="Experience">
        <div className="lg:flex w-full exp">
          {/* Left Side: Navigation */}
          <div className="nav hidden lg:w-80 min-w-80 lg:flex flex-col z-10 sticky top-0 min-h-screen p-4">
            {experienceData.map((experience, index) => (
              <button
                key={index}
                className="nav-link flex flex-col items-start py-2 px-4 border border-stone-900 space-y-2"
                onClick={() => handleLinkClick(index)}
              >
                <p
                  className={`font-medium text-sm font-mono transition-colors ${
                    index === activeIndex
                      ? 'text-lime-300'
                      : 'text-primaryPurple'
                  }`}
                >
                  {experience.company}
                </p>
                <h3 className="font-semibold">{experience.role}</h3>
                <p className="text-stone-400 text-sm">{experience.duration}</p>
              </button>
            ))}
          </div>

          {/* Right Side: Horizontally Scrolling Content */}
          <div className="overflow-hidden w-full">
            <div
              ref={containerRef}
              className="flex space-x-6 w-max px-4 pr-[50rem]"
            >
              {experienceData.map((experience, index) => (
                <div
                  id={`section-${index}`}
                  key={index}
                  className={`experience-section w-full max-w-xl rounded-lg p-4 transition-all duration-500 bg-bgDark bg-polka-dots bg-[size:10px_10px] bg-fixed ${
                    index === activeIndex
                      ? 'border-l-2 border-lime-300 shadow-lg'
                      : 'opacity-50'
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
        </div>
      </SectionLayout>
    </div>
  );
};

export default Experience;
