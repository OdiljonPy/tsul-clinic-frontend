import { Files } from "lucide-react";
import { getTranslation } from "@/i18n";
import formatPhoneNumber from "@/utility/formatPhoneNumber";
import useInfoStore from "@/store/contact/info";

const DocumentNotFound = () => {
  const { t } = getTranslation();
  const { info } = useInfoStore();
  return (
    <div className="no-file-found flex flex-col items-center justify-center py-8 px-4 text-center bg-gray-100  rounded-lg shadow-md">
      <Files size={50} className="text-gray-700" />
      <h3 className="text-xl font-medium mt-4 text-gray-700 dark:text-gray-200">
        {t("document_not_found")}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        {t("document_not_found_text")}
      </p>
      <div className="flex flex-col w-full gap-4 justify-between items-center mt-5">
        <p className="text-red-500">{t("contact_admin")}</p>
        <p className="font-medium text-xl">
          +998 {formatPhoneNumber(info?.phone_number)}
        </p>
      </div>
    </div>
  );
};

export default DocumentNotFound;
