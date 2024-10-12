import InnerBanner from "@/components/global/inner-banner";
import { ContactForm } from "@/components/global/ContactForm";
import PrimaryHeadline from "@/components/global/primary-headline";
import Iframe from "@/components/shared/Iframe";
import { Metadata } from "next";
import ContactInfo from "@/components/contact/ContactInfo";
import { getTranslation } from "@/i18n";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Your one stop solution for legal matters",
};

const page = () => {
  const { t } = getTranslation();
  metadata.title = t("contact");
  return (
    <>
      <InnerBanner text={t("contact")} />
      <div className="w-full">
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.0035797925284!2d69.27547587552999!3d41.31187630067642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0013034b7f%3A0xe1f8fb9b87290692!2sYuridik%20Instituti!5e1!3m2!1sen!2s!4v1725692982751!5m2!1sen!2s" />
      </div>

      <div className="overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="relative basis-full pb-20 pr-0 pt-16 before:z-[-1] lg:basis-2/3 lg:pr-12 lg:pt-24">
              <PrimaryHeadline
                text={t("for_contact")}
                additionalClass="text-3xl primary-headline-left"
                headlineType="h3"
              />
              <p className="mb-5 text-base leading-7 text-[#333]">
                {t("for_contact_desc")}
              </p>
              <ContactForm />
            </div>
            <div className="relative basis-full pb-16 pt-0 lg:basis-1/3 lg:pb-20 lg:pt-24">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
