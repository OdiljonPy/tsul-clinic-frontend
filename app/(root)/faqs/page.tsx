import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import PreFooter from "@/components/shared/PreFooter";
import FAQsAccordion from "@/components/FAQs/FAQsAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Lawyero",
  description: "Your one stop solution for legal matters",
};

const Page = () => {
  return (
    <>
      <InnerBanner text="FAQS" />
      <FAQsAccordion />
      <PreFooter />
    </>
  );
};

export default Page;
