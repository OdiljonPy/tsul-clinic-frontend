"use client";

import React, { useEffect } from "react";
import PrimaryHeadline from "../global/primary-headline";
import Accordions from "../shared/Accordions";
import useFAQStore from "@/store/faq/faq";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";
import FaqCategories from "@/components/FAQs/FaqCategories";

interface props {
  id?: number;
}

const FAQsAccordion = ({ id }: props) => {
  const { t } = getTranslation();
  const { faq, faq_category, fetchFAQCategory, fetchFAQ, loading, error } =
    useFAQStore();

  console.log(id, "id");

  useEffect(() => {
    id ? fetchFAQ(id) : fetchFAQCategory();
  }, [fetchFAQ, fetchFAQCategory]);

  if (loading) return <Loading />;
  if (error) throw new Error();
  return (
    <div className="container lg:pt-[85px] pt-[70px] lg:pb-20 pb-16">
      <PrimaryHeadline text={t("faq")} />
      {id && faq.faqs?.length ? (
        <Accordions data={faq?.faqs} />
      ) : (
        <FaqCategories faqCategory={faq_category} />
      )}
    </div>
  );
};

export default FAQsAccordion;
