"use client";

import { Languages } from "lucide-react";
import { getTranslation } from "@/i18n";
import { useEffect } from "react";

const languageList = [
  { code: "ru", name: "russian" },
  { code: "uz", name: "uzbek" },
];

const LanguageSwitcher = () => {
  const { i18n, t } = getTranslation();

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "uz" ? "ru" : "uz");
    window.location.reload();
  };
  useEffect(() => {
    if (!i18n.language) {
      i18n.changeLanguage("uz");
    }
  }, []);
  return (
    <div
      className="p-[6px] lg:p-2 border border-white rounded-xl transition-all duration-500 hover:text-primary-main hover:border-primary-main flex items-center gap-1 cursor-pointer"
      onClick={changeLanguage}
    >
      <Languages size={20} />
      <span className="uppercase font-medium">{i18n.language || "uz"}</span>
    </div>
  );
};

export default LanguageSwitcher;
