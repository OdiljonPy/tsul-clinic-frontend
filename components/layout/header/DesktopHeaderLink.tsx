"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import SearchSidebar from "@/components/layout/search-sidebar/SearchSidebar";
import { useState } from "react";
import { getTranslation } from "@/i18n";

const DesktopHeaderLink = () => {
  const { t } = getTranslation();
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <nav>
      <ul className="hidden items-center lg:flex lg:gap-4 xl:gap-8">
        <li className="group">
          <Link
            href="/about"
            className="relative block py-7 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
          >
            {t("about")}
          </Link>
        </li>
        <li className="group">
          <Link
            href="/services"
            className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
          >
            {t("services")}
          </Link>
        </li>
        <li className="group">
          <Link
            href="/order-document"
            className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
          >
            {t("order_document")}
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="/blog"
            className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
          >
            {t("news")}
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="/contact/"
            className="relative block py-7 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
          >
            {t("contact")}
          </Link>
        </li>
        <li
          onClick={() => setSearchOpen(true)}
          className="group relative flex h-full cursor-pointer shrink-0 items-center gap-2 transition-all duration-500 hover:text-primary-main hover:border-primary-main"
        >
          <Search />
          {t("check_document")}
        </li>
      </ul>
      {searchOpen && (
        <SearchSidebar open={searchOpen} setOpen={setSearchOpen} />
      )}
    </nav>
  );
};

export default DesktopHeaderLink;
