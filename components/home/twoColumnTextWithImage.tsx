import React from "react";
import ButtonCustom from "../global/button";
import PrimaryHeadline from "../global/primary-headline";
import Image from "next/image";
import homefirmimage from "@/public/assets/about2.jpg";

const TwoColumnTextWithImage = () => {
  return (
    <div className="container py-16 sm:py-20">
      <div className="flex flex-wrap gap-8 lg:flex-nowrap">
        <div className="basis-full lg:basis-[70%]">
          <PrimaryHeadline text="Biz Haqimizda" additionalClass="primary-headline-left" />
          <div className="text-base text-[#333]">
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis, consequuntur doloribus dolorum ea eaque et, impedit numquam placeat qui quos sed tempora vitae. Amet, earum eius facere, harum incidunt itaque iusto labore mollitia natus necessitatibus neque nobis qui voluptate! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, voluptatum.
            </p>

            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam obcaecati veniam voluptates? Accusamus aliquid eligendi eum exercitationem molestiae porro tenetur.
            </p>
          </div>
          <ButtonCustom href="/about" text="Batafsil ma'lumot" buttonType="secondary" />
        </div>
        <div className="flex basis-full justify-center sm:text-center lg:block lg:basis-[30%]">
          <Image
            src={homefirmimage}
            alt="Home Firm Image"
            className="rounded-[50%] w-[300px] h-[300px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnTextWithImage;
