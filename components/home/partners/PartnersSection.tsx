"use client";

import { getTranslation } from "@/i18n";
import usePartnerStore from "@/store/partners/partner";
import React, { useEffect } from "react";
import PrimaryHeadline from "@/components/global/primary-headline";
import MarqueeSlider from "@/components/home/partners/MarqueeSlider";

const PartnersSection = () => {
  const { t } = getTranslation();
  const { partners, fetchPartners, loading } = usePartnerStore();

  useEffect(() => {
    if (partners?.length === 0) fetchPartners();
  }, [fetchPartners]);
  return (
    <div className="pb-10 sm:pb-20 pt-6 sm:pt-10">
      <div className="container">
        <PrimaryHeadline text={t("our_partners")} />
        <MarqueeSlider partners={partners} />
      </div>
    </div>
  );
};

export default PartnersSection;
