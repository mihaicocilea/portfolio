import TitleComponent from "../../TitleComponent/TitleComponent";
import Button from "../../Button/Button";
import profilePic from "../../../assets/images/profilePic.png";
import Education from "../../Timeline/Education/Education";
import WorkExperience from "../../Timeline/WorkExperience/WorkExperince";
import TechStack from "../../TechStack/TechStack";
const AboutPage = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-around items-center mt-[75px] ">
        <TitleComponent
          title={"Know who I am"}
          subtitle={"About me"}
          text={`Technologies and tools I have experience working with,\nalways open for new things & continuous learning`}
        />
        <div className="flex flex-col bg-white/[.04] rounded-2xl mx-5 my-5 shadow-[rgba(0,0,15,0.5)_10px_10px_5px_0px]">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="px-10 basis-3/5 xl:basis-1/2">
              <div className="flex">
                <Button text="Go back" link={"/"} divStyle={"my-10"} />
              </div>
              <p className="text-justify text-white/[0.7] font-[400]">
                Hi! I'm <strong>Mihai</strong>, a jr. Frontend Developer on a
                quest to transform ideas into captivating digital realities.
                Armed with a passion for <strong>clean code</strong> and{" "}
                <strong>pixel-perfect design</strong>, I specialize in HTML,
                CSS, and JavaScript to create seamless, user-centric
                experiences. As an enthusiastic problem solver, I embrace{" "}
                <strong>challenges</strong> as opportunities for growth. <br />
                <br />
                Proficient in HTML, CSS, and JavaScript, I thrive on creating
                seamless and responsive interfaces that captivate users. I'm
                open to new opportunities, collaborations and conversations.
                Let's create something nice together!
                <br />
                <br />
                In my last role at IV Future (a tech company based in Galati), I
                have honed my skills in React.js, HTML, CSS, Typescript
                TailwindCSS, Mobx, allowing me to craft seamless and interactive
                user experiences. During my time at IV Future, i worked on an
                intern HRM application that allowed you to manage your entire
                company through it.
                <br />
                <br />
                With a good understanding of algorithms, data structures and
                sotware development principles, I seamlessly transitioned into
                the real of Frontend Engineering. This technical prowess allows
                me to approach projects with a comprehensive perspective,
                ensuring that not only the visual aspects, but also the
                underlying architecture is robust and efficient.
              </p>
            </div>
            <div className="flex justify-center basis-2/5 xl:basis-1/2">
              <img
                src={profilePic}
                alt="profile picture"
                className="w-full xl:w-[85%] mb-10 lg:mb-0 px-5 transition duration-300 ease-in-out hover:scale-105"
              ></img>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify- px-10 mt-10">
            <Education />
            <WorkExperience />
          </div>
          <TechStack />
        </div>
      </div>
    </>
  );
};
export default AboutPage;
