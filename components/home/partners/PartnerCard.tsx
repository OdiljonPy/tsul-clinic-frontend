import Image from "next/image";
import { IPartners } from "@/types/partner/partner";

interface props {
  partner: IPartners;
}
const PartnerCard = ({ partner }: props) => {
  return (
    <div className="ml-[45px] h-full md:ml-[88px]">
      <Image
        priority
        src={partner?.image ? partner.image : "/assets/default_users.png"}
        alt={partner?.company_name}
        height={120}
        width={200}
        className="h-full w-full min-w-0 cursor-pointer !object-contain saturate-0 transition duration-300 hover:saturate-100"
      />
    </div>
  );
};

export default PartnerCard;
