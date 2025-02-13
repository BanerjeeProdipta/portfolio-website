import { MdOutlineLocationOn } from 'react-icons/md';
import SectionLayout from './SectionLayout';
import { aboutMe } from '@/utils/data/aboutMe';
import Link from 'next/link';

const AboutMeSection = () => {
  const { location, origin, contactLinks } = aboutMe;
  const experienceYears = new Date().getFullYear() - 2020;

  return (
    <SectionLayout title="About Me">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="max-w-2xl text-stone-300 space-y-4 leading-relaxed">
          <p>
            Hey there! I’m a{' '}
            <span className="font-semibold text-white">software engineer</span>{' '}
            with {experienceYears} years of experience, blending
            <span className="font-mono font-semibold text-primaryPurple">
              {' '}
              technical expertise{' '}
            </span>
            with a{' '}
            <span className="font-mono font-semibold text-primaryPurple">
              creative spark
            </span>{' '}
            to craft clean, efficient, and maintainable solutions.
          </p>
          <p>
            Originally from {origin}, Currently based in
            <span className="inline-flex items-center -mt-2 mx-1">
              <MdOutlineLocationOn
                size={18}
                className="text-primaryPurple mr-1"
              />
              {location}.
            </span>
          </p>
        </div>

        {/* Quote */}
        <p className="italic max-w-lg px-6 text-stone-400">
          “If there&apos;s a problem, there&apos;s always a solution—just a few
          lines of code away.”
        </p>
        <p className="font-mono">
          I am currently accepting freelance work, so don’t hesitate to{' '}
          <button className="bg-lime-300/10 inline-block text-lime-400 px-2 py-1">
            get in touch
          </button>
        </p>

        {/* Buttons with the blob effect */}
        <div className="relative group border border-stone-900 group-hover:invert transition duration-300 bg-gradient-to-t from-lime-300 to-transparent p-[0.5px] ease-linear delay-75">
          <div className="relative z-10 bg-polka-dots bg-[size:10px_10px] bg-fixed bg-bgDark flex flex-wrap text-xs md:text-sm md:flex-row space-y-2 md:space-y-0 hover:text-lime-300 items-center justify-around w-full text-stone-800">
            {contactLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-300 transition whitespace-nowrap px-4 py-2 hover:text-lime-300"
              >
                <Icon size={20} />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default AboutMeSection;
