import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/logo.png";

import DesktopHeaderLink from "@/components/layout/header/DesktopHeaderLink";
import MobileHeaderLink from "@/components/layout/header/MobileHeaderLink";
import LanguageSwitcher from "@/components/layout/language-switcher/LanguageSwitcher";

import HeaderTop from "@/components/layout/header/HeaderTop";

const Header = () => {
  return (
    <header className="relative z-20 font-albert">
      <HeaderTop />
      <div className="relative bg-background">
        <div className="container">
          <div className="flex min-h-[80px] items-center gap-4  justify-between lg:min-h-full">
            <div className="shrink-0 basis-[166px] py-5">
              <Link href="/" className="font-bold text-2xl">
                {/*<Image src={logo} alt="Logo" width={166} height={30} />*/}
                <span className="text-white">TSUL</span>
                <span className="text-primary-main">CLINIC</span>
              </Link>
              {/*<Image src={"/logo.png"} alt="Logo" width={100} height={60} />*/}
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
