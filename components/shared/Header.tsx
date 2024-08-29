import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";

import DesktopHeaderLink from "@/components/layout/header/DesktopHeaderLink";
import MobileHeaderLink from "@/components/layout/header/MobileHeaderLink";
import LanguageSwitcher from "@/components/layout/language-switcher/LanguageSwitcher";

const Header = () => {
  return (
    <header className="relative z-20 font-albert">
      <div className="container py-2">
        <div className="flex flex-wrap justify-center sm:flex-nowrap sm:justify-between">
          <div className="basis-full text-center sm:basis-auto sm:text-left">
            Call Us:
            <Link className="font-bold" href="tel:1911462242">
              1911-462-2425
            </Link>
          </div>
          <Link href="#" className="font-bold">
            Request a free consultation
          </Link>
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
