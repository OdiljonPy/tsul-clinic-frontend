"use client";

import { StatsWithIcon } from "@/lib/dataWithJSX";
import Image from "next/image";
import StatsCounterIconBox from "../shared/statsCounterIconBox";
import library from "@/public/assets/library-home.jpg";
import libraryicon from "@/public/assets/library-icon.svg";
import useStatisticsStore from "@/store/home/statistics";
import { useEffect, useState } from "react";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";
import { StatsWithIconProps } from "@/types";

const IconsWithCounters = () => {
  const { t } = getTranslation();
  const { statistics, fetchStatistics, loading } = useStatisticsStore();
  const [data, setData] = useState<StatsWithIconProps[]>([]);

  useEffect(() => {
    fetchStatistics().then((res) => {
      if (res?.ok) {
        console.log(res, "rs");
        setData([
          { ...StatsWithIcon[0], amount: res.response?.customers_number },
          { ...StatsWithIcon[1], amount: res.response?.services_number },
          { ...StatsWithIcon[2], amount: res.response?.service_indicator },
        ]);
      }
    });
  }, [fetchStatistics]);

  if (loading) return <Loading />;
  return (
    <div className="relative overflow-hidden bg-black py-16 before:absolute before:left-0 before:top-0 before:z-[2] before:size-full before:bg-[#1a2431] before:opacity-70 before:content-[''] sm:py-20">
      <Image src={library} alt="library" fill={true} className="object-cover" />
      <div className="container relative z-[3]">
        <div className="flex flex-wrap justify-between lg:flex-nowrap">
          {data?.length &&
            data?.map((item) => {
              return (
                <StatsCounterIconBox
                  key={`statbox${item.id}`}
                  iconName={item.iconName}
                  amount={item.amount}
                  amountPreText={item.amountPreText}
                  amountPostText={item.amountPostText}
                  text={t(item.text)}
                />
              );
            })}
        </div>
      </div>

      <Image
        src={libraryicon}
        alt="library-icon"
        className="absolute bottom-0 z-[3] w-full"
      />
    </div>
  );
};

export default IconsWithCounters;
