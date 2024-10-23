"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface props {
  totalPages: number;
  page: number;
}

const Pagination = ({ totalPages, page }: props) => {
  const searchParams = useSearchParams();
  const [customPage, setCustomPage] = useState(
    searchParams.get("page") ? Number(searchParams.get("page")) : page,
  );
  const changePage = (page: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("page", page.toString());
    window.history.replaceState({}, "", `?${newSearchParams.toString()}`);
    setCustomPage(page);
  };
  return (
    <div>
      <ul className="flex">
        <button
          disabled={customPage === 1}
          className="group mr-3 flex size-12 cursor-pointer items-center justify-center border-2 border-background bg-white hover:bg-background disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => changePage(customPage - 1)}
        >
          <ChevronLeft className="w-6 text-background group-hover:text-white" />
        </button>
        {Array.from({ length: totalPages }).map((_, idx) => (
          <li
            key={idx + 1}
            onClick={() => changePage(idx + 1)}
            className={`group mr-3 flex size-12 cursor-pointer items-center justify-center border-2 border-background bg-white text-xl font-bold text-background hover:bg-background hover:text-white ${idx + 1 === customPage ? "!bg-background !text-white" : ""}`}
          >
            {idx + 1}
          </li>
        ))}

        <button
          disabled={customPage === totalPages}
          className="group mr-3 flex size-12 cursor-pointer items-center justify-center border-2 border-background bg-white hover:bg-background disabled:cursor-not-allowed disabled:opacity-50"
          onClick={() => changePage(customPage + 1)}
        >
          <ChevronRight className="w-6 text-background group-hover:text-white" />
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
