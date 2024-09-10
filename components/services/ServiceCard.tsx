import { PADataProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Library } from "lucide-react";
import ButtonCustom from "@/components/global/button";
import React from "react";
import { IServices } from "@/types/services/services";

interface props {
  data: IServices;
}

const ServiceCard = ({ data }: props) => {
  return (
    <div>
      <div className="sm:flex block sm:p-4  border-DEFAULT border-[#ccc] rounded mt-2 sm:mt-0 ">
        <div className="sm:w-44 w-full shrink-0">
          <Image
            src={data.image}
            width={400}
            height={200}
            alt="Practice Area Image"
            className="w-full h-[250px] sm:h-[200px] object-cover"
          />
        </div>
        <div className="sm:ml-6 ml-0 sm:mt-0 mt-6">
          <Link
            href={`/services/${data.id}`}
            className="text-2xl text-background font-bold hover:text-primary-main  inline-block line-clamp-2"
          >
            {data.name}
          </Link>
          <div className="flex items-center gap-1 text-[#333] my-1">
            <Library size={18} className="text-black font-bold" />
            <span className="font-medium">{data?.category}</span>
          </div>
          <p
            className="text-sm text-[#333] line-clamp-3"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          ></p>
          <div className="pt-4">
            <ButtonCustom
              href={`/services/${data.id}`}
              text="Batafsil"
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
