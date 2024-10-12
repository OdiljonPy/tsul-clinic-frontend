import Image from "next/image";
import ProjectIcons from "@/components/projects/ProjectIcons";

const ProjectsCard = () => {
  return (
    <div className="flex flex-wrap sm:gap-1 md:gap-3 md:flex-nowrap shadow rounded group  transform duration-500 hover:-translate-y-1">
      <div className="md:w-[500px] w-full h-[180px] sm:h-[220px] md:h-[200px] overflow-hidden rounded">
        <img
          className="w-full h-full object-cover "
          src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col gap-3 justify-between p-3 md:p-2">
        <div className="">
          <h1 className="text-2xl font-semibold text-gray-800 line-clamp-1">
            The Magnificent Bogra
          </h1>
          <p className="text-lg text-gray-400 mt-1 line-clamp-3">
            Located in Rajshahi Division, Bogra is one of the oldest and most
            fascinating towns in Bangladesh
          </p>
        </div>

        <ProjectIcons />
      </div>
    </div>
  );
};

export default ProjectsCard;
