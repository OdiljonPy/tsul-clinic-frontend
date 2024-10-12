import InnerBanner from "@/components/global/inner-banner";

import { getTranslation } from "@/i18n";
import { Metadata } from "next";
import AchievementSection from "@/components/achievement/AchievementSection";

export const metadata: Metadata = {
  title: "Our Achievements",
  description: "Your one stop solution for legal matters",
};

const Page = () => {
  const { t } = getTranslation();
  metadata.title = t("our_achievements");
  return (
    <div>
      <InnerBanner text={t("our_achievements")} />
      <div className="relative py-6 sm:py-10 md:py-[60px]">
        <div className="container">
          <AchievementSection />
        </div>
      </div>
    </div>
  );
};

export default Page;
