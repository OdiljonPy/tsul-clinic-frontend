"use client";

import Link from "next/link";
import { footerLinks } from "@/lib/data";
import Copyright from "@/components/layout/footer/components/Copyright";
import useLinkStore from "@/store/home/link";
import { useEffect } from "react";

import useInfoStore from "@/store/contact/info";
import {
  BotMessageSquare, Facebook,
  Instagram,
  Linkedin, Music2,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import SocialIcon from "@/components/layout/footer/components/SocialIcon";
import { getTranslation } from "@/i18n";
import Image from "next/image";
import WorkingTime from "@/components/layout/footer/components/WorkingTime";

const SFooter = () => {
  const { t } = getTranslation();

  const { links, fetchLinks } = useLinkStore();
  const { info } = useInfoStore();

  useEffect(() => {
    if (links?.length === 0) fetchLinks();
  }, [fetchLinks]);

  return (
    <footer className="bg-[#018DAE]">
      <div className="container px-6 lg:px-8  ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-6 sm:py-12 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-6 sm:mb-10 lg:col-span-2 lg:mb-0">
            <Link
              href="#"
              className="flex justify-center lg:justify-start font-bold text-2xl"
            >
              <Image
                src={`/logo_bg.png`}
                alt="Logo"
                width={500}
                height={500}
                className="object cover w-[85px] h-[85px]"
              />
            </Link>
            <p className="py-3 sm:py-6 text-sm text-white lg:max-w-xs text-center lg:text-left">
              {t("follow_us")}
            </p>
            <div className="flex mt-3 space-x-4 justify-center lg:justify-start sm:mt-0 ">
              <SocialIcon url={info?.telegram}>
                <Send size={20} />
              </SocialIcon>
              <SocialIcon url={info?.instagram}>
                <Instagram size={20} />
              </SocialIcon>
              <SocialIcon url={info?.twitter}>
                <Music2 size={20} />
              </SocialIcon>
              <SocialIcon url={info?.youtube}>
                <Youtube size={20} />
              </SocialIcon>
              <SocialIcon url={info?.linkedin}>
                <Facebook size={20} />
              </SocialIcon>
            </div>
            <li className="flex items-center group mt-4 justify-center lg:justify-start">
              <BotMessageSquare
                size={20}
                className="text-white transition duration-300 group-hover:text-primary-main"
              />
              <a
                className="ml-2 inline-block text-base text-white transition duration-300 group-hover:text-primary-main"
                href="https://t.me/TDYU_Yuridik_klinika_bot"
                target="_blank"
              >
                @TDYU_Yuridik_klinika_bot
              </a>
            </li>
            <WorkingTime className="mt-3" />
          </div>
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg text-white font-medium mb-7">
              {t("links")}
            </h4>
            <ul className="text-sm  transition-all duration-500">
              {footerLinks.map((url, idx) => (
                <li key={idx} className="mb-6">
                  <Link
                    href={url.link}
                    className="text-lime-50 hover:text-white"
                  >
                    {t(url.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg text-white font-medium mb-7">
              {t("sources")}
            </h4>
            <ul className="text-sm  transition-all duration-500">
              {links
                ?.slice(0, Math.floor(links.length / 3))
                ?.map((url, idx) => (
                  <li key={idx} className="mb-6">
                    <a
                      target="_blank"
                      href={url.url}
                      className="text-lime-50 hover:text-white"
                    >
                      {url.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg text-white font-medium mb-7">
              {t("sources")}
            </h4>
            <ul className="text-sm  transition-all duration-500">
              {links
                ?.slice(
                  Math.floor(links.length / 3),
                  Math.floor(links.length / 3) * 2,
                )
                ?.map((url, idx) => (
                  <li key={idx} className="mb-6">
                    <a
                      target="_blank"
                      href={url.url}
                      className="text-lime-50 hover:text-white"
                    >
                      {url.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg text-white font-medium mb-7">
              {t("sources")}
            </h4>
            <ul className="text-sm  transition-all duration-500">
              {links
                ?.slice(Math.floor(links.length / 3) * 2)
                ?.map((url, idx) => (
                  <li key={idx} className="mb-6">
                    <a
                      target="_blank"
                      href={url.url}
                      className="text-lime-50 hover:text-white"
                    >
                      {url.name}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <Copyright />
      </div>
    </footer>
  );
};

export default SFooter;
