import { TriangleAlert } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - Lawyero",
  description: "Your one stop solution for legal matters",
};
const page = () => {
  return (
    <>
      <div className="container py-[70px] text-center sm:py-[90px]">
        <h1 className="mb-8 text-[25px] font-bold text-[#333] sm:text-[40px]">
          OOPS! SOMETHING WENT WRONG
        </h1>
        <div className="flex w-full justify-center text-center">
          <TriangleAlert size={60} />
        </div>
        <p className="mt-9 text-sm font-bold text-[#333]">
          The Page You Are Trying To Access Is Not Accessable Or Moved To
          Another Location.
        </p>
        <div className="mt-2 flex justify-center">
          <span className="inline-block text-base text-[#333]">
            Click Here to go to{" "}
          </span>
          <Link
            className="ml-1 inline-block text-base text-primary-main"
            href="/"
          >
            {" "}
            Go Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
