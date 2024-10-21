import "./App.css";
import About from "./components/about/About";
import Challenges from "./components/challenges/Challenges";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Challenges />
      <Contact />
    </>
  );
}

export default App;
