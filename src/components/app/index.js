import { useEffect } from "react";
import "./App.scss";

import Footer from "../footer";
import Introduction from "../introduction";
import Navbar from "../navbar";
import Projects from "../projects";

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
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
