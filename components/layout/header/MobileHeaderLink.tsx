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
                <span className="text-white">TSUL</span>
                <span className="text-primary-main">CLINIC</span>
              </Link>
            </SheetTitle>
            <SheetDescription>
              <ul className="block pt-8 text-left *:text-white lg:hidden lg:gap-4 xl:gap-8">
                <li className="group relative">
                  <Link
                    href="/about"
                    className="relative transition-all hover:text-primary-main hover:border-primary-main block border-b border-white py-3 text-white duration-300 ease-in-out after:transition-transform"
                  >
                    <SheetTrigger>{t("about")}</SheetTrigger>
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    href="/services"
                    className="relative transition-all hover:text-primary-main hover:border-primary-main  block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                  >
                    <SheetTrigger>{t("services")}</SheetTrigger>
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    href="/order-document"
                    className="relative transition-all hover:text-primary-main hover:border-primary-main  block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                  >
                    <SheetTrigger>{t("order_document")}</SheetTrigger>
                  </Link>
                </li>

                <li className="relative">
                  <Link
                    href="/blog"
                    className="relative transition-all hover:text-primary-main hover:border-primary-main  block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                  >
                    <SheetTrigger>{t("news")}</SheetTrigger>
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    href="/faqs"
                    className="relative transition-all  hover:text-primary-main hover:border-primary-main  block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                  >
                    <SheetTrigger>FAQ</SheetTrigger>
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    href="/contact"
                    className="relative transition-all hover:text-primary-main hover:border-primary-main  block border-b border-white py-3 duration-300 ease-in-out after:transition-transform"
                  >
                    <SheetTrigger>{t("contact")}</SheetTrigger>
                  </Link>
                </li>
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
