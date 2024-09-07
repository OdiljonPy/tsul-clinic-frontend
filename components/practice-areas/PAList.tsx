import { PAData } from "@/lib/data";
import PrimaryHeadline from "@/components/global/primary-headline";
import React from "react";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceCategory from "@/components/services/ServiceCategory";

const PAList = () => {
  return (
    <div className="container lg:pb-28 pb-20">
      <div className="flex flex-col-reverse md:flex-row gap-2 sm:gap-4">
        <div className="grow-1">
          {PAData.map((item) => (
            <ServiceCard data={item} key={item.id} />
          ))}
        </div>
        <div className="md:basis-[30%] shrink-0">
          <PrimaryHeadline
            text="Category List"
            headlineType="h3"
            additionalClass="text-[32px] primary-headline-left text-background"
            formatTwoColor
          />
          <div className="flex gap-2 flex-wrap">
            {PAData.map((item) => (
              <ServiceCategory
                category={item.category}
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAList;
