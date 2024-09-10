"use client";

import InnerBanner from "@/components/global/inner-banner";
import singlepabanner from "@/public/assets/pa-img-5.jpg";
import PAContent from "@/components/practice-areas/single/PAContent";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import React, { useEffect } from "react";
import useServiceDetailStore from "@/store/services/services_detail";
import Loading from "@/app/(root)/loading";

const ServiceDetail = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const { service_detail, fetchServiceDetail, loading } =
    useServiceDetailStore();

  useEffect(() => {
    fetchServiceDetail(+params.id);
  }, [fetchServiceDetail]);

  if (loading) return <Loading />;

  return (
    <div>
      <InnerBanner text="Huquqiy Maslahat Berish" image={singlepabanner} />

      <PAContent detail={service_detail} />

      <CTA
        bgClass="bg-primary-main"
        headline="Eng murakkab huquqiy masalalar bo'yicha maslahat oling."
        buttonLink="/contact"
        buttonText="Contact Us"
        ctaType="withBg"
        buttonType="dark"
      />

      {/*<PABottomContent />*/}

      <PreFooter />
    </div>
  );
};

export default ServiceDetail;
