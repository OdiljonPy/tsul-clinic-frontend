import ProjectIcons from "@/components/projects/ProjectIcons";
import { IProjects } from "@/types/projects/projects";

interface props {
  project: IProjects;
}

const ProjectsCard = ({ project }: props) => {
  return (
    <div className="flex flex-wrap sm:gap-1 md:gap-3 md:flex-nowrap shadow rounded group  transform duration-500 hover:-translate-y-1">
      <div className="md:w-[500px] w-full h-[180px] sm:h-[220px] md:h-[240px] overflow-hidden rounded">
        <img
          className="w-full h-full object-cover "
          src={project.image}
          alt="Our projects images"
        />
      </div>

      <div className="flex flex-col gap-3 justify-between p-3 md:p-2 grow w-full">
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-800 line-clamp-1">
            {project.name}
          </h1>
          <p className="text-lg text-gray-400 mt-1 line-clamp-3">
            {project.short_description}
          </p>
        </div>

        <ProjectIcons project={project} />
      </div>
    </div>
  );
};

export default ProjectsCard;
