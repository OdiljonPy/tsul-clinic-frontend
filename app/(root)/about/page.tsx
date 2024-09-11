import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import TeamMembers from "@/components/who-we-are/TeamMembers";
import TopText from "@/components/who-we-are/TopText";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import { Metadata } from "next";
import { getTranslation } from "@/i18n";

export const metadata: Metadata = {
  title: "TSUL CLINIC - About Us",
  description: "Your one stop solution for legal matters",
};
const page = () => {
  const { t } = getTranslation();
  return (
    <>
      <InnerBanner text={t("about")} />
      <TopText />
      <TeamMembers />
      <CTA
        bgClass="bg-primary-main"
        headline={t("extraordinary_service")}
        buttonLink="#"
        buttonText={t("contact_with")}
        ctaType="withBg"
        buttonType="dark"
      />
      {/*<WhyChooseUs />*/}
      {/*<WeAreBest />*/}
      <PreFooter />
    </>
  );
};

export default page;
