import { IFaqCategory } from "@/types/home/faq";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

interface props {
  faqCategory: IFaqCategory[];
  className?: string;
}

const FaqCategories = ({ faqCategory, className }: props) => {
  return (
    <div
      className={cn(className, "grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3")}
    >
      {faqCategory?.map((item) => (
        <Link
          key={item.id}
          href={`/faqs/${item.id}`}
          className="text-black group text-lg cursor-pointer flex items-center gap-2"
        >
          <CircleChevronRight className="mt-1 shrink-0 rounded-full bg-white text-primary-main" />
          <span className="transition-all duration-300 group-hover:text-primary-main font-semibold text-lg">
            {item.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default FaqCategories;
