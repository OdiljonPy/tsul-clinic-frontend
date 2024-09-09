"use client";

import PrimaryHeadline from "../global/primary-headline";
import React, { useEffect } from "react";
import { TeamMembersCarousel } from "../shared/TeamMembersCarousel";
import useTeamStore from "@/store/home/team";
import Loading from "@/app/(root)/loading";

const TeamMembers = () => {
  const { team, loading, fetchTeam } = useTeamStore();

  useEffect(() => {
    fetchTeam();
  }, [fetchTeam]);

  if (loading) return <Loading />;

  return (
    <>
      <div className="container pb-40 pt-16 sm:pb-40 sm:pt-20 lg:pb-52 lg:pt-28">
        <PrimaryHeadline text="Bizning jamoa" />
        <TeamMembersCarousel team={team} />
      </div>
    </>
  );
};

export default TeamMembers;
