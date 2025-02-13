'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import SectionLayout from './SectionLayout';
import { LuGraduationCap } from 'react-icons/lu';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    degree: 'M.Sc. in Computational Science',
    institution: 'Laurentian University',
    duration: 'May 2024 - Aug 2025',
  },
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'American International University-Bangladesh',
    duration: 'Jan 2016 - Sep 2020',
  },
  {
    degree: 'Higher Secondary Certificate',
    institution: 'Savar College',
    duration: '2013 - 2015',
  },
];

const Education = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (educationRef.current) {
      const elements = educationRef.current.children;

      gsap.fromTo(
        elements,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.4,
          scrollTrigger: {
            trigger: educationRef.current,
            start: 'top 80%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );
    }

    // Set first icon to be visible by default
    if (iconRefs.current[0]) {
      gsap.set(iconRefs.current[0], { opacity: 1, scale: 1, y: 0 });
    }
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index); // Track the hovered card
    if (iconRefs.current[index]) {
      gsap.to(iconRefs.current[index], {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    }
    if (iconRefs.current[0] && index !== 0) {
      gsap.to(iconRefs.current[0], { opacity: 0, duration: 0.3 });
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null); // Reset hovered state when leaving
    if (index !== 0 && iconRefs.current[index]) {
      gsap.to(iconRefs.current[index], {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
      });
    }

    // Restore the first icon if no other card is hovered
    setTimeout(() => {
      if (hoveredIndex === null && iconRefs.current[0]) {
        gsap.to(iconRefs.current[0], { opacity: 1, scale: 1, duration: 0.3 });
      }
    }, 100);
  };

  return (
    <SectionLayout title="Education">
      <div
        ref={educationRef}
        className="flex flex-col md:flex-row flex-wrap justify-center w-full"
      >
        {educationData.map((education, index) => (
          <div className="relative" key={index}>
            {/* Graduation Cap Icon */}
            <div
              ref={(el) => {
                if (iconRefs.current) iconRefs.current[index] = el;
              }}
              className={`absolute bottom-2 right-2 ${
                index === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              } -z-20 transition-all duration-500`}
            >
              <LuGraduationCap
                size={120}
                className="text-lime-300 opacity-20"
              />
            </div>

            {/* Education Card */}
            <div
              className="relative h-56 flex flex-col justify-between group w-full z-0 md:w-72 p-6 bg-reverse-polka-dots bg-[size:5px_5px] bg-fixed mb-2 md:m-2 border border-stone-900"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div>
                <h3 className="font-semibold group-hover:text-lime-300 text-lg pb-4">
                  {education.degree}
                </h3>
                <p className="font-mono">{education.institution}</p>
              </div>

              {education.duration && (
                <p className="text-stone-300 text-sm flex items-end">
                  {education.duration}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Education;
