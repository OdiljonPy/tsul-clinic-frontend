"use client";

import { getTranslation } from "@/i18n";
import ButtonCustom from "@/components/global/button";

const Error = () => {
  const { t } = getTranslation();
  return (
    <div className="w-full h-screen top-0 left-0 fixed flex  justify-center items-center !z-[9999] bg-gray-100">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-8xl font-extrabold text-red-500">500</h1>
        <p className="text-4xl font-medium text-gray-800">
          Internal Server Error
        </p>
        <ButtonCustom text={t("go_back")} href={"/"} className="mt-4" />
      </div>
    </div>
  );
};

export default Error;
