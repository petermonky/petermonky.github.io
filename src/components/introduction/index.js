import "./Introduction.scss";

import { introduction } from "../../data";
import Heading from "../heading";

const Introduction = () => {
  const { title, description, contacts } = introduction;

  return (
    <section className="introduction">
      <div className="swipe">
        <Heading title={title} />
        <div className="introduction__description">
          <p className="text-xl">{description}</p>
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
    </section>
  );
};

export default Introduction;
