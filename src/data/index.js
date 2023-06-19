import {
  BsEnvelopeFill as EmailIcon,
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs';

import MinesweeperImg from '../assets/minesweeper.png';
import StepperImg from '../assets/stepper.png';
import ThoccImg from '../assets/thocc.png';
import TinnerImg from '../assets/tinner.png';
import MinecraftPeggleImg from "../assets/minecraft-peggle.png"
import PulsepaceImg from "../assets/pulsepace.png"

export const navbar = {
  links: [
    {
      title: 'Experience',
      anchor: 'experience',
    },
    {
      title: 'Projects',
      anchor: 'projects',
    },
  ],
};

export const introduction = {
  title: 'Peter Jung.',
  description: 'Monkey enthusiast, aspiring creator, and avid student of life.',
  distinction: {
    time: 'Currently',
    status: 'interning',
    organisation: 'ByteDance',
    link: 'https://www.bytedance.com/',
  },
  contacts: [
    {
      title: 'LinkedIn',
      icon: <LinkedinIcon />,
      link: 'https://www.linkedin.com/in/petermonky/',
    },
    {
      title: 'GitHub',
      icon: <GithubIcon />,
      link: 'https://github.com/petermonky',
    },
    {
      title: 'Email',
      icon: <EmailIcon />,
      link: 'mailto:wjdgustjr0554@gmail.com',
    },
  ],
};

export const experience = {
  title: 'Experience',
  content: [
    {
      distinction: 'Software Engineer Intern',
      organisation: 'ByteDance',
      link: 'https://www.bytedance.com/',
      startDate: '05-2022',
      details: [
        'Implementing a referral system for BytePlus that promotes SaaS technologies adopted by businesses globally.',
        'Designing and updating the portal website for BytePlus, aiming to streamline operations, reduce overhead, and enhance website functionality.',
        'Developed an in-house content moderation system from scratch to internally manage and host marketing content for BytePlus.',
      ],
    },
    {
      distinction: 'Teaching Assistant',
      organisation: 'NUS',
      link: 'https://www.nus.edu.sg/about',
      startDate: '08-2021',
      endDate: '05-2022',
      details: [
        'CS2102 - Database Systems (24 students), a course covers basic concepts and techniques needed to understand, create, and manage database applications',
        'CS2030S - Programming Methodology II (12 students), a course designed to teach the fundamentals of the object-oriented paradigm.',
        'CS1101S - Programming Methodology I (8 students), a compulsory introductory module for all first-year computer science undergraduates at NUS.',
      ],
    },
    {
      distinction: 'Full Stack Developer',
      organisation: 'Source Academy',
      link: 'https://about.sourceacademy.org/',
      startDate: '01-2021',
      endDate: '05-2021',
      details: [
        'Debugged, improved, and documented the Stepper tool for the Source Academy.',
        'Co‑authored research paper for the Stepper and presented a tool demonstration at the online SPLASH‑E 2021 international symposium.',
      ],
    },
    {
      distinction: 'Frontend Developer Intern',
      organisation: 'e-mart',
      link: 'https://company.emart.com/en/company/vision.do',
      startDate: '05-2018',
      endDate: '07-2018',
      details: [
        'Learnt fundamentals of front end wire-framing software such as Figma and Photoshop with a group of professional frontend developers and designers.',
        'Conducted weekly meetings to discuss artistic and functional direction of E-Mart Mongolia customer website.',
      ],
    },
  ],
};

export const projects = {
  title: 'Projects',
  content: [
    {
      title: 'Pulsepace',
      descriptions: [
        'An immersive and fast-paced rhythm game experience designed for iPadOS using Swift.',
        'Pulsepace was collaboratively developed, with my involvement focusing on frontend engineering and beatmap designer creation.',
      ],
      img: {
        src: PulsepaceImg,
        alt: 'Pulsepace',
      },
      backgroundColour: '#330C3A',
      links: [
        {
          text: 'View code',
          path: 'https://github.com/PulsePace/PulsePace',
        },
      ],
    },
    {
      title: 'Minecraft Peggle',
      descriptions: [
        'A Swift implementation of the popular hit Peggle for iPadOS in a fresh new Minecraft theme.',
        'Minecraft Peggle was designed and created independently from the ground-up as part of CS3217.',
      ],
      img: {
        src: MinecraftPeggleImg,
        alt: 'Minecraft Peggle',
      },
      backgroundColour: '#91BFF1',
      links: [
        {
          text: 'View code',
          path: 'https://github.com/petermonky/minecraft-peggle',
        },
      ],
    },
    {
      title: 'Tinner',
      descriptions: [
        'Tinner (an anagram of intern), is a CLI-centric application that helps university students organise their internship applications with ease.',
        'This project was initiated by a group of four, in which I primarily functioned as the UI/UX designer and full stack developer.',
      ],
      img: {
        src: TinnerImg,
        alt: 'Tinner',
      },
      backgroundColour: '#FFFF00',
      links: [
        {
          text: 'View code',
          path: 'https://github.com/petermonky/tp',
        },
      ],
    },
    {
      title: 'Stepper',
      descriptions: [
        'A step-by-step evaluation visualiser of the JavaScript sublanguage, Source, hosted on the Source Academy, the learning platform used by over 600 freshman students annually at NUS.',
        'I was given the amazing opportunity to contribute to the development and maintenance of the tool.',
      ],
      img: {
        src: StepperImg,
        alt: 'Stepper',
      },
      backgroundColour: '#090979',
      links: [
        {
          text: 'Try demo',
          path: 'https://sourceacademy.org/playground',
        },
        {
          text: 'View code',
          path: 'https://github.com/source-academy/js-slang',
        },
      ],
    },
    {
      title: 'Google Minesweeper',
      descriptions: [
        'A web application clone of one of my favourite pastimes, Google Minesweeper.',
        'The app faithfully replicates the beloved Google Minesweeper, offering identical features while enhancing the user experience with a sleek and modern interface.',
      ],
      img: {
        src: MinesweeperImg,
        alt: 'Minesweeper',
      },
      backgroundColour: '#00FF00',
      links: [
        {
          text: 'Try demo',
          path: 'https://petermonky.github.io/gmsc/',
        },
        {
          text: 'View code',
          path: 'https://github.com/petermonky/gmsc',
        },
      ],
    },
    {
      title: 'Thocc',
      descriptions: [
        'Immerse yourself in the world of custom keyboards with Thocc, an interactive web application that lets users explore and personalize virtual keyboards.',
        'This work-in-progress project prioritizes delivering a captivating sensory experience to users.',
      ],
      img: {
        src: ThoccImg,
        alt: 'Thocc',
      },
      backgroundColour: '#ffffff',
      links: [
        {
          text: 'Try demo',
          path: 'https://petermonky.github.io/thocc/',
        },
        {
          text: 'View code',
          path: 'https://github.com/petermonky/thocc',
        },
      ],
    },
  ],
};

export const footer = {
  contacts: [
    {
      title: 'LinkedIn',
      icon: <LinkedinIcon />,
      link: 'https://www.linkedin.com/in/petermonky/',
    },
    {
      title: 'GitHub',
      icon: <GithubIcon />,
      link: 'https://github.com/petermonky',
    },
    {
      title: 'Email',
      icon: <EmailIcon />,
      link: 'mailto:wjdgustjr0554@gmail.com',
    },
  ],
};
