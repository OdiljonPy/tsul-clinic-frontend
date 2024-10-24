"use client";

import { ContactForm } from "../global/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { getTranslation } from "@/i18n";
import { motion } from "framer-motion";

const PreFooter = () => {
  const { t } = getTranslation();
  return (
    <div className="overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap lg:flex-nowrap">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative basis-full py-16 before:absolute before:-right-1/4 before:top-0 before:z-[-1] before:h-full before:w-[150vw] before:bg-grey before:content-[''] lg:basis-1/3 lg:py-24 lg:before:right-0 lg:before:w-[50vw]"
          >
            <ContactInfo />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative basis-full px-0 py-16 before:absolute before:-left-1/4 before:top-0 before:z-[-1] before:h-full before:w-[150vw] before:bg-lightgrey before:content-[''] lg:basis-2/3 lg:py-24 lg:pl-12 lg:pr-20 lg:before:left-0 lg:before:w-[80vw]"
          >
            <h3 className="relative mb-7 pb-5 text-3xl font-bold text-primary-main before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-[150px] before:bg-background before:content-[''] after:absolute after:bottom-0 after:left-0 after:z-[1] after:h-[3px] after:w-[40px] after:bg-primary-main after:content-['']">
              {t("ask_question")}
            </h3>

            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
