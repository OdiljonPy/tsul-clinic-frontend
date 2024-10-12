"use client";

import PrimaryHeadline from "../global/primary-headline";
import React, { useEffect } from "react";
import { TeamMembersCarousel } from "../shared/TeamMembersCarousel";
import useTeamStore from "@/store/home/team";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";

const TeamMembers = () => {
  const { t } = getTranslation();
  const { team, loading, fetchTeam, volunteer } = useTeamStore();

  useEffect(() => {
    if (team.length === 0) fetchTeam();
  }, [fetchTeam]);

  if (loading) return <Loading />;

  return (
    <>
      <div className="container pb-40 pt-16 sm:pb-36 sm:pt-20 lg:pb-40 lg:pt-28">
        <PrimaryHeadline text={t("our_team")} />
        <TeamMembersCarousel team={team} isBorder />
      </div>
      <div className="container pb-40 pt-4 sm:pb-40 lg:pb-52 ">
        <PrimaryHeadline text={t("our_volunteer")} />
        <TeamMembersCarousel team={volunteer} isBorder />
      </div>
    </>
  );
};

export default TeamMembers;
