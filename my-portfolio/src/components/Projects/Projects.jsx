import TitleComponent from "../TitleComponent/TitleComponent";
import ProjectCard from "./ProjectCard/ProjectCard";
import projectList from "./projectsList";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-between items-center mt-[50px]">
        <TitleComponent
          title={"My work"}
          subtitle={"Portfolio"}
          text={`Lorem ipsum dolor sit amet consectetur adipisicing elit.\nLorem ipsum dolor sit amet consectetur.`}
        />
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center md:space-x-4 xl:space-x-14">
          <ProjectCard projectList={projectList} />
        </div>
      </div>
    </>
  );
};
export default Projects;
