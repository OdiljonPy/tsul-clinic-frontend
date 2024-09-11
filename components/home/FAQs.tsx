"use client";

import PrimaryHeadline from "../global/primary-headline";
import { FAQData } from "@/lib/data";
import FAQItem from "../shared/FAQItem";
import useFAQStore from "@/store/faq/faq";
import { useEffect } from "react";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";

const FAQs = () => {
  const { faq, fetchFAQ, loading } = useFAQStore();
  const { t } = getTranslation();
  useEffect(() => {
    if (faq.length === 0) fetchFAQ();
  }, [fetchFAQ]);

  if (loading) return <Loading />;

  return (
    <div className="bg-grey pb-11 pt-20">
      <div className="container">
        <PrimaryHeadline text={t("faq")} />
        <div className="flex flex-wrap pt-3 ">
          {faq?.map((item) => (
            <FAQItem
              key={`faq${item.id}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
