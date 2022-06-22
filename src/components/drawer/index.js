import clsx from "clsx";

import "./Drawer.scss";
import { GrClose as CloseIcon } from "react-icons/gr";

import { navbar } from "../../data";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Drawer = ({ openState }) => {
  const [open, setOpen] = openState;
  const { links } = navbar;

  return (
    <div className={clsx("drawer-container", open && "open")}>
      <div className="drawer-underlay" onClick={() => setOpen(false)} />
      <div className="drawer">
        <div className="drawer__close-icon-container">
          <CloseIcon
            className="text-2xl drawer__close-icon"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="drawer__link-container">
          {links.map(({ title, anchor }) => (
            <AnchorLink
              key={title}
              href={`#${anchor}`}
              offset={80}
              onClick={() => setOpen(false)}
              className="drawer__link"
            >
              {title}
            </AnchorLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
