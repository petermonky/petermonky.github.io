import {
  BsEnvelopeFill as EmailIcon,
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from "react-icons/bs";

import MinesweeperImg from "../assets/minesweeper.png";
import StepperImg from "../assets/stepper.png";
import StudiusImg from "../assets/studius.png";
import TinnerImg from "../assets/tinner.png";

export const navbar = {
  links: [
    {
      title: "Experience",
      anchor: "experience",
    },
    {
      title: "Projects",
      anchor: "projects",
    },
  ],
};

export const introduction = {
  title: "Peter Jung.",
  description: "Monkey enthusiast, aspiring creator, and avid student of life.",
  distinction: {
    time: "Currently",
    status: "interning",
    organisation: "ByteDance",
    link: "https://www.bytedance.com/",
  },
  contacts: [
    {
      title: "LinkedIn",
      icon: <LinkedinIcon />,
      link: "https://www.linkedin.com/in/petermonky/",
    },
    {
      title: "GitHub",
      icon: <GithubIcon />,
      link: "https://github.com/petermonky",
    },
    {
      title: "Email",
      icon: <EmailIcon />,
      link: "mailto:wjdgustjr0554@gmail.com",
    },
  ],
};

export const experience = {
  title: "Experience",
  content: [
    {
      distinction: "Software Engineer Intern",
      organisation: "ByteDance",
      link: "https://www.bytedance.com/",
      startDate: "05-2022",
      details: [
        "Designing and updating portal website for BytePlus, reducing overhead and improving website functionality.",
        "Creating in‑house content moderation system from the ground up to internally host marketing content.",
      ],
    },
    {
      distinction: "Teaching Assistant",
      organisation: "NUS",
      link: "https://www.nus.edu.sg/about",
      startDate: "08-2021",
      endDate: "05-2022",
      details: [
        "Tutored and graded assignments for a group of 12 students in CS2030S - Programming Methodology II, a course designed to teach the fundamentals of the object-oriented paradigm.",
        "Tutored and graded assignments for a group of 8 students in CS1101S - Programming Methodology I, a compulsory introductory module for all first-year computer science undergraduates at NUS.",
      ],
    },
    {
      distinction: "Full Stack Developer",
      organisation: "Source Academy",
      link: "https://about.sourceacademy.org/",
      startDate: "01-2021",
      endDate: "05-2021",
      details: [
        "Debugged, improved, and documented the Stepper tool for the Source Academy.",
        "Co‑authored research paper for the Stepper and presented a tool demonstration at the online SPLASH‑E 2021 international symposium.",
      ],
    },
    {
      distinction: "Frontend Developer Intern",
      organisation: "e-mart",
      link: "https://company.emart.com/en/company/vision.do",
      startDate: "05-2018",
      endDate: "07-2018",
      details: [
        "Learnt fundamentals of front end wire-framing software such as Figma and Photoshop with a group of professional frontend developers and designers.",
        "Conducted weekly meetings to discuss artistic and functional direction of E-Mart Mongolia customer website.",
      ],
    },
  ],
};

export const projects = {
  title: "Projects",
  content: [
    {
      title: "Google Minesweeper",
      descriptions: [
        "A web application clone of one of my favourite pastimes, Google Minesweeper.",
        "The app provides the same features as the original, but with, dare I say, a slicker user interface.",
      ],
      img: {
        src: MinesweeperImg,
        alt: "Minesweeper",
      },
      backgroundColour: "#00FF00",
      links: [
        {
          text: "Try demo",
          path: "https://petermonky.github.io/gmsc/",
        },
        {
          text: "View code",
          path: "https://github.com/petermonky/gmsc",
        },
      ],
    },
    {
      title: "Tinner",
      descriptions: [
        "Tinner (an anagram of intern), is a CLI-centric application that helps university students organise their internship applications with ease.",
        "This project was initiated by a group of four, in which I primarily functioned as the UI/UX designer and full stack developer.",
      ],
      img: {
        src: TinnerImg,
        alt: "Tinner",
      },
      backgroundColour: "#FFFF00",
      links: [
        {
          text: "View code",
          path: "https://github.com/petermonky/tp",
        },
      ],
    },
    {
      title: "Stepper",
      descriptions: [
        "A step-by-step evaluation visualiser of the JavaScript sublanguage, Source, hosted on the Source Academy, the learning platform used by over 600 freshman students annually at NUS.",
        "I was given the amazing opportunity to contribute to the development and maintenance of the tool.",
      ],
      img: {
        src: StepperImg,
        alt: "Stepper",
      },
      backgroundColour: "#090979",
      links: [
        {
          text: "Try demo",
          path: "https://sourceacademy.org/playground",
        },
        {
          text: "View code",
          path: "https://github.com/source-academy/js-slang",
        },
      ],
    },
    {
      title: "Studius",
      descriptions: [
        "Student-to-tutor matchmaking has never been easier with Studius, a platform specifically designed to connect tutors and tutees.",
        "Studius is my very first web development project; somewhat wonky, but made with love nonetheless.",
      ],
      img: {
        src: StudiusImg,
        alt: "Studius",
      },
      backgroundColour: "#6a0dad",
      links: [
        {
          text: "View code",
          path: "https://github.com/petermonky/studius",
        },
      ],
    },
  ],
};

export const footer = {
  contacts: [
    {
      title: "LinkedIn",
      icon: <LinkedinIcon />,
      link: "https://www.linkedin.com/in/petermonky/",
    },
    {
      title: "GitHub",
      icon: <GithubIcon />,
      link: "https://github.com/petermonky",
    },
    {
      title: "Email",
      icon: <EmailIcon />,
      link: "mailto:wjdgustjr0554@gmail.com",
    },
  ],
};
