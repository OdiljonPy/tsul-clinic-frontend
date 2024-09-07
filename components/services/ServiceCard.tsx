import { PADataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Library } from "lucide-react";
import ButtonCustom from "@/components/global/button";
import React from "react";

interface props {
  data: PADataProps;
}

const ServiceCard = ({ data }: props) => {
  return (
    <div>
      <div className="sm:flex block p-4 border-DEFAULT border-[#ccc] rounded">
        <div className="sm:w-44 w-full shrink-0">
          <Image
            src={data.image}
            alt="Practice Area Image"
            className="w-full"
          />
        </div>
        <div className="sm:ml-6 ml-0 sm:mt-0 mt-6">
          <Link
            href={`/services/${data.id}`}
            className="text-2xl text-background font-bold hover:text-primary-main  inline-block line-clamp-2"
          >
            {data.title}
          </Link>
          <div className="flex items-center gap-1 text-[#333] my-1">
            <Library size={18} className="text-black font-bold" />
            <span className="font-medium">{data?.category}</span>
          </div>
          <p className="text-sm text-[#333] line-clamp-3">{data.text}</p>
          <div className="pt-4">
            <ButtonCustom
              href={`/services/${data.id}`}
              text="Learn More"
              buttonType="secondary"
              className="py-[8px] !text-sm px-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
