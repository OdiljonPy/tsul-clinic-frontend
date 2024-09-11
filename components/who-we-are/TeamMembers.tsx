"use client";
import PrimaryHeadline from "../global/primary-headline";
import { TeamMembersCarousel } from "../shared/TeamMembersCarousel";
import useTeamStore from "@/store/home/team";
import React, { useEffect } from "react";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";

const TeamMembers = () => {
  const { team, loading, fetchTeam } = useTeamStore();

  const { t } = getTranslation();
  useEffect(() => {
    if (team.length === 0) fetchTeam();
  }, [fetchTeam]);

  if (loading) return <Loading />;
  return (
    <div className="bg-background">
      <div className="container pb-40 pt-20 lg:pb-52 lg:pt-28">
        <PrimaryHeadline
          text={t("our_team")}
          additionalClass="secondary-headline"
        />
        <TeamMembersCarousel team={team} textColor="text-white" />
      </div>
    </div>
  );
};

export default TeamMembers;
