import Divider from "../Divider/Divider";
import ProjectCard from "./ProjectCard/ProjectCard";
import projectList from "./projectsList";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-around items-center mt-[75px]">
        <div className="flex flex-col text-center">
          <h1 className="text-[32px] text-white font-[600] px-5">
            My portfolio
          </h1>
          <p className="text-white/[.6] font-[500] mt-2 px-5">
            Technologies and tools I have experience working with,
            <br /> always open for new things
          </p>
        </div>
        <Divider />
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <ProjectCard projectList={projectList} />
        </div>
      </div>
    </>
  );
};
export default Projects;
