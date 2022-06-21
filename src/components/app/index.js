import { useEffect } from "react";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "../footer";
import Introduction from "../introduction";
import Navbar from "../navbar";
import Projects from "../projects";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="content">
        <Introduction />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
