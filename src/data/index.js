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
      title: "Projects",
      anchor: "projects",
    },
  ],
};

export const introduction = {
  title: "Hi, I'm Peter.",
  description: "An aspiring software engineer and avid student of life.",
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
        "This project was initiated by a group of four, in which I primarily functioned as a UI/UX designer and full stack developer.",
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
        "A step-by-step evaluation visualiser of the JavaScript sublanguage, Source. The platform on which the Stepper is hosted, the Source Academy, is used by over 600 freshman students annually at the National University of Singapore.",
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
        "Student-to-tutor matchmaking has never been easier with Studius, a platform designed to connect tutors and tutees.",
        "Studius is my very first web development project. Though somewhat wonky, made with love, nonetheless.",
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
