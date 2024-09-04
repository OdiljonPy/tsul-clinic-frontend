"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import SearchSidebar from "@/components/layout/search-sidebar/SearchSidebar";
import { useState } from "react";

const DesktopHeaderLink = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <nav>
      <ul className="hidden items-center lg:flex lg:gap-4 xl:gap-8">
        <li className="group">
          <Link
            href="/about"
            className="relative block py-7 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
          >
            Biz Haqimizda
          </Link>
        </li>
        <li className="group">
          <Link
            href="/services"
            className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
          >
            Xizmatlar
          </Link>
        </li>
        <li className="group">
          <Link
            href="/order-document"
            className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
          >
            Hujjat buyurtma qilish
          </Link>
        </li>
        {/*<li className="group relative">*/}
        {/*  <Link*/}
        {/*      href="/entrepreneurs"*/}
        {/*      className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"*/}
        {/*  >*/}
        {/*    Tadbirkorlar uchun*/}
        {/*  </Link>*/}
        {/*</li>*/}
        <li className="group relative">
          <Link
            href="/blog"
            className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
          >
            Yangiliklar
          </Link>
        </li>
        {/*<li className="group relative">*/}
        {/*  <Link*/}
        {/*      href="/faqs"*/}
        {/*      className="relative block py-7 pr-5 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"*/}
        {/*  >*/}
        {/*    FAQ*/}
        {/*  </Link>*/}
        {/*</li>*/}

        <li className="group relative">
          <Link
            href="/contact/"
            className="relative block py-7 duration-300 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:scale-x-0 after:bg-primary-main after:transition-transform after:content-[''] group-hover:after:scale-x-100"
          >
            Contact
          </Link>
        </li>
        <li
          onClick={() => setSearchOpen(true)}
          className="group relative flex h-full cursor-pointer shrink-0 items-center gap-2 transition-all duration-500 hover:text-primary-main hover:border-primary-main"
        >
          <Search />
          Hujjatni tekshirish
        </li>
      </ul>
      {searchOpen && (
        <SearchSidebar open={searchOpen} setOpen={setSearchOpen} />
      )}
    </nav>
  );
};

export default DesktopHeaderLink;
