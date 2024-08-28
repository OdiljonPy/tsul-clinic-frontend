import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";
import ButtonCustom from "../global/button";
import X from "@/public/assets/X.svg";
import { Facebook, Youtube, LinkedinIcon, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className="bg-background">
        <div className="container pb-14 pt-20">
          <div className="flex flex-wrap gap-8 lg:flex-nowrap">
            <div className="basis-full lg:basis-1/3">
              <div>
                <Link href="http://bsmthemes.com/demo/lawyero">
                  <Image src={logo} alt="Logo" width={166} height={30} />
                </Link>
                <div className="mt-5 pb-7">
                  <p className="text-sm leading-6 text-white">
                    Lawyero is the ultimate theme for the attorneys and law
                    firms that best suits their requirements. It is composed of
                    large number of components and is made with love.
                  </p>
                </div>
                <ButtonCustom href="#" text="Buy Now" />
              </div>
            </div>
            <div className="basis-full lg:basis-1/3">
              <h3 className="mb-6 text-3xl font-bold text-white">
                <span className="text-[#14cab4]">Legal</span> Advert
              </h3>
              <div className="mt-5 lg:pb-7">
                <p className="text-sm leading-6 text-white">
                  The information on this website is for general information
                  purposes only. Nothing on this site should be taken as legal
                  advice for any individual case or situation. This information
                  is not intended to create, and receipt or viewing does not
                  constitute, an attorney-client relationship.
                </p>
              </div>
            </div>
            <div className="basis-full lg:basis-1/3">
              <h3 className="mb-6 text-3xl font-bold text-white">
                <span className="font-bold text-[#14cab4]">Opening </span> Hour
              </h3>
              <ul className="text-sm leading-6 text-white">
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Mon</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Tues</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Wed</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Thurs</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Fri</span>
                  <span className="w-1/2 text-right">9:00am - 5:00pm</span>
                </li>
                <li className="relative my-2 flex pl-5">
                  <ChevronRight
                    size={15}
                    className="absolute left-0 top-1/2 -translate-y-1/2"
                  />
                  <span className="w-1/2 font-bold">Sat - Sun</span>
                  <span className="w-1/2 text-right">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-main py-7">
        <div className="container">
          <div className="flex flex-wrap items-center lg:flex-nowrap">
            <div className="basis-full lg:basis-1/2">
              <p className="mb-4 text-center text-sm leading-6 text-white lg:mb-0 lg:text-left">
                &copy; Copyrights Lawyero 2024. All Rights Reserved.
              </p>
            </div>
            <div className="basis-full lg:basis-1/2">
              <ul className="flex items-center justify-center lg:justify-end">
                <li className="ml-3 w-8">
                  <Link href="#" target="_blank">
                    <Facebook size={30} className="text-white" />
                  </Link>
                </li>
                <li className="ml-3 w-8">
                  <Link href="#" target="_blank">
                    <Image src={X} alt="Follow us on Twitter" className="w-6" />
                  </Link>
                </li>
                <li className="ml-3 w-8">
                  <Link href="#" target="_blank">
                    <LinkedinIcon size={30} className="text-white" />
                  </Link>
                </li>
                <li className="ml-3 w-8">
                  <Link href="#" target="_blank">
                    <Youtube size={30} className="text-white" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
