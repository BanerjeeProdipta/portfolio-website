import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail, MdOutlineLocationOn, MdPhone } from 'react-icons/md';
import SectionLayout from './SectionLayout';

const AboutMeSection = () => {
  return (
    <SectionLayout
      title="
    About Me"
    >
      <div className="space-y-3 flex flex-col justify-center items-center">
        <div className="flex justify-start text-left space-y-3 opacity-80">
          <p className="leading-loose tracking-wide">
            Hello World,
            <br />
            I’m a passionate{' '}
            <span className="font-medium">software engineer</span> living in
            <span className="text-primaryCyan font-medium">
              <MdOutlineLocationOn className="inline-block ml-1" size={20} />
              Sudbury, Ontario.
            </span>{' '}
            Originally from <span className="font-medium">Bangladesh</span>, I
            completed my{' '}
            <span className="text-primaryPurple">
              BSc in Software Engineering
            </span>{' '}
            from Anhui University of Technology, China and am currently pursuing
            an{' '}
            <span className="text-primaryPurple">
              MSc in Computational Science
            </span>{' '}
            at Laurentian University (expected graduation: April 2025).
            <br />
            Alongside my technical skills, I’m fluent in{' '}
            <span className="text-primaryLime/90">
              Chinese, Hindi, Bangla, and Urdu
            </span>
            , which helps me connect with diverse teams and global audiences.
          </p>
        </div>
        <p className="text-4xl">🚀</p>
        <p className="italic max-w-xl py-6 leading-relaxed">
          I’m looking for opportunities to gain hands-on experience, collaborate
          with professionals, and solve real-world problems.
        </p>
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-primaryCyan/5 group-hover:blur-sm duration-200 ease-in-out delay-75"></div>
          <div className="relative z-10 flex flex-wrap text-xs md:text-sm md:flex-row space-y-2 md:space-y-0 items-center bg-polka-dots bg-[size:10px_10px] bg-fixed justify-around w-full text-white">
            <a
              href="mailto:asm.rahman.ashique@gmail.com"
              className="flex items-center gap-2 text-gray-300 hover:bg-primaryCyan/20 hover:text-primaryCyan transition whitespace-nowrap px-4 py-2"
            >
              <MdOutlineEmail size={20} />
              asm.rahman.ashique@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/asm-ashique/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:bg-primaryCyan/20 hover:text-primaryCyan transition whitespace-nowrap px-4 py-2"
            >
              <FaLinkedin size={20} />
              LinkedIn Profile
            </a>
            <a
              href="tel:+17059217562"
              className="flex items-center gap-2 text-gray-300 hover:bg-primaryCyan/20 hover:text-primaryCyan transition whitespace-nowrap px-4 py-2"
            >
              <MdPhone size={20} />
              +1 (705) 921-7562
            </a>
            <a
              href="https://github.com/RahmanAshique"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:bg-primaryCyan/20 hover:text-primaryCyan transition whitespace-nowrap px-4 py-2"
            >
              <FaGithub size={20} />
              GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutMeSection;
