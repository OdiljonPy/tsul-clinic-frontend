import React from "react";
import ButtonCustom from "../global/button";
import PrimaryHeadline from "../global/primary-headline";
import Image from "next/image";
import homefirmimage from "@/public/assets/home-member1.jpg";

const TwoColumnTextWithImage = () => {
  return (
    <div className="container py-16 sm:py-20">
      <div className="flex flex-wrap gap-8 lg:flex-nowrap">
        <div className="basis-full lg:basis-[70%]">
          <PrimaryHeadline text="About Firm" />
          <div className="text-base text-[#333]">
            <p className="mb-6">
              The attorneys of Lawyero have proven their ability to obtain
              excellent results on behalf of clients across industries in a wide
              range of disputes, from complex, international tech-based
              litigation to shareholder/partnership disputes and high-profile
              art transactions.
            </p>

            <p className="mb-6">
              Contact our office today to schedule a confidential consultation
              with one of your attorneys to discuss the particular legal
              challenges you or your business is facing.
            </p>
          </div>
          <ButtonCustom href="#" text="Learn More" buttonType="secondary" />
        </div>
        <div className="flex basis-full justify-center sm:text-center lg:block lg:basis-[30%]">
          <Image
            src={homefirmimage}
            alt="Home Firm Image"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnTextWithImage;
