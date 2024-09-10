import PrimaryHeadline from "@/components/global/primary-headline";
import Image from "next/image";
import paimage1 from "@/public/assets/pa-img-5.jpg";
import { IServices } from "@/types/services/services";

interface props {
  detail: IServices;
}

const PAContent = ({ detail }: props) => {
  return (
    <div className="container py-16 lg:py-24">
      <div className="flex flex-wrap gap-0 lg:flex-nowrap lg:gap-10">
        <div className="basis-full lg:basis-4/6">
          <PrimaryHeadline
            text={detail.name}
            additionalClass="primary-headline-left"
          />
          <div
            className="mb-5 text-base text-[#333] v-html"
            dangerouslySetInnerHTML={{ __html: detail.content }}
          ></div>
        </div>
        <div className="basis-full pt-7 lg:basis-1/3 lg:pt-0">
          <Image
            src={detail.image}
            width={400}
            height={300}
            alt="Practice Area Image"
            className="w-full rounded h-[300px] sm:h-[400px] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default PAContent;
