"use client";

import InnerBanner from "@/components/global/inner-banner";
import PreFooter from "@/components/shared/PreFooter";
import React, { useEffect } from "react";

import PrimaryHeadline from "@/components/global/primary-headline";

import { TeamMembersCarousel } from "@/components/shared/TeamMembersCarousel";
import useTeamStore from "@/store/home/team";
import Loading from "@/app/(root)/loading";

const Partners = () => {
  const { team, loading, fetchTeam, error } = useTeamStore();

  useEffect(() => {
    if (team.length === 0) fetchTeam();
  }, [fetchTeam]);

  if (loading) return <Loading />;
  if (error) throw new Error();
  return (
    <>
      <InnerBanner text="Bizning Hamkorlar" />
      <div className="container">
        <div className="pb-40 pt-10 sm:pb-40 sm:pt-14 lg:pb-52 lg:pt-16">
          <PrimaryHeadline
            text="Advakatlar"
            headlineType="h3"
            additionalClass="text-[32px] primary-headline-left text-background"
            formatTwoColor
          />
          <TeamMembersCarousel team={team} />
        </div>
        <div className="pb-40 sm:pb-40 lg:pb-52">
          <PrimaryHeadline
            text="Nataruslar"
            headlineType="h3"
            additionalClass="text-[32px] primary-headline-left text-background"
            formatTwoColor
          />
          <TeamMembersCarousel team={team} />
        </div>
        <div className="pb-40  sm:pb-40 lg:pb-52 ">
          <PrimaryHeadline
            text="Auditorlar"
            headlineType="h3"
            additionalClass="text-[32px] primary-headline-left text-background"
            formatTwoColor
          />
          <TeamMembersCarousel team={team} />
        </div>
      </div>

      <PreFooter />
    </>
  );
};

export default Partners;
