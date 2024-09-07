import PrimaryHeadline from "../global/primary-headline";
import React from "react";
import { TeamMembersCarousel } from "../shared/TeamMembersCarousel";

const TeamMembers = () => {
  return (
    <>
      <div className="container pb-40 pt-16 sm:pb-40 sm:pt-20 lg:pb-52 lg:pt-28">
        <PrimaryHeadline text="Bizning jamoa" />
        <TeamMembersCarousel />
      </div>
    </>
  );
};

export default TeamMembers;
