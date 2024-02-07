import profilePic from "../../assets/images/coding.svg";
import Button from "../Button/Button";
import TitleComponent from "../TitleComponent/TitleComponent";

const About = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-around items-center mt-[75px] ">
        <TitleComponent
          title={"Know who I am"}
          subtitle={"About me"}
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.\nLorem ipsum dolor sit amet consectetur.`}
        />
        <div className="bg-white/[.04] rounded-2xl flex flex-col-reverse lg:flex-row justify-between items-center mx-5 my-5 shadow-[rgba(0,0,15,0.5)_10px_10px_5px_0px]">
          <div className="px-5 xl:p-10 basis-3/5 xl:basis-1/2">
            <p className="text-justify text-white/[0.7] font-[400] lg:pt-10">
              Hi! I'm <strong>Mihai</strong>, a jr. Frontend Developer on a
              quest to transform ideas into captivating digital realities. Armed
              with a passion for <strong>clean code</strong> and{" "}
              <strong>pixel-perfect design</strong>, I specialize in HTML, CSS,
              and JavaScript to create seamless, user-centric experiences. As an
              enthusiastic problem solver, I embrace <strong>challenges</strong>{" "}
              as opportunities for growth. <br />
              <br />
              Proficient in HTML, CSS, and JavaScript, I thrive on creating
              seamless and responsive interfaces that captivate users. I'm open
              to new opportunities, collaborations and conversations. Let's
              create something nice together!
              {/* <div className="flex mt-10">
              <Education />
              <WorkExperience />
            </div> */}
            </p>
            <div className="flex">
              <Button text="See more.." link={"/about"} divStyle={"my-10"} />
            </div>
          </div>
          <div className="flex justify-center basis-2/5 xl:basis-1/2">
            <img
              src={profilePic}
              alt="profile picture"
              className="w-full xl:w-[65%] mb-10 lg:mb-0 px-5 transition duration-300 ease-in-out hover:scale-105"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
