"use client";

import Link from "next/link";
import { PhoneCall, Video } from "lucide-react";
import ApplicationModal from "@/components/layout/modal/ApplicationModal";
import { useState } from "react";
import Image from "next/image";

const HeaderTop = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<"phone" | "video">("phone");
  return (
    <div className="px-4  sm:container py-3">
      <div className="flex flex-wrap items-center justify-center sm:flex-nowrap sm:justify-between">
        <div className="basis-full text-center sm:basis-auto sm:text-left hidden md:block">
          {/*<Image src={"/logo.png"} alt="Logo" width={100} height={60} />*/}
          Call Us:{" "}
          <Link className="font-bold" href="tel:998991234567">
            (99) 123-45-67
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <div
            onClick={() => {
              setOpen(true);
              setType("video");
            }}
            className="flex items-center gap-1 cursor-pointer font-medium transition-all duration-300 hover:text-primary-main"
          >
            <Video className="flex shrink-0" />
            Video orqali murojat qilish
          </div>
          <div className="w-px h-6 bg-black hidden sm:block"></div>
          <div
            onClick={() => {
              setOpen(true);
              setType("phone");
            }}
            className="flex items-center gap-1 cursor-pointer font-medium transition-all duration-300 hover:text-primary-main"
          >
            <PhoneCall size={20} className="flex shrink-0" />
            Telefon orqali murojat qilish
          </div>
          {/*<button className="flex items-center gap-1 border p-2 rounded-xl bg-primary-main text-white transition-all duration-300 hover:text-primary-main hover:border-primary-main hover:bg-white">*/}
          {/*  <Video />*/}
          {/*  Video orqali murojat qilish*/}
          {/*</button>*/}
          {/*<button className="flex items-center gap-1 border p-2 rounded-xl bg-primary-main text-white transition-all duration-300 hover:text-primary-main hover:border-primary-main hover:bg-white">*/}
          {/*  <PhoneCall size={20} />*/}
          {/*  Telefon orqali murojat qilish*/}
          {/*</button>*/}
        </div>
      </div>
      <ApplicationModal open={open} setOpen={setOpen} type={type} />
    </div>
  );
};

export default HeaderTop;
