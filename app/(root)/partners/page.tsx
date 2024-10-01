"use client";

import InnerBanner from "@/components/global/inner-banner";
import PreFooter from "@/components/shared/PreFooter";
import React, { useEffect } from "react";

import PrimaryHeadline from "@/components/global/primary-headline";

import { TeamMembersCarousel } from "@/components/shared/TeamMembersCarousel";
import Loading from "@/app/(root)/loading";
import usePartnerStore from "@/store/partners/partner";

const Partners = () => {
  const { loading, error, fetchPartners, partners } = usePartnerStore();

  useEffect(() => {
    fetchPartners();
  }, [fetchPartners]);

  console.log(partners, "partnere");

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
          <TeamMembersCarousel team={partners[1]} />
        </div>
        <div className="pb-40 sm:pb-40 lg:pb-52">
          <PrimaryHeadline
            text="Nataruslar"
            headlineType="h3"
            additionalClass="text-[32px] primary-headline-left text-background"
            formatTwoColor
          />
          <TeamMembersCarousel team={partners[2]} />
        </div>
        <div className="pb-40  sm:pb-40 lg:pb-52 ">
          <PrimaryHeadline
            text="Auditorlar"
            headlineType="h3"
            additionalClass="text-[32px] primary-headline-left text-background"
            formatTwoColor
          />
          <TeamMembersCarousel team={partners[3]} />
        </div>
      </div>

      <PreFooter />
    </>
  );
};

export default Partners;
