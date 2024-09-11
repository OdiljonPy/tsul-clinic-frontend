"use client";

import Link from "next/link";
import { footerLinks } from "@/lib/data";
import Copyright from "@/components/layout/footer/components/Copyright";
import useLinkStore from "@/store/home/link";
import { useEffect } from "react";

import useInfoStore from "@/store/contact/info";
import { Instagram, Linkedin, Send, Twitter, Youtube } from "lucide-react";
import SocialIcon from "@/components/layout/footer/components/SocialIcon";

const SFooter = () => {
  const { links, fetchLinks } = useLinkStore();
  const { info, fetchInfo } = useInfoStore();

  useEffect(() => {
    if (links?.length === 0) fetchLinks();
    if (!(info?.id === 0)) fetchInfo();
  }, [fetchLinks, fetchInfo]);

  return (
    <footer className="bg-background ">
      <div className="container px-6 lg:px-8  ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <Link
              href="#"
              className="flex justify-center lg:justify-start font-bold text-2xl"
            >
              {/*<Image src={logo} alt="Logo" width={166} height={30}/>*/}
              <span className="text-white">TSUL</span>
              <span className="text-primary-main">CLINIC</span>
            </Link>
            <p className="py-8 text-sm text-white lg:max-w-xs text-center lg:text-left">
              Bizni ijtimoiy tarmoqlar orqali kuzatib boring!
            </p>
            <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 ">
              <SocialIcon url={info?.telegram}>
                <Send size={18} className="text-white" />
              </SocialIcon>
              <SocialIcon url={info?.instagram}>
                <Instagram size={18} className="text-white" />
              </SocialIcon>
              <SocialIcon url={info?.twitter}>
                <Twitter size={18} className="text-white" />
              </SocialIcon>
              <SocialIcon url={info?.youtube}>
                <Youtube size={18} className="text-white" />
              </SocialIcon>
              <SocialIcon url={info?.linkedin}>
                <Linkedin size={18} className="text-white" />
              </SocialIcon>
            </div>
          </div>
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg text-white font-medium mb-7">Havolalar</h4>
            <ul className="text-sm  transition-all duration-500">
              {footerLinks.map((url, idx) => (
                <li key={idx} className="mb-6">
                  <Link
                    href={url.link}
                    className="text-lime-50 hover:text-white"
                  >
                    {url.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg text-white font-medium mb-7">Manbalar</h4>
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
            <h4 className="text-lg text-white font-medium mb-7">Manbalar</h4>
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
            <h4 className="text-lg text-white font-medium mb-7">Qo`shimcha</h4>
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
