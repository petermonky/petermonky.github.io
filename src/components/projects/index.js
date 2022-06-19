import clsx from "clsx";
import hexToRgba from "hex-rgba";
import "./Projects.scss";

import { MdOutlineArrowForward as ArrowIcon } from "react-icons/md";
import { projects } from "../../data";
import Heading from "../heading";

const Projects = () => {
  const { title, content } = projects;

  return (
    <section className="projects" id="projects">
      <Heading title={title} />
      {content.map(
        (
          { title, descriptions, img: { src, alt }, backgroundColour, links },
          idx
        ) => (
          <div
            className={clsx(
              "projects__project",
              idx % 2 === 0 && "image-right"
            )}
          >
            <div className="projects__project__text">
              <div className="projects__project__text-title text-3xl">
                {title}
              </div>
              {descriptions.map((description, idx) => (
                <p
                  key={idx}
                  className="projects__project__text-description text-xl"
                >
                  {description}
                </p>
              ))}
              <div className="projects__project__text-link-container">
                {links?.map(({ text, path }) => (
                  <span className="projects__project__text-link text-xl">
                    <a href={path} target="_blank" rel="noopener noreferrer">
                      {text}
                      <ArrowIcon />
                    </a>
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{ backgroundColor: hexToRgba(backgroundColour, 5) }}
              className="projects__project-image"
            >
              <img src={src} alt={alt} />
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default Projects;
