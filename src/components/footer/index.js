import "./Footer.scss";

import { footer } from "../../data";

const Footer = () => {
  const { contacts } = footer;

  return (
    <footer className="footer">
      <div className="footer__left-section">
        <div className="footer__name noselect text-2xl">Peter</div>
      </div>
      <div className="footer__middle-section">
        <p className="footer__love text-lg">Made with ❤️ by Peter</p>
      </div>
      <div className="footer__right-section">
        <div className="footer__contacts">
          {contacts.map(({ title, icon, link }) => (
            <div key={title}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
