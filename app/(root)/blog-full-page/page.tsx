import BlogListTwoColumns from "@/components/blog/BlogListTwoColumns";
import InnerBanner from "@/components/global/inner-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Full Page - Lawyero",
  description: "Your one stop solution for legal matters",
};

const page = () => {
  return (
    <>
      <InnerBanner text="Blog Full Page" />
      <div className="relative py-[90px]">
        <div className="container">
          <div className="flex flex-wrap">
            <BlogListTwoColumns />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
