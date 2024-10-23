"use client";

import { getTranslation } from "@/i18n";
import usePartnerStore from "@/store/partners/partner";
import React, { useEffect } from "react";
import PrimaryHeadline from "@/components/global/primary-headline";
import MarqueeSlider from "@/components/home/partners/MarqueeSlider";
import { motion } from "framer-motion";

const PartnersSection = () => {
  const { t } = getTranslation();
  const { partners, fetchPartners, loading } = usePartnerStore();

  useEffect(() => {
    if (partners?.length === 0) fetchPartners();
  }, [fetchPartners]);
  return (
    <div className="pb-10 sm:pb-20 pt-6 sm:pt-10">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container"
      >
        <PrimaryHeadline text={t("our_partners")} />
        <MarqueeSlider partners={partners} />
      </motion.div>
    </div>
  );
};

export default PartnersSection;
