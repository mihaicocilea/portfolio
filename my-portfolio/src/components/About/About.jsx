import profilePic from "../../assets/images/profil.png";
import Button from "../Button/Button";
import Divider from "../Divider/Divider";
import Education from "../Timeline/Education/Education";
import WorkExperience from "../Timeline/WorkExperience/WorkExperince";

const About = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row items-center text-white justify-center mt-[125px]">
        <div className="flex flex-col items-center basis-1/2 px-5">
          <h2 className="font-[700] text-[18px] uppercase text-[#c99fc6]">
            About me
          </h2>
          <h1 className="text-[28px] font-[600] mb-10">Know who I am</h1>
          <div className="">
            <img
              src={profilePic}
              alt="profile picture"
              className="w-[55%] mx-auto"
            ></img>
          </div>
        </div>
        <div className="basis-1/2">
          <p className="text-justify text-white/[0.7] font-[400]">
            Hi! I'm <strong>Mihai</strong>, a jr. Frontend Developer on a quest
            to transform ideas into captivating digital realities. Armed with a
            passion for <strong>clean code</strong> and{" "}
            <strong>pixel-perfect design</strong>, I specialize in HTML, CSS,
            and JavaScript to create seamless, user-centric experiences. As an
            enthusiastic problem solver, I embrace <strong>challenges</strong>{" "}
            as opportunities for growth. <br />
            <br />
            Proficient in HTML, CSS, and JavaScript, I thrive on creating
            seamless and responsive interfaces that captivate users. I'm open to
            new opportunities, collaborations and conversations. Let's create
            something nice together!
            <br />
            <br />
            Proficient in HTML, CSS, and JavaScript, I thrive on creating
            seamless and responsive interfaces that captivate users. I'm open to
            new opportunities, collaborations and conversations. Let's create
            something nice together!
            {/* <div className="flex mt-10">
              <Education />
              <WorkExperience />
            </div> */}
            <Button text="See more.." divStyle={"mt-10"} />
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
