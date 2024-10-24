"use client";
import React, { useEffect } from "react";
import ButtonCustom from "../global/button";
import PrimaryHeadline from "../global/primary-headline";
import Image from "next/image";
import homefirmimage from "@/public/assets/about2.jpg";
import useAboutStore from "@/store/about/about";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";
import { motion } from "framer-motion";

const TwoColumnTextWithImage = () => {
  const { t } = getTranslation();
  const { about, loading, fetchAbout } = useAboutStore();
  useEffect(() => {
    if (!about?.about_us) fetchAbout();
  }, [fetchAbout]);

  if (loading) return <Loading />;
  return (
    <div className="container py-16 sm:py-20">
      <div className="box-about flex flex-wrap gap-8 lg:flex-nowrap items-center">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" basis-full lg:basis-[70%]"
        >
          <PrimaryHeadline
            text={t("about")}
            additionalClass="primary-headline-left"
          />
          <div
            className="text-base text-[#333] mb-4 line-clamp-[14]"
            dangerouslySetInnerHTML={{ __html: about?.about_us }}
          ></div>
          <ButtonCustom
            href="/about"
            text={t("more_info")}
            buttonType="secondary"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex basis-full justify-center sm:text-center lg:block lg:basis-[30%]"
        >
          <Image
            src={about?.image || homefirmimage}
            width={300}
            height={300}
            alt="Home Firm Image"
            className="rounded-[50%] w-[300px] h-[300px] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default TwoColumnTextWithImage;
