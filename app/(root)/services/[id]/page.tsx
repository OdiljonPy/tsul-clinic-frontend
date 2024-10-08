"use client";

import InnerBanner from "@/components/global/inner-banner";
import singlepabanner from "@/public/assets/pa-img-5.jpg";
import PAContent from "@/components/practice-areas/single/PAContent";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import React, { useEffect } from "react";
import useServiceDetailStore from "@/store/services/services_detail";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";
import Head from "next/head";

const ServiceDetail = ({ params }: { params: { id: string } }) => {
  const { t } = getTranslation();

  const { service_detail, fetchServiceDetail, loading } =
    useServiceDetailStore();

  useEffect(() => {
    fetchServiceDetail(+params.id);
  }, [fetchServiceDetail]);

  if (loading) return <Loading />;

  return (
    <>
      <Head>
        <title>{t("services")}</title>
      </Head>
      <div>
        <InnerBanner text={service_detail?.name} image={singlepabanner} />

        <PAContent detail={service_detail} />

        <CTA
          bgClass="bg-primary-main"
          headline={t("extraordinary_service")}
          buttonLink="/contact"
          buttonText={t("contact_with")}
          ctaType="withBg"
          buttonType="dark"
        />

        {/*<PABottomContent />*/}

        <PreFooter />
      </div>
    </>
  );
};

export default ServiceDetail;
