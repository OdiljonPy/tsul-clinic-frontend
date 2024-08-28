import React from "react";
import InnerBanner from "@/components/global/inner-banner";
import HeadlineWithText from "@/components/shared/HeadlineWithText";
import PAList from "@/components/practice-areas/PAList";
import PreFooter from "@/components/shared/PreFooter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Areas 2 Columns - Lawyero",
  description: "Your one stop solution for legal matters",
};
const page = () => {
  return (
    <>
      <InnerBanner text="PRACTICE AREAS 2 COLUMN" />
      <HeadlineWithText
        headlineText="Practice Areas"
        text="At lawyero we practice almost all areas of life. Some of the most
          notable practice areas in which we have helped number of our clients
          to achieve their goals according to the laws are as follows:"
      />
      <PAList layout="2-column" />
      <PreFooter />
    </>
  );
};

export default page;
