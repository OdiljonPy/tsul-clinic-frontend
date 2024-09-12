"use client";

import useAboutStore from "@/store/about/about";
import React, { useEffect } from "react";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";

const TopText = () => {
  const { about, loading, fetchAbout,error } = useAboutStore();
  const { t } = getTranslation();
  useEffect(() => {
    if (!about?.about_us) fetchAbout();
  }, [fetchAbout]);

  if (loading) return <Loading />;
  if (error) throw new Error();
  return (
    <div className="container py-16 lg:py-24">
      <div className="flex flex-wrap gap-6 lg:flex-nowrap lg:gap-11">
        <div className="basis-full lg:basis-8/12">
          <h2 className="mb-2 text-[25px] font-bold text-background sm:text-[40px]">
            {t("about")}
          </h2>
          <div
            className="mb-5 text-base text-background"
            dangerouslySetInnerHTML={{ __html: about?.about_us }}
          ></div>
        </div>
        <div className="basis-full lg:basis-1/3">
          <div className="bg-background p-8">
            <h3 className="mb-2 text-[32px] text-white">{t("our_goal")}</h3>
            <p className="mb-4 text-base text-white">{about?.our_goal}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopText;
