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
      const scrollWidth = containerRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;

      gsap.to(containerRef.current, {
        x: () => `-${scrollWidth - viewportWidth}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${scrollWidth - viewportWidth + viewportWidth / 2}`, // Ensures full visibility
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      <SectionLayout title="Projects">
        <div className="w-full overflow-hidden">
          <div ref={containerRef} className="flex space-x-6 w-max px-6 pr-96">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full max-w-xl h-96 rounded-lg bg-bgDark bg-polka-dots bg-[size:10px_10px] bg-fixed"
              >
                <div className="border-b border-stone-700 pb-3 p-4">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primaryPurple font-mono pb-4"
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
