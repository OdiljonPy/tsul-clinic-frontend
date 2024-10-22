"use client";

import React from "react";
import ButtonCustom, { TypeButton } from "../global/button";
import Link from "next/link";
import Image from "next/image";
import homeconsultationcall from "@/public/assets/home-request-consultation.jpg";
import { motion } from "framer-motion";

interface CTAProps {
  bgClass?: string;
  headline: string;
  buttonLink: string;
  buttonText: string;
  ctaType: string;
  buttonType?: TypeButton;
}

const CTA = ({
  bgClass,
  headline,
  buttonLink,
  buttonText,
  ctaType,
  buttonType,
}: CTAProps) => {
  let CTAWithImage;

  ctaType === "withBg" &&
    (CTAWithImage = (
      <div className={`${bgClass || "bg-background"} py-6`}>
        <div className="container">
          <div className="flex flex-wrap items-center lg:flex-nowrap">
            <div className="basis-full lg:basis-1/2">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center text-xl text-white lg:text-left"
              >
                {headline}
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="mt-7 basis-full text-center lg:mt-0 lg:basis-1/2 lg:text-right"
            >
              <ButtonCustom
                href={buttonLink}
                text={buttonText}
                buttonType={`${buttonType || "secondary"}`}
              />
            </motion.div>
          </div>
        </div>
      </div>
    ));

  ctaType === "withImage" &&
    (CTAWithImage = (
      <div className="relative overflow-hidden bg-black py-20 before:absolute before:left-0 before:top-0 before:z-[2] before:size-full before:bg-[#1a2431] before:opacity-70 before:content-['']">
        <Image
          src={homeconsultationcall}
          alt="Home Consultation Call"
          fill={true}
          className="object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container relative z-[3] text-center"
        >
          <h2 className="mb-9 inline-block text-center text-[25px] font-bold leading-10 text-white sm:px-0 sm:text-[40px] lg:px-14">
            {headline}
          </h2>
          <Link
            className="inline-block border-[3px] border-white px-3 py-4 text-base font-bold text-white"
            href={buttonLink}
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    ));

  return CTAWithImage;
};

export default CTA;
