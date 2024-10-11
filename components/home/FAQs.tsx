"use client";

import PrimaryHeadline from "../global/primary-headline";
import useFAQStore from "@/store/faq/faq";
import React, { useEffect } from "react";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react";

const FAQs = () => {
  const { faq_category, fetchFAQCategory, loading } = useFAQStore();
  const { t } = getTranslation();

  useEffect(() => {
    if (faq_category.length === 0) fetchFAQCategory();
  }, [fetchFAQCategory]);

  if (loading) return <Loading />;

  return (
    <div className="bg-grey pb-11 pt-20">
      <div className="container">
        <PrimaryHeadline text={t("faq_category")} />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 ">
          {faq_category?.map((item) => (
            <Link
              href={`/faqs/${item.id}`}
              className="text-black group text-lg cursor-pointer flex items-center gap-2"
            >
              <CircleChevronRight className="mt-1 shrink-0 rounded-full bg-white text-primary-main" />
              <span className="transition-all duration-300 group-hover:text-primary-main">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
