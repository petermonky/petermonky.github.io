import { useRef, useState, useEffect } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../navbar";
import Introduction from "../introduction";
import Projects from "../projects";
import Experience from "../experience";
import Footer from "../footer";

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    AOS.init();
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      disableBodyScroll(bodyRef);
    } else {
      enableBodyScroll(bodyRef);
    }

    return () => clearAllBodyScrollLocks();
  }, [drawerOpen]);

  return (
    <div>
      <Navbar drawerState={[drawerOpen, setDrawerOpen]} />
      <div ref={bodyRef} className="layout">
        <Introduction />
        <div className="content">
          <Experience />
          <Projects />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
