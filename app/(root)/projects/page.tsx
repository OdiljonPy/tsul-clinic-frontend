import InnerBanner from "@/components/global/inner-banner";
import { getTranslation } from "@/i18n";
import ProjectsList from "@/components/projects/ProjectsList";

const Projects = () => {
  const { t } = getTranslation();
  return (
    <div>
      <InnerBanner text={t("our_projects")} />
      <div className="relative py-[70px]">
        <div className="container">
          <ProjectsList />
        </div>
      </div>
    </div>
  );
};

export default Projects;
