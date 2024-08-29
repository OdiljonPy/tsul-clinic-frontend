import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";

import DesktopHeaderLink from "@/components/layout/header/DesktopHeaderLink";
import MobileHeaderLink from "@/components/layout/header/MobileHeaderLink";
import LanguageSwitcher from "@/components/layout/language-switcher/LanguageSwitcher";
import { PhoneCall, Video } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-20 font-albert">
      <div className="px-4  sm:container py-3">
        <div className="flex flex-wrap items-center justify-center sm:flex-nowrap sm:justify-between">
          <div className="basis-full text-center sm:basis-auto sm:text-left hidden md:block">
            Call Us:{" "}
            <Link className="font-bold" href="tel:998991234567">
              (99) 123-45-67
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 cursor-pointer font-medium transition-all duration-300 hover:text-primary-main">
              <Video className="flex shrink-0" />
              Video orqali murojat qilish
            </div>
            <div className="w-px h-6 bg-black hidden sm:block"></div>
            <div className="flex items-center gap-1 cursor-pointer font-medium transition-all duration-300 hover:text-primary-main">
              <PhoneCall size={20} className="flex shrink-0" />
              Telefon orqali murojat qilish
            </div>
            {/*<button className="flex items-center gap-1 border p-2 rounded-xl bg-primary-main text-white transition-all duration-300 hover:text-primary-main hover:border-primary-main hover:bg-white">*/}
            {/*  <Video />*/}
            {/*  Video orqali murojat qilish*/}
            {/*</button>*/}
            {/*<button className="flex items-center gap-1 border p-2 rounded-xl bg-primary-main text-white transition-all duration-300 hover:text-primary-main hover:border-primary-main hover:bg-white">*/}
            {/*  <PhoneCall size={20} />*/}
            {/*  Telefon orqali murojat qilish*/}
            {/*</button>*/}
          </div>
        </div>
      </div>
      <div className="relative bg-background">
        <div className="container">
          <div className="flex min-h-[80px] items-center gap-4  justify-between lg:min-h-full">
            <div className="shrink-0 basis-[166px] py-5">
              <Link href="/">
                <Image src={logo} alt="Logo" width={166} height={30} />
              </Link>
            </div>
            <div className="text-white flex items-center gap-3 lg:gap-6">
              <DesktopHeaderLink />
              <LanguageSwitcher />
              <MobileHeaderLink />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
