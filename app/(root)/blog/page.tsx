import BlogList from "@/components/blog/BlogList";
import Sidebar from "@/components/blog/Sidebar";
import InnerBanner from "@/components/global/inner-banner";
import { Metadata } from "next";
import { getTranslation } from "@/i18n";

export const metadata: Metadata = {
  title: "Blog with Sidebar - Lawyero",
  description: "Your one stop solution for legal matters",
};

const Page = () => {
  const { t } = getTranslation();
  metadata.title = t("news");
  return (
    <>
      <InnerBanner text={t("news")} />

      <div className="relative py-[25px] sm:py-[40px] md:py-[80px]">
        <div className="container">
          <div className="flex flex-wrap lg:flex-nowrap">
            <BlogList layoutClass="lg:basis-[70%] basis-full" />
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
