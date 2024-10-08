"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import SearchSidebar from "@/components/layout/search-sidebar/SearchSidebar";
import { useState } from "react";
import { getTranslation } from "@/i18n";
import { headerLinks } from "@/lib/data";

const DesktopHeaderLink = () => {
  const { t } = getTranslation();
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <nav>
      <ul className="hidden items-center lg:flex lg:gap-4 xl:gap-8">
        {headerLinks?.map((item, idx) => (
          <li className="group" key={idx}>
            <Link
              href={item.link}
              className="relative block py-5  transition-all duration-500 hover:text-primary-main hover:border-primary-main"
            >
              {t(item.name)}
            </Link>
          </li>
        ))}

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
