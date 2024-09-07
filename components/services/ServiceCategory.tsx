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

  const changeCategory = (newCategoryId: number) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("category", newCategoryId.toString());
    window.history.replaceState({}, "", `?${newSearchParams.toString()}`);
  };

  return (
    <div
      className={`${id === Number(categoryId) ? "bg-white text-primary-main" : "bg-primary-main text-white"}  p-2 sm:p-3 font-medium transition  border-primary-main border-[2px] duration-300 hover:border-primary-main hover:bg-white hover:text-primary-main cursor-pointer`}
      onClick={() => changeCategory(id)}
    >
      {category}
    </div>
  );
};

export default ServiceCategory;
