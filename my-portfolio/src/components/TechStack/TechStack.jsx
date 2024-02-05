import Divider from "../Divider/Divider";
import TechStackIcons from "./TechStackIcons/TechStackIcons";
import techStackList from "../TechStack/TechStackIcons/techStackList";

const TechStack = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-around items-center mt-[50px]">
        <div className="flex flex-col text-center">
          <h1 className="text-[32px] text-white font-[600] px-5">Tech Stack</h1>
          <p className="text-white/[.6] font-[500] mt-2 px-5">
            Technologies and tools I have experience working with,
            <br /> always open for new things
          </p>
        </div>
        <Divider />
        <div className="lg:max-w-[1000px] bg-white/[.04] rounded-2xl mx-5 ">
          <TechStackIcons techStackList={techStackList} />
        </div>
      </div>
    </>
  );
};
export default TechStack;
