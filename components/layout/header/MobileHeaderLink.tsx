"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

import SearchSidebar from "@/components/layout/search-sidebar/SearchSidebar";
import { useState } from "react";
import { Search } from "lucide-react";
import { getTranslation } from "@/i18n";
import Image from "next/image";
import { headerLinks } from "@/lib/data";

const MobileHeaderLink = () => {
  const { t } = getTranslation();
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <Sheet>
      <SheetTrigger className="block lg:hidden">
        <span className="mb-1 block h-[3px] w-7 rounded-md bg-white"></span>
        <span className="mb-1 block h-[3px] w-7 rounded-md bg-white"></span>
        <span className="block h-[3px] w-7 rounded-md bg-white"></span>
      </SheetTrigger>
      <SheetContent className="border-none p-0 text-white">
        <div className="h-full overflow-y-auto p-6">
          <SheetHeader>
            <SheetTitle>
              <Link href="/" className="font-bold text-2xl">
                <Image
                  src={`/logo_white.png`}
                  alt="Logo"
                  width={70}
                  height={70}
                  className="object cover w-[60px] h-[60px] sm:w-[70px] sm:h-[70px]"
                />
              </Link>
            </SheetTitle>
            <SheetDescription>
              <ul className="block pt-6 text-left *:text-white lg:hidden lg:gap-4 xl:gap-8">
                {[...headerLinks, { name: "FAQ", link: "/faqs" }].map(
                  (item, idx) => (
                    <li className="group relative" key={idx}>
                      <Link
                        href={item.link}
                        className="relative transition-all group-hover:text-primary-main group-hover:border-primary-main block border-b border-white py-3 text-white duration-300 ease-in-out after:transition-transform"
                      >
                        <SheetTrigger>{t(item.name)}</SheetTrigger>
                      </Link>
                    </li>
                  ),
                )}
                <li
                  className="relative cursor-pointer"
                  onClick={() => setSearchOpen(true)}
                >
                  <SheetTrigger className="block">
                    <span className="relative transition-all hover:text-primary-main hover:border-primary-main  border-b border-white py-3 duration-300 ease-in-out after:transition-transform flex items-center gap-2">
                      <Search size={18} />
                      {t("check_document")}
                    </span>
                  </SheetTrigger>
                </li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </div>
      </SheetContent>
      {searchOpen && (
        <SearchSidebar open={searchOpen} setOpen={setSearchOpen} />
      )}
    </Sheet>
  );
};

export default MobileHeaderLink;
