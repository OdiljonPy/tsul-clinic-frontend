"use client";

import PrimaryHeadline from "@/components/global/primary-headline";
import React, { useEffect } from "react";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceCategory from "@/components/services/ServiceCategory";
import useServicesStore from "@/store/services/services";
import Loading from "@/app/(root)/loading";
import { useSearchParams } from "next/navigation";
import { getTranslation } from "@/i18n";

const PAList = () => {
  const { t } = getTranslation();

  const searchParams = useSearchParams();

  const {
    services,
    fetchServices,
    loading,
    service_category,
    fetchServicesCategory,
    filterCategory,
  } = useServicesStore();

  const category = searchParams.get("category");

  useEffect(() => {
    if (services.length === 0) fetchServices();
    if (service_category.length === 0) fetchServicesCategory();
  }, [fetchServices, fetchServicesCategory]);

  useEffect(() => {
    if (category) {
      filterCategory(category);
    }
  }, [category]);

  if (loading) return <Loading />;
  return (
    <div className="container lg:pb-28 pb-20">
      <div className="flex flex-col-reverse md:flex-row gap-3 sm:gap-4">
        <div className="grow-1 w-full gap-3">
          {services.length ? (
            <>
              {services?.map((item) => (
                <ServiceCard data={item} key={item.id} />
              ))}
            </>
          ) : (
            <div className="w-full h-full flex justify-center items-center text-gray-700 text-2xl font-medium">
              {t("service_not_found")}
            </div>
          )}
        </div>
        <div className="md:basis-[30%] shrink-0">
          <PrimaryHeadline
            text={t("category_list")}
            headlineType="h3"
            additionalClass="text-[32px] primary-headline-left text-background"
            formatTwoColor
          />
          <div className="flex gap-2 flex-wrap">
            {service_category?.map((item) => (
              <ServiceCategory
                category={item.name}
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
