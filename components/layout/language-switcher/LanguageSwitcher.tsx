"use client";

import { Globe } from "lucide-react";
import { getTranslation } from "@/i18n";
import { useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const languageList = [
  { code: "ru", name: "russian" },
  { code: "uz", name: "uzbek" },
  { code: "en", name: "english" },
];

const LanguageSwitcher = () => {
  const { i18n, t } = getTranslation();
  const [onOpen, setOnOpen] = useState(false);

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setOnOpen(false)
    window.location.reload();
  };
  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage("ru");
    }
  }, []);
  return (
    <>
      <DropdownMenu.Root open={onOpen} onOpenChange={setOnOpen}>
        <DropdownMenu.Trigger asChild>
          <div className="p-[6px] lg:p-2 border border-white rounded-xl transition-all duration-500 hover:text-primary-main hover:border-primary-main flex items-center gap-1 cursor-pointer">
            <Globe size={20} />
            <span className="uppercase font-medium">
              {i18n.language || "ru"}
            </span>
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="bg-background border border-white p-[6px] lg:p-2 flex flex-col gap-2 relative !z-[9999] rounded-xl mt-2">
            {languageList.map((lang) => (
              <div
                className={`text-white transition-all duration-500 hover:text-primary-main hover:border-primary-main flex items-center gap-1 cursor-pointer ${i18n.language === lang.code ? "!text-primary-main border-primary-main" : ""}`}
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
              >
                <Globe size={20} />
                <span className="uppercase font-medium">{lang.code}</span>
              </div>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};

export default LanguageSwitcher;
