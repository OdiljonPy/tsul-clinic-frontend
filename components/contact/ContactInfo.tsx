"use client";

import { MapPin, PhoneCallIcon } from "lucide-react";
import useInfoStore from "@/store/contact/info";
import { useEffect } from "react";
import Loading from "@/app/(root)/loading";
import formatPhoneNumber from "@/utility/formatPhoneNumber";
import PrimaryHeadline from "@/components/global/primary-headline";
import { cn } from "@/lib/utils";

interface props {
  className?: string;
}

const ContactInfo = ({ className }: props) => {
  const { info, loading, fetchInfo } = useInfoStore();

  useEffect(() => {
    if (!info?.id) fetchInfo();
  }, [fetchInfo]);

  if (loading) return <Loading />;

  return (
    <div className={cn(className, "")}>
      <PrimaryHeadline
        text="Aloqaga chiqish"
        additionalClass="text-3xl primary-headline-left"
        headlineType="h3"
      />
      <ul>
        <li className="mb-[10px] flex items-center group">
          <PhoneCallIcon
            size={15}
            className="text-background transition duration-300 group-hover:text-primary-main"
          />
          <a
            className="ml-2 inline-block text-base text-background transition duration-300 group-hover:text-primary-main"
            href={`tel:${info?.phone_number}`}
          >
            {formatPhoneNumber(info?.phone_number)}
          </a>
        </li>
      </ul>
      <div>
        <div className="mt-7">
          <h3 className="mb-4 text-2xl font-bold text-[#333]">
            Bizning manzillarmiz
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
