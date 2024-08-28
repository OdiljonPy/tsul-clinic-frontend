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
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.3198605784473!2d151.2501603754003!3d-33.88141516051197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12adea8d78a407%3A0x1bd0d69402d8e8ed!2sMarch%20St%2C%20Bellevue%20Hill%20NSW%202023%2C%20Australia!5e0!3m2!1sen!2s!4v1710833934772!5m2!1sen!2s" />
      </div>

      <div className="overflow-hidden">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="relative basis-full pb-20 pr-0 pt-16 before:z-[-1] lg:basis-2/3 lg:pr-12 lg:pt-24">
              <PrimaryHeadline
                text="Schedule A Free Consultation"
                additionalClass="text-3xl primary-headline-left"
                headlineType="h3"
              />
              <p className="mb-5 text-base leading-7 text-[#333]">
                Give us a call to schedule a free consultation or fill out the
                following form. One of our representatives will get back to you
                within 24 hours.
              </p>
              <ContactForm />
            </div>
            <div className="relative basis-full pb-16 pt-0 lg:basis-1/3 lg:pb-20 lg:pt-24">
              <PrimaryHeadline
                text="Get In Touch"
                additionalClass="text-3xl primary-headline-left"
                headlineType="h3"
              />
              <ul>
                <li className="mb-[10px] flex items-center">
                  <PhoneCallIcon size={15} className="text-primary-main" />
                  <a
                    className="ml-2 inline-block text-base text-background"
                    href="tel:1911-462-242"
                  >
                    1911-462-242
                  </a>
                </li>
                <li className="mb-[10px] flex items-center">
                  <PhoneCallIcon size={15} className="text-primary-main" />
                  <a
                    className="ml-2 inline-block text-base text-background"
                    href="#"
                  >
                    1911-462-281
                  </a>
                </li>
              </ul>
              <div>
                <div className="mt-7">
                  <h3 className="mb-5 text-2xl font-bold text-[#333]">
                    Head Office
                  </h3>
                  <div className="flex">
                    <MapPin size={15} className="mt-1 text-primary-main" />
                    <p className="pl-2 text-background">
                      4th Floor ABC Plaza Downtown, <br /> March Street, Sydney.
                    </p>
                  </div>
                </div>
                <div className="mt-7">
                  <h3 className="mb-5 text-2xl font-bold text-[#333]">
                    Regional Office
                  </h3>
                  <div className="flex">
                    <MapPin size={15} className="mt-1 text-primary-main" />
                    <p className="pl-2 text-background">
                      4th Floor ABC Plaza Downtown, <br /> March Street, Sydney.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="mb-7 mt-8 text-2xl font-bold text-[#333]">
                    Working Hours
                  </h3>
                  <ul className="text-base leading-6 text-[#313131]">
                    <li className="relative flex border-b border-[#313131] py-4">
                      <span className="w-1/2 font-bold">Mon-Wed</span>
                      <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                    </li>
                    <li className="relative flex border-b border-[#313131] py-4">
                      <span className="w-1/2 font-bold">Thurs-Fri</span>
                      <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                    </li>
                    <li className="relative flex py-4">
                      <span className="w-1/2 font-bold">Sat-Sun</span>
                      <span className="w-1/2 text-right">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
