"use client";

import { BotMessageSquare, MapPin, PhoneCallIcon } from "lucide-react";
import useInfoStore from "@/store/contact/info";
import { useEffect } from "react";
import Loading from "@/app/(root)/loading";
import formatPhoneNumber from "@/utility/formatPhoneNumber";
import PrimaryHeadline from "@/components/global/primary-headline";
import { cn } from "@/lib/utils";
import { getTranslation } from "@/i18n";

interface props {
  className?: string;
}

const ContactInfo = ({ className }: props) => {
  const { t } = getTranslation();
  const { info, loading, fetchInfo } = useInfoStore();

  useEffect(() => {
    if (!info?.id) fetchInfo();
  }, [fetchInfo]);

  if (loading) return <Loading />;

  return (
    <div className={cn(className, "")}>
      <PrimaryHeadline
        text={t("contact_with")}
        additionalClass="text-3xl primary-headline-left"
        headlineType="h3"
      />
      <ul className="mb-[10px] space-y-2">
        <li className=" flex items-center group">
          <PhoneCallIcon
            size={20}
            className="text-background transition duration-300 group-hover:text-primary-main"
          />
          <a
            className="ml-2 inline-block text-base text-background transition duration-300 group-hover:text-primary-main"
            href={`tel:${info?.phone_number}`}
          >
            {formatPhoneNumber(info?.phone_number)}
          </a>
        </li>
        <li className="flex items-center group">
          <BotMessageSquare
            size={20}
            className="text-background transition duration-300 group-hover:text-primary-main"
          />
          <a
            className="ml-2 inline-block text-base text-background transition duration-300 group-hover:text-primary-main"
            href="https://t.me/@TDYU_Yuridik_klinika_bot"
            target="_blank"
          >
            @TDYU_Yuridik_klinika_bot
          </a>
        </li>
      </ul>
      <div>
        <div className="mt-7">
          <h3 className="mb-4 text-2xl font-bold text-[#333]">
            {t("our_address")}
          </h3>
          {info?.office_address?.map((office) => (
            <a
              href={`https://www.google.com/maps/@${office.latitude},${office.longitude},623m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D`}
              target="_blank"
              className="flex group items-center mt-2"
              key={office.id}
            >
              <MapPin
                size={15}
                className="mt-1 text-background transition duration-300 group-hover:text-primary-main"
              />
              <p className="pl-2 text-background transition duration-300 group-hover:text-primary-main">
                {office.address_name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
