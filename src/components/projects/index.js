import clsx from "clsx";
import hexToHsl from "hex-to-hsl";
import "./Projects.scss";

import { MdOutlineArrowForward as ArrowIcon } from "react-icons/md";
import { projects } from "../../data";
import Heading from "../heading";

const Projects = () => {
  const { title, content } = projects;

  const generateBackgroundColour = (colour) => {
    let backgroundColor = hexToHsl(colour);
    backgroundColor.pop();
    backgroundColor = backgroundColor.join(", ");
    return `linear-gradient(45deg, hsla(${backgroundColor}%, 20%, 0.1) 0%, hsla(${backgroundColor}%, 35%, 0.1) 35%, hsla(${backgroundColor}%, 90%, 0.15) 100%)`;
  };

  return (
    <section className="projects" id="projects">
      <Heading title={title} />
      <div className="projects-container">
        {content.map(
          (
            { title, descriptions, img: { src, alt }, backgroundColour, links },
            idx
          ) => (
            <div
              key={title}
              className={clsx(
                "projects__project",
                idx % 2 === 0 && "image-right"
              )}
              data-aos="fade-up"
              data-aos-offset="40"
              data-aos-anchor-placement="top-bottom"
            >
              <div className="projects__project__text">
                <div className="projects__project__text-title text-2xl">
                  {title}
                </div>
                <div className="projects__project__text-description-container">
                  {descriptions.map((description, idx) => (
                    <p
                      key={idx}
                      className="projects__project__text-description text-lg"
                    >
                      {description}
                    </p>
                  ))}
                </div>
                <div className="projects__project__text-link-container">
                  {links?.map(({ text, path }, idx) => (
                    <span
                      key={idx}
                      className="projects__project__text-link text-lg"
                    >
                      <a href={path} target="_blank" rel="noopener noreferrer">
                        {text}
                        <ArrowIcon />
                      </a>
                    </span>
                  ))}
                </div>
              </div>
              <div
                style={{
                  background: generateBackgroundColour(backgroundColour),
                }}
                className="projects__project-image"
              >
                <img src={src} alt={alt} />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
