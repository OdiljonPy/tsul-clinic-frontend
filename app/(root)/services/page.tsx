import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import HeadlineWithText from "@/components/shared/HeadlineWithText";
import PAList from "@/components/practice-areas/PAList";
import PreFooter from "@/components/shared/PreFooter";
import { Metadata } from "next";
import { getTranslation } from "@/i18n";

export const metadata: Metadata = {
  title: "Bizning Xizmatlar",
  description: "Your one stop solution for legal matters",
};
const page = () => {
  const { t } = getTranslation();
  metadata.title = t("services");
  return (
    <>
      <InnerBanner text={t("services")} />
      <HeadlineWithText
        headlineText={t("services")}
        text={t("services_desc")}
      />
      <PAList />
      <PreFooter />
    </>
  );
};

export default page;
