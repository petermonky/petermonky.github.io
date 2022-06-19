import "./Navbar.scss";

import { navbar } from "../../data";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const { links } = navbar;

  return (
    <nav className="navbar">
      <div className="navbar__name text-2xl">Peter</div>
      <div className="navbar__links text-2xl">
        {links.map(({ title, anchor }) => (
          <AnchorLink href={`#${anchor}`} offset={80}>
            {title}
          </AnchorLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
