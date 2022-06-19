import "./Navbar.scss";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__name text-2xl">Peter</div>
      <div className="navbar__links text-2xl">
        <AnchorLink href="#projects" offset={80}>
          Projects
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
