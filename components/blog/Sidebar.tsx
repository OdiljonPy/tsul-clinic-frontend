"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import PrimaryHeadline from "../global/primary-headline";
import { ChevronRight } from "lucide-react";
import useNewsStore from "@/store/news/news";
import { getTranslation } from "@/i18n";

const Sidebar = () => {
  const { t } = getTranslation();
  const { news_popular, fetchNewsPopular } = useNewsStore();

  useEffect(() => {
    if (news_popular.length > 0) return;
    fetchNewsPopular();
  }, []);

  return (
    <div className="basis-full pt-20 lg:basis-[30%] lg:pt-0">
      <div className="">
        <PrimaryHeadline
          text={t("recent_news")}
          headlineType="h3"
          additionalClass="text-[32px] primary-headline-left text-background"
          formatTwoColor
        />
        <ul>
          {news_popular?.map((item) => (
            <li
              className="relative border-b border-[#313131] py-4 pl-6"
              key={item.id}
            >
              <Link
                href={`/blog/${item.id}`}
                className="text-base leading-6 text-[#313131] hover:text-primary-main"
              >
                <ChevronRight
                  size={20}
                  className="absolute left-0 top-[30px] -translate-y-1/2 font-bold"
                />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
