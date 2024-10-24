import InnerBanner from "@/components/global/inner-banner";
import { getTranslation } from "@/i18n";
import ProjectsList from "@/components/projects/ProjectsList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Your one stop solution for legal matters",
};

const Projects = () => {
  const { t } = getTranslation();
  metadata.title = t("our_projects");
  return (
    <div>
      <InnerBanner text={t("our_projects")} />
      <div className="relative py-6 sm:py-10 md:py-[60px]">
        <div className="container">
          <ProjectsList />
        </div>
      </div>
    </div>
  );
};

export default Projects;
