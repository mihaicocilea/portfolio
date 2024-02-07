import About from "../About/About";
import Timeline from "../Timeline/Timeline";
import TechStack from "../TechStack/TechStack";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import ConnectWithMe from "../ConnectWithMe/ConnectWithMe";

const Layout = () => {
  return (
    <>
      <div className="background-dark">
        <Navbar />
        <Home />
      </div>
      {/* <TechSlider /> */}
      <About />
      <Timeline />
      <Projects />
      <ConnectWithMe />
    </>
  );
};
export default Layout;
