"use client";

import ProjectsCard from "@/components/projects/ProjectsCard";

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {Array.from({ length: 10 }).map((_, idx) => (
        <ProjectsCard key={idx} />
      ))}
    </div>
  );
};

export default ProjectsList;
