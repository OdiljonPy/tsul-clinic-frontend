import Image from "next/image";
import ButtonCustom from "../global/button";
import { PAData } from "@/lib/data";
import Link from "next/link";
import { Library } from "lucide-react";
import PrimaryHeadline from "@/components/global/primary-headline";
import React from "react";

const PAList = () => {
  return (
    <div className="container lg:pb-28 pb-20">
      <div className="flex flex-col-reverse md:flex-row gap-2 sm:gap-4">
        <div className="grow-1">
          {PAData.map((item) => (
            <div key={item.id}>
              <div className="sm:flex block p-4 border-DEFAULT border-[#ccc] rounded">
                <div className="sm:w-44 w-full shrink-0">
                  <Image
                    src={item.image}
                    alt="Practice Area Image"
                    className="w-full"
                  />
                </div>
                <div className="sm:ml-6 ml-0 sm:mt-0 mt-6">
                  <Link
                    href={`/services/${item.id}`}
                    className="text-2xl text-background font-bold hover:text-primary-main  inline-block line-clamp-2"
                  >
                    {item.title}
                  </Link>
                  <div className="flex items-center gap-1 text-[#333] my-1">
                    <Library size={18} className="text-black font-bold" />
                    <span className="font-medium">category</span>
                  </div>
                  <p className="text-sm text-[#333] line-clamp-3">
                    {item.text}
                  </p>
                  <div className="pt-4">
                    <ButtonCustom
                      href={`/services/${item.id}`}
                      text="Learn More"
                      buttonType="secondary"
                      className="py-[8px] !text-sm px-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:basis-[30%] shrink-0">
          <PrimaryHeadline
            text="Category List"
            headlineType="h3"
            additionalClass="text-[32px] primary-headline-left text-background"
            formatTwoColor
          />
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: 6 }).map((item, index) => (
              <div
                className="bg-primary-main text-white p-2 sm:p-3 font-medium transition  border-primary-main border-[2px] duration-300 hover:border-primary-main hover:bg-white hover:text-primary-main cursor-pointer"
                key={index}
              >{`Category ${index+1}`}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAList;
