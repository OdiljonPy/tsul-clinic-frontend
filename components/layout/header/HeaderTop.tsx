"use client";

import { PhoneCall, Video, NotebookText } from "lucide-react";
import ApplicationModal from "@/components/layout/modal/ApplicationModal";
import { useEffect, useState } from "react";
import { MeetingType } from "@/types/create-meeting/create-meeting";
import useInfoStore from "@/store/contact/info";

import { getTranslation } from "@/i18n";

const HeaderTop = () => {
  const { t } = getTranslation();

  const [open, setOpen] = useState(false);
  const [type, setType] = useState<MeetingType>(MeetingType.phone);
  const { info, fetchInfo } = useInfoStore();

  useEffect(() => {
    if (!info?.id) fetchInfo();
  }, [fetchInfo]);
  return (
    <div className="bg-white px-4 py-3">
      <div className="sm:container ">
        <div className="flex flex-wrap-reverse gap-2 items-center justify-center sm:flex-nowrap sm:justify-between">
          <div
            onClick={() => {
              setOpen(true);
              setType(MeetingType.meeting);
            }}
            className="flex items-center gap-1 cursor-pointer font-medium transition-all duration-300 hover:text-primary-main"
          >
            <NotebookText size={20} className="flex shrink-0" />
            {t("call_meeting")}
          </div>
          <div className="flex items-center gap-3">
            <div
              onClick={() => {
                setOpen(true);
                setType(MeetingType.video);
              }}
              className="flex items-center gap-1 cursor-pointer font-medium transition-all duration-300 hover:text-primary-main"
            >
              <Video className="flex shrink-0" />
              {t("call_video")}
            </div>
            <div className="w-px h-6 bg-black hidden sm:block"></div>
            <div
              onClick={() => {
                setOpen(true);
                setType(MeetingType.phone);
              }}
              className="flex items-center gap-1 cursor-pointer font-medium transition-all duration-300 hover:text-primary-main"
            >
              <PhoneCall size={20} className="flex shrink-0" />
              {t("call_phone")}
            </div>
          </div>
        </div>
        <ApplicationModal open={open} setOpen={setOpen} type={type} />
      </div>
    </div>
  );
};

export default HeaderTop;
