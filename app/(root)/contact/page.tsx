import InnerBanner from "@/components/global/inner-banner";
import { ContactForm } from "@/components/global/ContactForm";
import PrimaryHeadline from "@/components/global/primary-headline";
import Iframe from "@/components/shared/Iframe";
import { MapPin, PhoneCallIcon } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Lawyero",
  description: "Your one stop solution for legal matters",
};

const page = () => {
  return (
    <>
      <InnerBanner text="Contact Page" />
      <div className="w-full">
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.0035797925284!2d69.27547587552999!3d41.31187630067642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0013034b7f%3A0xe1f8fb9b87290692!2sYuridik%20Instituti!5e1!3m2!1sen!2s!4v1725692982751!5m2!1sen!2s" />
      </div>

      <div className="overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="relative basis-full pb-20 pr-0 pt-16 before:z-[-1] lg:basis-2/3 lg:pr-12 lg:pt-24">
              <PrimaryHeadline
                text="Aloqaga chiqish uchun "
                additionalClass="text-3xl primary-headline-left"
                headlineType="h3"
              />
              <p className="mb-5 text-base leading-7 text-[#333]">
                Maslahat olish uchun bizga qo'ng'iroq qiling yoki quyidagi
                formani to'ldiring. Bizning vakillarimizdan biri sizga 24 soat
                ichida javob beradi.
              </p>
              <ContactForm />
            </div>
            <div className="relative basis-full pb-16 pt-0 lg:basis-1/3 lg:pb-20 lg:pt-24">
              <PrimaryHeadline
                text="Aloqaga chiqish"
                additionalClass="text-3xl primary-headline-left"
                headlineType="h3"
              />
              <ul>
                <li className="mb-[10px] flex items-center">
                  <PhoneCallIcon size={15} className="text-primary-main" />
                  <a
                    className="ml-2 inline-block text-base text-background hover:text-primary-main transition duration-300"
                    href="tel:+998991234567"
                  >
                    (99) 123-45-67
                  </a>
                </li>
                <li className="mb-[10px] flex items-center">
                  <PhoneCallIcon size={15} className="text-primary-main" />
                  <a
                    className="ml-2 inline-block text-base text-background hover:text-primary-main transition duration-300"
                    href="tel:+998991234567"
                  >
                    (99) 123-45-67
                  </a>
                </li>
              </ul>
              <div>
                <div className="mt-7">
                  <h3 className="mb-5 text-2xl font-bold text-[#333]">
                    Bosh Ofis
                  </h3>
                  <div className="flex">
                    <MapPin size={15} className="mt-1 text-primary-main" />
                    <p className="pl-2 text-background">
                      Amir Temur Street 99 A Tashkent State University.
                    </p>
                  </div>
                </div>
                <div className="mt-7">
                  <h3 className="mb-5 text-2xl font-bold text-[#333]">
                    Konsultatsiya Ofisi
                  </h3>
                  <div className="flex">
                    <MapPin size={15} className="mt-1 text-primary-main" />
                    <p className="pl-2 text-background">
                      Amir Temur Street 99 A Tashkent State University.
                    </p>
                  </div>
                </div>
                {/*<div>*/}
                {/*  <h3 className="mb-7 mt-8 text-2xl font-bold text-[#333]">*/}
                {/*    Working Hours*/}
                {/*  </h3>*/}
                {/*  <ul className="text-base leading-6 text-[#313131]">*/}
                {/*    <li className="relative flex border-b border-[#313131] py-4">*/}
                {/*      <span className="w-1/2 font-bold">Mon-Wed</span>*/}
                {/*      <span className="w-1/2 text-right">9:00am - 5:00pm</span>*/}
                {/*    </li>*/}
                {/*    <li className="relative flex border-b border-[#313131] py-4">*/}
                {/*      <span className="w-1/2 font-bold">Thurs-Fri</span>*/}
                {/*      <span className="w-1/2 text-right">9:00am - 5:00pm</span>*/}
                {/*    </li>*/}
                {/*    <li className="relative flex py-4">*/}
                {/*      <span className="w-1/2 font-bold">Sat-Sun</span>*/}
                {/*      <span className="w-1/2 text-right">Closed</span>*/}
                {/*    </li>*/}
                {/*  </ul>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
