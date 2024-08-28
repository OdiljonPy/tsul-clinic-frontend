"use client";

import { Languages } from "lucide-react";
import { getTranslation } from "@/i18n";

const languageList = [
  { code: "ru", name: "russian" },
  { code: "uz", name: "uzbek" },
];

const LanguageSwitcher = () => {
  const { i18n, t } = getTranslation();
  console.log(i18n, "locale");

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === "uz" ? "ru" : "uz");
    window.location.reload();
  };
  return (
    <div
      className="p-2 border border-white flex items-center gap-2 cursor-pointer"
      onClick={changeLanguage}
    >
      <Languages size={20} />
      <span className="uppercase">{i18n.language}</span>
    </div>
  );
};

export default LanguageSwitcher;
