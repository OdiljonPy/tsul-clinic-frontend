import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";
import { IPartners } from "@/types/partner/partner";
import PartnerCard from "@/components/home/partners/PartnerCard";

interface props {
  className?: string;
  partners: Array<IPartners>;
}
const MarqueeSlider = ({ className, partners }: props) => {
  return (
    <Marquee className={cn(className)}>
      <div className="flex h-[70px] w-full items-center justify-between sm:h-[100px]">
        {partners?.length &&
          partners?.map((partner, idx) => (
            <PartnerCard partner={partner} key={idx} />
          ))}
      </div>
    </Marquee>
  );
};

export default MarqueeSlider;
