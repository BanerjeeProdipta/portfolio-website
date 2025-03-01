import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import SectionLayout from './SectionLayout';
import { projects } from '@/utils/data/projects';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      const scrollHeight = containerRef.current.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Apply scroll animation to each project card
      gsap.to(containerRef.current, {
        y: () => `-${scrollHeight - viewportHeight}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollHeight - viewportHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: 'labelsDirectional',
            duration: 0.5,
            ease: 'power1.inOut',
            delay: 0.1,
          },
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      <SectionLayout title="Projects">
        <div className="overflow-hidden flex flex-col items-center">
          <div
            ref={containerRef}
            className="flex flex-col space-y-6 w-full items-center"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-item w-full rounded-lg pb-8 bg-bgDark bg-polka-dots bg-[size:10px_10px] bg-fixed transform translate-y-10 transition-all duration-500"
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
    </div>
  );
};

export default Projects;
