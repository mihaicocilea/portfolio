import Divider from "../Divider/Divider";
import TechStackIcons from "./TechStackIcons/TechStackIcons";
import techStackList from "../TechStack/TechStackIcons/techStackList";
import TitleComponent from "../TitleComponent/TitleComponent";

const TechStack = () => {
  return (
    <>
      <div className="flex flex-col items-center my-5" id="skills">
        <TitleComponent
          title={"Tech Stack"}
          subtitle={"Technologies"}
          text={`Technologies and tools I have experience working with, always open for new things & continuous learning`}
        />
        <div className="lg:max-w-[1200px] mt-3 mb-10 rounded-2xl mx-5">
          <TechStackIcons
            techStackList={techStackList}
            divStyle="transition duration-300 ease-in-out hover:scale-125"
          />
        </div>
      </div>
    </>
  );
};
export default TechStack;
