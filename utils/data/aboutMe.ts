import { IconType } from 'react-icons';
import { BiPhone } from 'react-icons/bi';
import { BsDribbble } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { MdOutlineEmail } from 'react-icons/md';
import { VscGithub } from 'react-icons/vsc';

interface ContactLink {
  href: string;
  label: string;
  icon: IconType;
}

const contact = {
  email: 'probanerjee17@gmail.com',
  linkedin: 'https://www.linkedin.com/in/banerjeeprodipta/',
  phone: '+1 (249) 979-1122',
  github: 'https://github.com/BanerjeeProdipta',
  dribble: 'https://dribbble.com/ProJoy',
};

const contactLinks: ContactLink[] = [
  {
    href: `mailto:${contact.email}`,
    label: contact.email,
    icon: MdOutlineEmail,
  },
  {
    href: contact.linkedin,
    label: 'LinkedIn',
    icon: LiaLinkedin,
  },
  {
    href: `tel:${contact.phone}`,
    label: contact.phone,
    icon: BiPhone,
  },
  {
    href: contact.github,
    label: 'GitHub',
    icon: VscGithub,
  },
  {
    href: contact.dribble,
    label: 'Dribbble',
    icon: BsDribbble,
  },
];

export const aboutMe = {
  location: 'Sudbury, Ontario, Canada',
  origin: 'Bangladesh',
  education: [
    {
      degree: 'BSc in Computer Science and Engineering',
      institution: 'American International University Bangladesh',
      graduation: 2020,
    },
    {
      degree: 'MSc in Computational Science',
      institution: 'Laurentian University',
      graduation: 'August 2025',
    },
  ],
  languages: ['English', 'Bangla'],
  contactLinks,
};
