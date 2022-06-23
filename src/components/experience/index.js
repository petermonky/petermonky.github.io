import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "./Experience.scss";

import Heading from "../heading";
import { experience } from "../../data";

dayjs.extend(customParseFormat);

const Experience = () => {
  const { title, content } = experience;
  return (
    <section className="experience" id="experience">
      <Heading title={title} />
      <div className="experience-container">
        {content.map(
          ({
            distinction,
            organisation,
            link,
            startDate,
            endDate,
            details,
          }) => (
            <div
              key={organisation}
              className="experience__single"
              data-aos="fade-up"
              data-aos-offset="40"
              data-aos-anchor-placement="top-bottom"
            >
              <h4 className="experience__subtitle text-sm">
                {`${dayjs(startDate, "MM-YYYY").format("MMM YYYY")}
                - 
                ${
                  endDate
                    ? dayjs(endDate, "MM-YYYY").format("MMM YYYY")
                    : "Present"
                }`}
              </h4>
              <h2 className="experience__title text-3xl">
                {distinction}{" "}
                <div className="experience__title-organisation-wrapper">
                  @{" "}
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience__title-organisation"
                  >
                    {organisation}
                  </a>
                </div>
              </h2>

              <ul className="experience__detail-container">
                {details.map((detail, idx) => (
                  <li key={idx} className="experience__detail text-lg">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
