import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import teammemberbefore from "@/public/assets/team-meber-before.svg";

import { ITeam } from "@/types/home/team";
import Autoplay from "embla-carousel-autoplay";

interface props {
  team: ITeam[];
  textColor?: string;
  isBorder?: boolean;
}

export function TeamMembersCarousel({ team, textColor, isBorder }: props) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          playOnInit: true,
          delay: 3000,
        }) as any,
      ]}
    >
      <CarouselContent className="pt-3">
        {team?.map((item) => (
          <CarouselItem
            key={`team${item.id}`}
            className="sm:basis-1/2 lg:basis-1/4"
          >
            <div className="group">
              <div className="before::content-[''] relative cursor-pointer before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-black before:opacity-30 before:transition-all before:duration-300 before:ease-in group-hover:before:w-full">
                <Image
                  src={item.image}
                  width={700}
                  height={300}
                  alt="Team Member Img"
                  className="w-full h-[320px] sm:h-[290px] object-cover"
                />
                {isBorder ? (
                  <>
                    <Image
                      src={teammemberbefore}
                      alt="Team Member Before"
                      className="absolute left-0 top-0 size-11"
                    />
                    <Image
                      src={teammemberbefore}
                      alt="Team Member Before"
                      className="absolute bottom-0 right-0 size-11 rotate-180"
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
              <div
                className={`${
                  textColor ? "*:" + textColor : "*:text-primary-main"
                } border-b-2 border-primary-main px-2 py-4 *:text-center *:italic`}
              >
                <h3 className="mb-1 text-2xl">{item.full_name}</h3>
                <h4 className="text-xs">{item.position}</h4>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex w-full justify-center">
        <div className="absolute mt-10 sm:mt-14 h-12 w-28 pt-14">
          <CarouselPrevious className="left-0 cursor-pointer size-12 rounded border-2 border-black bg-white text-black opacity-100 hover:bg-white  disabled:opacity-100" />
          <CarouselNext className="right-0 cursor-pointer size-12 rounded border-2 border-black bg-white text-black opacity-100 hover:bg-white  disabled:opacity-100" />
        </div>
      </div>
    </Carousel>
  );
}
