import { useEffect } from "react";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../navbar";
import Introduction from "../introduction";
import Projects from "../projects";
import Experience from "../experience";
import Footer from "../footer";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="layout">
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
