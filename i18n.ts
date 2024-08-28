import uz from "@/public/locale/uz.json";
import ru from "@/public/locale/ru.json";

const cookieObj =
  typeof window === "undefined"
    ? require("next/headers")
    : require("js-cookie");

const langObj: any = { ru, uz };

const getLang = () => {
  let lang = null;
  if (typeof window !== "undefined") {
    lang = cookieObj.get("i18nextLng");
  } else {
    const cookies = cookieObj.cookies();
    lang = cookies.get("i18nextLng")?.value;
  }
  return lang;
};

export const getTranslation = () => {
  const lang = getLang();
  const data: any = langObj[lang || "ru"];

  const t = (key: string) => {
    const keys = key?.split(".");
    return keys?.reduce((obj: any, key: string) => obj[key] || key, data);
  };

  const initLocale = (themeLocale: string) => {
    const lang = getLang();
    i18n.changeLanguage(lang || themeLocale);
  };

  const i18n = {
    language: lang,
    changeLanguage: (lang: string) => {
      cookieObj.set("i18nextLng", lang);
    },
  };

  return { t, i18n, initLocale };
};
