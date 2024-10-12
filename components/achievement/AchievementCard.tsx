import { IAchievement } from "@/types/achievement/achievement";
import { Layers } from "lucide-react";

import { SlideshowLightbox } from "lightbox.js-react";
import "lightbox.js-react/dist/index.css";
import { useState } from "react";

interface props {
  achievement: IAchievement;
}

const AchievementCard = ({ achievement }: props) => {
  const [onOpen, setOnOpen] = useState(false);
  return (
    <div
      className="rounded overflow-hidden shadow-lg flex flex-col group"
      onClick={() => setOnOpen(true)}
    >
      <div className="relative overflow-hidden">
        <div className="cursor-pointer">
          <img
            className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-[1.1]"
            src={achievement?.images[0]?.image}
            alt="Sunset in the mountains"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-30"></div>
        </div>
        <div className="cursor-pointer">
          <div className="absolute top-0 right-0 bg-background px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-background transition duration-500 ease-in-out flex items-center gap-2">
            <Layers /> {achievement?.images.length} photos
          </div>
        </div>
      </div>
      <div className="px-4 py-4 mb-auto">
        <p className="font-medium text-base  transition duration-500 ease-in-out inline-block  line-clamp-2">
          {achievement.short_description}
        </p>
      </div>

      <SlideshowLightbox
        open={onOpen}
        className="hidden"
        backgroundColor="rgba(0,0,0,0.8)"
        iconColor="#fff"
        onClose={() => setOnOpen(false)}
      >
        {achievement?.images?.map((image) => (
          <img
            key={image.id}
            className="w-full rounded object-cover "
            src={image.image}
            alt="Additional images"
          />
        ))}
      </SlideshowLightbox>
    </div>
  );
};

export default AchievementCard;
