"use client";

import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Send,
  Youtube,
} from "lucide-react";

interface props {
  className?: string;
}

const ProjectIcons = () => {
  return (
    <div className="flex items-center gap-3">
      <a href="#" className="cursor-pointer group">
        <Globe className="transition duration-300 text-[#1DA1F2]/80 group-hover:text-[#1DA1F2]" />
      </a>
      <a href="#" className="cursor-pointer group">
        <Instagram className="transition duration-300 text-[#E1306C]/80 group-hover:text-[#E1306C]" />
      </a>
      <a href="#" className="cursor-pointer group">
        <Facebook className="transition duration-300 text-[#4267B2]/80 group-hover:text-[#4267B2]" />
      </a>
      <a href="#" className="cursor-pointer group">
        <Youtube
          size={26}
          className="transition duration-300 text-[#FF0000]/80 group-hover:text-[#FF0000]"
        />
      </a>
      <a href="#" className="cursor-pointer group">
        <Send className="transition duration-300 text-[#1DA1F2]/80 group-hover:text-[#1DA1F2]" />
      </a>
      <a href="#" className="cursor-pointer group">
        <Linkedin
          size={24}
          className="transition duration-300 text-[#0a66c2]/80 group-hover:text-[#0a66c2]"
        />
      </a>
    </div>
  );
};

export default ProjectIcons;
