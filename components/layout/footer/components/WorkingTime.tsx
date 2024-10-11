import { ChevronRight } from "lucide-react";
import { getTranslation } from "@/i18n";
import { cn } from "@/lib/utils";

interface props {
  className?: string;
}

const WorkingTime = ({ className }: props) => {
  const { t } = getTranslation();
  return (
    <div className={cn(className, "")}>
      <h2 className="text-white font-medium text-lg sm:text-xl mb-1 sm:mb-2">
        {t("working_hours")}
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-white">
          <ChevronRight size={18} />
          <span>{t("du_ju")}</span>
        </div>
        <div className="text-white">10:00 - 15:00</div>
      </div>
      <div className="flex justify-between items-center mt-[2px]">
        <div className="flex items-center gap-2 text-white">
          <ChevronRight size={18} />
          <span>{t("sha_ya")}</span>
        </div>
        <div className="text-white">{t("closed")}</div>
      </div>
    </div>
  );
};

export default WorkingTime;
