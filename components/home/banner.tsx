"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ButtonCustom from "../global/button";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useBannerStore from "@/store/home/banner";
import Loading from "@/app/(root)/loading";
import { getTranslation } from "@/i18n";
import { Youtube } from "lucide-react";
import VideoModal from "@/components/home/VideoModal";

const Banner = () => {
  const { t } = getTranslation();
  const { bannerItems, loading, error, fetchBannerItems } = useBannerStore();

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const [openVideo, setOpenVideo] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("scroll", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  useEffect(() => {
    fetchBannerItems();
  }, []);

  if (loading) return <Loading />;
  if (error) throw new Error();

  return (
    <>
      {bannerItems.length ? (
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
            {bannerItems.map((item, index) => (
              <CarouselItem
                key={item.id}
                className={`relative overflow-hidden pl-0 text-white before:absolute before:z-10 before:size-full before:bg-black/15 before:content-[''] ${
                  current === index + 1 ? "active" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt="homepage banner image"
                  fill
                  objectFit="cover"
                  className="object-cover w-full h-full"
                />
                <div
                  className={`relative top-0 z-10 w-full py-[80px] md:py-[150px] lg:py-[300px]`}
                >
                  <div className="container">
                    <div className="carousel-caption">
                      <h2
                        className={`mb-2 sm:mb-3 max-w-full text-3xl font-bold uppercase leading-tight transition delay-500 duration-1000 sm:w-full sm:text-4xl md:text-5xl lg:w-2/3 lg:text-6xl ${
                          current === index + 1
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        {item.text}
                      </h2>
                      <div
                        onClick={() => setOpenVideo(true)}
                        className={`transition delay-500 duration-1000 inline-flex items-center gap-3 text-lg mb-3 sm:mb-4 cursor-pointer group ${
                          current === index + 1
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        <Youtube className="transition duration-300 group-hover:text-primary-main" />
                        <span className="transition duration-300 group-hover:text-primary-main">
                          {t("video_manual")}
                        </span>
                      </div>
                      <div
                        className={`transition delay-700 duration-1000 ${
                          current === index + 1
                            ? "translate-y-0 opacity-100"
                            : "translate-y-10 opacity-0"
                        }`}
                      >
                        <ButtonCustom href="/services" text={t("more_info")} />
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <div className="min-h-screen"></div>
      )}
      <VideoModal open={openVideo} setOpen={setOpenVideo} />
    </>
  );
};

export default Banner;
