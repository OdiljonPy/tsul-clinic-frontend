import { TriangleAlert } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { getTranslation } from "@/i18n";

export const metadata: Metadata = {
  title: "Page Not Found - Lawyero",
  description: "Your one stop solution for legal matters",
};
const page = () => {
  const { t } = getTranslation();
  return (
    <div className="w-full h-screen top-0 left-0 fixed flex  justify-center items-center !z-[9999] bg-gray-100">
      <div className="flex flex-col items-center">
        <h1 className="text-[120px] font-extrabold text-gray-700">404</h1>
        <p className="text-2xl font-medium text-gray-600 mb-6">
          {t("page_not_found")}
        </p>
        <Link
          href="/"
          className="px-4 py-2 font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all duration-200 ease-in-out"
        >
          {t("go_back")}
        </Link>
      </div>
    </div>
  );
};

export default page;
