import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import PreFooter from "@/components/shared/PreFooter";
import FAQsAccordion from "@/components/FAQs/FAQsAccordion";
import { Metadata } from "next";
import { getTranslation } from "@/i18n";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Lawyero",
  description: "Your one stop solution for legal matters",
};

const Page = () => {
  const { t } = getTranslation();
  metadata.title = t("faq");
  return (
    <>
      <InnerBanner text={t("faq")} />
      <FAQsAccordion />
      <PreFooter />
    </>
  );
};

export default Page;
