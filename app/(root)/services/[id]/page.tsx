import InnerBanner from "@/components/global/inner-banner";
import singlepabanner from "@/public/assets/single-practice-banner.jpg";
import PAContent from "@/components/practice-areas/single/PAContent";
import CTA from "@/components/shared/CTA";
import PABottomContent from "@/components/practice-areas/single/PABottomContent";
import PreFooter from "@/components/shared/PreFooter";
import React from "react";

const ServiceDetail = ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  return (
    <div>
      <InnerBanner text="FAMILY LAW" image={singlepabanner} />

      <PAContent />

      <CTA
        bgClass="bg-primary-main"
        headline="Get the consultation For Most Complex Legal Issues."
        buttonLink="#"
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
