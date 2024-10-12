"use client";

import ProjectsCard from "@/components/projects/ProjectsCard";
import useProjectsStore from "@/store/projects/projects";
import { useEffect } from "react";
import Loading from "@/app/(root)/loading";

const ProjectsList = () => {
  const { projects, fetchProjects, loading, error } = useProjectsStore();

  useEffect(() => {
    projects.length === 0 && fetchProjects();
  }, [fetchProjects]);

  if (loading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects?.map((project, idx) => (
        <ProjectsCard key={idx} project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
