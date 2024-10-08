"use client";

import React, { useEffect } from "react";
import PrimaryHeadline from "../global/primary-headline";
import Accordions from "../shared/Accordions";
import useFAQStore from "@/store/faq/faq";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";

const FAQsAccordion = () => {
  const { t } = getTranslation();
  const { faq, fetchFAQ, loading, error } = useFAQStore();

  useEffect(() => {
    if (faq.length === 0) fetchFAQ();
  }, [fetchFAQ]);

  if (loading) return <Loading />;
  if (error) throw new Error();
  return (
    <div className="container lg:pt-[85px] pt-[70px] lg:pb-20 pb-16">
      <PrimaryHeadline text={t("faq")} />
      <Accordions data={faq} />
    </div>
  );
};

export default FAQsAccordion;
