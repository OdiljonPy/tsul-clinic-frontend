"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useOpinionStore from "@/store/home/opinion";
import { useEffect, useState } from "react";
import Loading from "@/app/(root)/loading";
import Autoplay from "embla-carousel-autoplay";

export function TestimonialsCarousel() {
  const { opinion, fetchOpinion, loading } = useOpinionStore();

  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    if (opinion.length === 0) fetchOpinion();
  }, [opinion]);

  if (loading) return <Loading />;
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[Autoplay({ playOnInit: !isPlay, delay: 3000 })]}
    >
      <CarouselContent>
        {opinion?.map((item) => (
          <CarouselItem key={`testimonial${item.id}`}>
            <div className="m-auto *:text-white sm:w-full sm:px-[90px] lg:w-[850px] lg:px-0">
              {item.video ? (
                <div className="aspect-[9/16] h-[400px] sm:h-[500px] w-[250px] sm:w-[300px] mx-auto overflow-hidden rounded-xl ">
                  <video
                    width={1080}
                    height={1920}
                    controls
                    className="h-full w-full object-cover"
                    onPlay={() => setIsPlay(true)}
                    onPause={() => setIsPlay(false)}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                </div>
              ) : (
                ""
              )}
              <p className="mb-[18px] mt-4 text-left  text-base italic">
                {item.opinion}
              </p>
              <h4 className="text-center text-base">{item.full_name}</h4>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        disabled={isPlay}
        className="left-auto right-[60px] top-[112%] size-12 rounded-none border-2 border-white bg-transparent text-white opacity-100 disabled:opacity-50 !disabled:cursor-not-allowed sm:left-0 sm:right-auto sm:top-1/2"
      />
      <CarouselNext
        disabled={isPlay}
        className="right-0 top-[112%] size-12 rounded-none border-2 border-white bg-transparent text-white opacity-100 disabled:opacity-50 sm:top-1/2 disabled:cursor-not-allowed"
      />
    </Carousel>
  );
}
