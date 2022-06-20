import "./Footer.scss";

import { footer } from "../../data";

const Footer = () => {
  const { contacts } = footer;

  return (
    <footer className="footer">
      <div className="footer__name text-2xl">Peter</div>
      <div className="footer__contacts">
        {contacts.map(({ title, icon, link }) => (
          <div key={title}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
