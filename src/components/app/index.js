import "./App.scss";

import Footer from "../footer";
import Introduction from "../introduction";
import Navbar from "../navbar";
import Projects from "../projects";

const App = () => {
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
