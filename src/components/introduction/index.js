import "./Introduction.scss";

import { introduction } from "../../data";

const Introduction = () => {
  const {
    title,
    description,
    distinction: { time, status, organisation, link },
    contacts,
  } = introduction;

  return (
    <section className="introduction-container">
      <div className="swipe">
        <div className="introduction">
          <div className="introduction__title">
            <h1 className="text-6xl">{title}</h1>
          </div>
          <div className="introduction__description">
            <p className="text-xl">{description}</p>
            <p className="text-xl">
              {time} {status} @{" "}
              <a
                href={link}
                className="introduction__description__organisation"
                target="_blank"
                rel="noopener noreferrer"
              >
                {organisation}
              </a>
              .
            </p>
          </div>
          <div className="introduction__contacts">
            {contacts.map(({ title, icon, link }) => (
              <div key={title}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
