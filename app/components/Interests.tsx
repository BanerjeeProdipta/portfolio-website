'use client';
import { useEffect, useRef, useState } from 'react';
import SectionLayout from './SectionLayout';
import { gradients, interestsData } from '@/utils/data/interests';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

export default function Interests() {
  const containerRef = useRef<HTMLDivElement>(null);
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const updateDimensions = () => {
      setSvgDimensions({
        width: containerRef.current?.offsetWidth || 0,
        height: containerRef.current?.offsetHeight || 0,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    gsap.utils.toArray('.animated-path').forEach((path, index) => {
      const gradientPath = document.getElementById(`gradient-path-${index}`);

      if (!gradientPath || !path) return;

      const pathLength = (path as SVGPathElement).getTotalLength();

      gsap.set(gradientPath, {
        strokeDasharray: `${pathLength / 8} ${pathLength}`,
        strokeDashoffset: pathLength,
      });

      timeline.to(
        gradientPath,
        {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.inOut',
        },
        index * 2
      );
    });
  }, [svgDimensions]);

  const { width, height } = svgDimensions;
  const midX = width / 2;
  const branchY = (height / 2) * 0.35;
  return (
    <SectionLayout title="My Interests">
      <div
        ref={containerRef}
        className="relative flex justify-center items-center bg-polka-dots py-16"
      >
        {/* SVG Paths */}
        <svg
          className="absolute w-full h-full -top-16 left-0 z-0"
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {gradients.map((gradient) => (
              <linearGradient
                key={gradient.id}
                id={gradient.id}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={gradient.colors[0]} />
                <stop offset="100%" stopColor={gradient.colors[1]} />
              </linearGradient>
            ))}
          </defs>

          {interestsData.map((_, i) => {
            const div = divRefs.current[i];
            if (!div || !containerRef.current) return null;
            const rect = div.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();

            const endX = rect.left + rect.width / 2 - containerRect.left;
            const endY = rect.top - containerRect.top + 64;

            const gradient = gradients[i % gradients.length];

            const pathData = `M${midX} -${
              height / 2
            } V${branchY} H${endX} V${endY}`;

            return (
              <g key={i}>
                {/* Static Gray Path */}
                <path
                  id={`path-${i}`}
                  className="animated-path"
                  d={pathData}
                  stroke="rgb(28 25 23)"
                  strokeOpacity="1"
                  strokeWidth="1"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  key={`gradient-path-${i}`}
                  id={`gradient-path-${i}`}
                  d={pathData}
                  stroke={`url(#${gradient.id})`}
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className="z-10"
                />
              </g>
            );
          })}
        </svg>

        <div className="flex overflow-auto justify-center relative z-10">
          {interestsData.map((interest, index) => (
            <div
              key={index}
              ref={(el) => {
                divRefs.current[index] = el;
              }}
              className="m-2 bg-polka-dots bg-[size:10px_10px] bg-fixed border border-stone-900 p-2 pt-4 text-center h-52 w-52 flex flex-col items-center shadow-lg"
            >
              {interest.icon}
              <h3 className="text-md font-semibold my-2">{interest.title}</h3>
              <p className="text-stone-300 text-sm">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
