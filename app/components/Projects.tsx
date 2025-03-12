'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLayout from './SectionLayout';
import { projects } from '@/utils/data/projects';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  // Use a ref to store an array of project elements
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Run the animation for each project element
    projectRefs.current.forEach((el, index) => {
      if (el) {
        // Ensure the element is not null
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      }
    });
  }, []);

  return (
    <SectionLayout title="Projects">
      <div className="flex flex-col items-center">
        <div className="flex flex-col space-y-6 w-full items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="project-item w-full rounded-lg pb-8 bg-bgDark bg-polka-dots bg-[size:10px_10px] bg-fixed opacity-0"
            >
              <div className="border-b border-stone-700 p-4">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primaryPurple font-mono my-6"
                >
                  {project.title}
                </Link>
              </div>

              <div className="px-4 pt-4">
                <ul className="text-stone-300 text-sm list-disc space-y-2 pl-4">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, i) => (
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
    </SectionLayout>
  );
};

export default Projects;
