import Button from "../../Button/Button";
import TechStackIcons from "../../TechStack/TechStackIcons/TechStackIcons";

const ProjectCard = ({ projectList }) => {
  return (
    <>
      {projectList.map((item, index) => (
        <div
          key={index}
          className="bg-white/[.08] md:basis-[45%] 2xl:basis-[30%] rounded-xl m-5 md:m-0 !my-5 "
        >
          <div className="flex flex-col items-center text-white p-5">
            {/* subtitle */}
            <h2 className="text-[18px] font-[700] text-[16px] uppercase text-[#c99fc6]">
              {item.type}
            </h2>
            {/* title */}
            <h1 className="text-[24px] font-[600] mb-3">{item.title}</h1>
            {/* image */}
            <div className="my-3">
              <img
                src={item.image}
                alt="project image"
                className="rounded-2xl shadow-blue-gray-900/50"
              ></img>
            </div>
            {/* description */}
            <p className="text-justify text-[16px] text-white/[0.75] mt-5 font-[400] pl-2">
              {item.description}
            </p>
            {/* techStack icons */}
            <div className="mt-5 flex items-center flex-col">
              <h2 className="text-[20px] font-[700] text-[16px] uppercase text-[#c99fc6]">
                Technologies used
              </h2>
              <TechStackIcons
                iconStyle={`w-[25px] h-[25px]`}
                iconMargin={`!m-3 !mt-5`}
                techStackList={item.techstack}
              />
            </div>

            {/*  buttons */}
            <div className="flex my-5 font-[500] space-x-4">
              <Button text={"Live"} primary link={item.link} />
              <Button text={"GitHub"} link={item.github} />
            </div>
          </div>
        </div>
      ))}
      ;
    </>
  );
};
export default ProjectCard;
