"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

interface props {
  category: string;
  id: number;
}

const ServiceCategory = ({ category, id }: props) => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");

  const changeCategory = (newCategory: string) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("category", newCategory.toString());
    window.history.replaceState({}, "", `?${newSearchParams.toString()}`);
  };

  return (
    <div
      className={`${category === categoryId ? "bg-white text-primary-main" : "bg-primary-main text-white"}  p-2 sm:p-3 font-medium transition  border-primary-main border-[2px] duration-300 hover:border-primary-main hover:bg-white hover:text-primary-main cursor-pointer`}
      onClick={() => changeCategory(category)}
    >
      {category}
    </div>
  );
};

export default ServiceCategory;
