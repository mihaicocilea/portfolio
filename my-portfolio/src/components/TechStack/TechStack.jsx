import Divider from "../Divider/Divider";
import TechStackIcons from "./TechStackIcons/TechStackIcons";
const TechStack = () => {
  return (
    <>
      <div className="flex flex-col justify-around items-center">
        <div className="flex flex-col text-center">
          <h1 className="text-[32px] text-white font-[600] px-5">Tech Stack</h1>
          <p className="text-white/[.5] font-[500] mt-5 px-10">
            Technologies & Tools I'm used to using, <br />
            always open to new things
          </p>
        </div>
        <Divider />
        <TechStackIcons />
      </div>
    </>
  );
};
export default TechStack;
