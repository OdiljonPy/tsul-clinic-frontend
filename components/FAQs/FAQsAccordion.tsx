"use client";

import React, { useEffect } from "react";
import PrimaryHeadline from "../global/primary-headline";
import Accordions from "../shared/Accordions";
import { FAQData } from "@/lib/data";
import useFAQStore from "@/store/faq/faq";
import Loading from "@/app/(root)/loading";

const FAQsAccordion = () => {
  const { faq, fetchFAQ, loading } = useFAQStore();

  useEffect(() => {
    if (faq.length === 0) fetchFAQ();
  }, [fetchFAQ]);

  if (loading) return <Loading />;
  return (
    <div className="container lg:pt-[85px] pt-[70px] lg:pb-20 pb-16">
      <PrimaryHeadline text="FAQs Accordion" />
      <Accordions data={faq} />
    </div>
  );
};

export default FAQsAccordion;
