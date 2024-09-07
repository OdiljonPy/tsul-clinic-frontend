"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { bannerItems } from "@/lib/data";
import ButtonCustom from "../global/button";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const Banner = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("scroll", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="relative ml-0">
        {bannerItems.map((item) => (
          <CarouselItem
            key={item.id}
            className={`relative overflow-hidden pl-0 text-white before:absolute before:z-10 before:size-full before:bg-black/15 before:content-[''] ${
              current === item.id ? "active" : ""
            }`}
          >
            <Image
              src={item.image}
              alt="homepage banner image"
              fill={true}
              className="object-cover w-full h-full"
            />
            <div
              className={`relative top-0 z-10 w-full py-[80px] md:py-[150px] lg:py-[300px]`}
            >
              <div className="container">
                <div className="carousel-caption">
                  <h2
                    className={`mb-5 max-w-full text-3xl font-bold uppercase leading-tight transition delay-500 duration-1000 sm:w-full sm:text-4xl md:text-5xl lg:w-2/3 lg:text-6xl ${
                      current === item.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    {item.content}
                  </h2>
                  <div
                    className={`transition delay-700 duration-1000 ${
                      current === item.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
                    <ButtonCustom href={item.linkHref} text={item.linkText} />
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Banner;
