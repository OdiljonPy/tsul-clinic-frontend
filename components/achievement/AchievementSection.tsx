"use client";

import { getTranslation } from "@/i18n";
import useAchievement from "@/store/achievement/achievement";
import { useEffect } from "react";
import Loading from "@/app/(root)/loading";
import AchievementCard from "@/components/achievement/AchievementCard";

const AchievementSection = () => {
  const { t } = getTranslation();
  const { achievements, fetchAchievements, loading, error } = useAchievement();

  useEffect(() => {
    if (achievements.length === 0) fetchAchievements();
  }, [fetchAchievements]);

  if (loading) return <Loading />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {achievements?.map((achievement, idx) => (
        <AchievementCard key={idx} achievement={achievement} />
      ))}
    </div>
  );
};

export default AchievementSection;
