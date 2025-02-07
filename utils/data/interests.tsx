import { BsDatabase } from 'react-icons/bs';
import { FaCode } from 'react-icons/fa';
import { FiCloud } from 'react-icons/fi';
import { LuBrain } from 'react-icons/lu';

export const interestsData = [
  {
    title: 'Web Development',
    description: 'Building responsive and user-friendly web applications.',
    icon: <FaCode className="text-primaryPurple text-4xl mb-4" />,
  },
  {
    title: 'Machine Learning',
    description: 'Creating intelligent systems to solve complex problems.',
    icon: <LuBrain className="text-lime-300 text-4xl mb-4" />,
  },
  {
    title: 'Data Science',
    description: 'Analyzing data to extract meaningful insights.',
    icon: <BsDatabase className="text-orange-400 text-4xl mb-4" />,
  },
  {
    title: 'Cloud Computing',
    description: 'Leveraging scalable and flexible cloud solutions.',
    icon: <FiCloud className="text-blue-400 text-4xl mb-4" />,
  },
];

// Gradient definitions
export const gradients = [
  {
    id: 'pink-purple-gradient',
    colors: ['#FF4A81', '#9B59B6'], // Pink to Purple
  },
  {
    id: 'blue-green-gradient',
    colors: ['#2EB9DF', '#28A745'], // Blue to Green
  },
  {
    id: 'yellow-orange-gradient',
    colors: ['#fde047', '#FF7432'], // Yellow to Orange
  },
  {
    id: 'blue-indigo-gradient',
    colors: ['#9B59B6', '#2EB9DF'], // Red to Indigo
  },
];
