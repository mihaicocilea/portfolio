import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Timeline from "./components/Timeline/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <TechStack />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
