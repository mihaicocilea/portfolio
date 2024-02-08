import Button from "../Button/Button";
import Memoji from "./Memoji/Memoji";
import CV from "../../assets/files/CV-Mihai-Cocîlea.pdf";

const Home = () => {
  return (
    <>
      <div className="container mx-auto my-custom-bg-class my-10">
        <Memoji />
        <h1 className="text-[32px] text-center text-white font-[600] my-5 px-5">
          Welcome to my <br />
          digital space
        </h1>
        <p className="container mx-auto text-center text-white/[.7] font-[500] my-5 px-10 sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%]">
          I'm a junior Frontend Developer. <br />
          My interest lies in brand and user experience.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-7 md:space-y-0 md:space-x-4 my-10">
          <Button text={"Download CV"} primary link={CV} download />
          <Button
            text={"Let's talk"}
            buttonStyle={`px-[60px]`}
            link={"https://www.linkedin.com/in/mihai-cocilea/"}
            target={true}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
