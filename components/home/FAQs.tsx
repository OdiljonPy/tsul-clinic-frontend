"use client";

import PrimaryHeadline from "../global/primary-headline";
import useFAQStore from "@/store/faq/faq";
import React, { useEffect } from "react";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";
import FaqCategories from "@/components/FAQs/FaqCategories";

const FAQs = () => {
  const { faq_category, fetchFAQCategory, loading } = useFAQStore();
  const { t } = getTranslation();

  useEffect(() => {
    if (faq_category.length === 0) fetchFAQCategory();
  }, [faq_category]);

  if (loading) return <Loading />;

  return (
    <div className="bg-grey pb-11 pt-20">
      <div className="container">
        <PrimaryHeadline text={t("faq_category")} />
        <FaqCategories faqCategory={faq_category} />
      </div>
    </div>
  );
};

export default FAQs;
