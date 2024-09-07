import InnerBanner from "@/components/global/inner-banner";
import singlepabanner from "@/public/assets/pa-img-5.jpg";
import PAContent from "@/components/practice-areas/single/PAContent";
import CTA from "@/components/shared/CTA";
import PABottomContent from "@/components/practice-areas/single/PABottomContent";
import PreFooter from "@/components/shared/PreFooter";
import React from "react";

const ServiceDetail = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return (
    <div>
      <InnerBanner text="Huquqiy Maslahat Berish" image={singlepabanner} />

      <PAContent />

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
