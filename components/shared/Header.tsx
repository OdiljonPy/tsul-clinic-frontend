"use client";

import Link from "next/link";
import Image from "next/image";

import DesktopHeaderLink from "@/components/layout/header/DesktopHeaderLink";
import MobileHeaderLink from "@/components/layout/header/MobileHeaderLink";
import LanguageSwitcher from "@/components/layout/language-switcher/LanguageSwitcher";

import HeaderTop from "@/components/layout/header/HeaderTop";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 font-albert ">
      <HeaderTop />
      <div className="relative bg-[#018DAE]">
        <div className="container">
          <div className="flex min-h-[80px] items-center gap-4  justify-between lg:min-h-full">
            <div className="shrink-0 basis-[166px] py-[2px] sm:py-2">
              <Link href="/" className="font-bold text-2xl shadow">
                <Image
                  src={`/logo_bg.png`}
                  alt="Logo"
                  width={500}
                  height={500}
                  className="object-cover w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]"
                />
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
