import InnerBanner from "@/components/global/inner-banner";
import HeadlineWithText from "@/components/shared/HeadlineWithText";
import PAList from "@/components/practice-areas/PAList";
import PreFooter from "@/components/shared/PreFooter";
import React from "react";

import { Metadata } from "next";
import PrimaryHeadline from "@/components/global/primary-headline";
import TeamMembers from "@/components/home/TeamMembers";
import { TeamMembersCarousel } from "@/components/shared/TeamMembersCarousel";

export const metadata: Metadata = {
  title: "Bizning Xizmatlar",
  description: "Your one stop solution for legal matters",
};

const Partners = () => {
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
          <TeamMembersCarousel />
        </div>
        <div className="pb-40 sm:pb-40 lg:pb-52">
          <PrimaryHeadline
            text="Nataruslar"
            headlineType="h3"
            additionalClass="text-[32px] primary-headline-left text-background"
            formatTwoColor
          />
          <TeamMembersCarousel />
        </div>
        <div className="pb-40  sm:pb-40 lg:pb-52 ">
          <PrimaryHeadline
            text="Auditorlar"
            headlineType="h3"
            additionalClass="text-[32px] primary-headline-left text-background"
            formatTwoColor
          />
          <TeamMembersCarousel />
        </div>
      </div>

      <PreFooter />
    </>
  );
};

export default Partners;
