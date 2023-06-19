import "./Navbar.scss";

import { navbar } from "../../data";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Drawer from "../drawer";
import { GrMenu as MenuIcon } from "react-icons/gr";

const Navbar = ({ drawerState }) => {
  const [drawerOpen, setDrawerOpen] = drawerState;
  const { links } = navbar;

  return (
    <nav className="navbar">
      <div className="navbar__name noselect text-2xl">Peter</div>
      <div className="navbar__links text-md">
        {links.map(({ title, anchor }) => (
          <AnchorLink key={title} href={`#${anchor}`} offset={80}>
            {title}
          </AnchorLink>
        ))}
      </div>
      <div className="navbar__menu">
        <MenuIcon
          className="text-2xl navbar__menu-icon"
          onClick={() => setDrawerOpen(true)}
        />
      </div>
      <Drawer openState={[drawerOpen, setDrawerOpen]} />
    </nav>
  );
};

export default Navbar;
