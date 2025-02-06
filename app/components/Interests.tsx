'use client';
import { useEffect, useRef, useState } from 'react';
import SectionLayout from './SectionLayout';
import { interestsData } from '@/utils/data/interests';

export default function Interests() {
  const containerRef = useRef<HTMLDivElement>(null);
  const divRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  // Resize handler to update SVG dimensions
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

  // Get dimensions for positioning
  const { width, height } = svgDimensions;
  const midX = width / 2;
  const branchY = (height / 2) * 0.35; // Branch halfway down before turning

  // Color array for paths
  const pathColors = ['#2EB9DF', '#FF7432', '#FF4A81', '#F7CC4B', '#9B59B6'];
  const gradients = [
    {
      id: 'yellow-orange-gradient',
      colors: ['#FFDD00', '#FF7432'], // Yellow to Orange
    },
    {
      id: 'pink-purple-gradient',
      colors: ['#FF4A81', '#9B59B6'], // Pink to Purple
    },
    {
      id: 'blue-green-gradient',
      colors: ['#2EB9DF', '#28A745'], // Blue to Green
    },
  ];

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
            {gradients.map((gradient, index) => (
              <linearGradient
                key={index}
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

          {/* Branches connecting to cards with dynamic colors */}
          {interestsData.map((_, i) => {
            const div = divRefs.current[i];
            if (!div) return null;
            const rect = div.getBoundingClientRect();
            const containerRect = containerRef.current?.getBoundingClientRect();

            // Get card center position relative to container
            const endX =
              rect.left + rect.width / 2 - (containerRect?.left || 0);
            const endY = rect.top - (containerRect?.top || 0) + 64;

            // Pick color for the current path from pathColors array
            const color = pathColors[i % pathColors.length];

            // Combine the main vertical line with the horizontal branch
            const pathData = `M${midX} -${
              height / 2
            } V${branchY} H${endX} V${endY}`;

            return (
              <path
                key={i}
                d={pathData}
                stroke={color}
                strokeOpacity="0.8"
                strokeWidth="1"
                strokeLinecap="round"
                className="z-10"
              />
            );
          })}
        </svg>

        {/* Interest Cards */}
        <div className="flex flex-wrap justify-center relative z-10">
          {interestsData.map((interest, index) => (
            <div
              key={index}
              ref={(el) => {
                divRefs.current[index] = el;
              }}
              className="m-4 bg-bgDark border border-gray-500/20 pt-8 p-4 text-center h-60 w-64 flex flex-col items-center rounded-lg shadow-lg"
            >
              {interest.icon}
              <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
              <p className="text-gray-300">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
