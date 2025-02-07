'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SectionLayout from './SectionLayout';
import { LuGraduationCap } from 'react-icons/lu';

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
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]); // Store refs for each graduation cap icon

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
          stagger: 0.3,
          scrollTrigger: {
            trigger: educationRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
          },
        }
      );
    }
  }, []);

  const handleMouseEnter = (index: number) => {
    if (iconRefs.current[index]) {
      gsap.fromTo(
        iconRefs.current[index],
        { opacity: 0, scale: 0.5, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  };

  const handleMouseLeave = (index: number) => {
    if (iconRefs.current[index]) {
      gsap.to(iconRefs.current[index], {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
      });
    }
  };

  return (
    <SectionLayout title="Education">
      <div
        ref={educationRef}
        className="flex flex-col md:flex-row justify-center w-full"
      >
        {educationData.map((education, index) => (
          <div className="relative" key={index}>
            <div
              ref={(el) => {
                if (iconRefs.current) iconRefs.current[index] = el;
              }}
              className="absolute bottom-2 right-2 opacity-0 -z-20"
            >
              <LuGraduationCap
                size={120}
                className="text-lime-300 opacity-20"
              />
            </div>{' '}
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
                <p className="text-gray-300 text-sm flex items-end">
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
