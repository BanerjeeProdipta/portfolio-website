import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiTensorflow,
  SiPostgresql,
  SiSelenium,
  SiNextdotjs,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiJupyter,
  SiKeras,
  SiOpencv,
  SiGithub,
} from 'react-icons/si';
import SectionLayout from './SectionLayout';

const technologies = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
  {
    name: 'JavaScript',
    icon: <FaReact className="text-yellow-400 text-4xl" />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript className="text-blue-400 text-4xl" />,
  },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-4xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-100 text-4xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-400 text-4xl" /> },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss className="text-blue-400 text-4xl" />,
  },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl" /> },
  {
    name: 'PostgreSQL',
    icon: <SiPostgresql className="text-blue-500 text-4xl" />,
  },
  { name: 'Git', icon: <FaGitAlt className="text-red-400 text-4xl" /> },
  { name: 'GitHub', icon: <SiGithub className="text-gray-100 text-4xl" /> },
  { name: 'Python', icon: <FaPython className="text-blue-400 text-4xl" /> },
  {
    name: 'TensorFlow',
    icon: <SiTensorflow className="text-orange-400 text-4xl" />,
  },
  { name: 'Keras', icon: <SiKeras className="text-red-400 text-4xl" /> },
  {
    name: 'Scikit-Learn',
    icon: <SiScikitlearn className="text-blue-500 text-4xl" />,
  },
  {
    name: 'Selenium',
    icon: <SiSelenium className="text-green-400 text-4xl" />,
  },
  { name: 'OpenCV', icon: <SiOpencv className="text-blue-500 text-4xl" /> },
  { name: 'NumPy', icon: <SiNumpy className="text-blue-300 text-4xl" /> },
  { name: 'Pandas', icon: <SiPandas className="text-gray-300 text-4xl" /> },
  { name: 'Jupyter', icon: <SiJupyter className="text-orange-500 text-4xl" /> },
  { name: 'Tableau', icon: <SiTableau className="text-blue-400 text-4xl" /> },
];

const TechStacksSection = () => {
  return (
    <SectionLayout
      title="Tech Stacks
    "
    >
      <div className="flex flex-wrap gap-6 justify-center text-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col w-32 h-32 items-center justify-center p-4 border border-stone-900 bg-polka-dots bg-[size:10px_10px] bg-fixed shadow-md transition-transform duration-300"
          >
            {tech.icon}
            <p className="mt-2 px-2 text-gray-300 group-hover:text-white transition-all">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default TechStacksSection;
