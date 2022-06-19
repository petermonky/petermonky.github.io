import "./App.scss";

import Navbar from "../navbar";
import Introduction from "../introduction";
import Projects from "../projects";

function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Introduction />
        <Projects />
      </div>
    </div>
  );
}

export default App;
