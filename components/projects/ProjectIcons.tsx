"use client";

import {
  Facebook,
  Globe,
  Instagram,
  Linkedin, Music2,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import { IProjects } from "@/types/projects/projects";
import { cn } from "@/lib/utils";

interface props {
  className?: string;
  project: IProjects;
}

const ProjectIcons = ({ project, className }: props) => {
  return (
    <div className={cn(className, "flex items-center gap-3")}>
      {project?.website_url && (
        <a href={project.website_url} className="cursor-pointer group">
          <Globe className="transition duration-300 text-[#1DA1F2]/80 group-hover:text-[#1DA1F2]" />
        </a>
      )}
      {project?.instagram_url && (
        <a href={project.instagram_url} className="cursor-pointer group">
          <Instagram className="transition duration-300 text-[#E1306C]/80 group-hover:text-[#E1306C]" />
        </a>
      )}
      {project?.twitter_url && (
        <a href={project.twitter_url} className="cursor-pointer group">
          {/*<Twitter*/}
          {/*  size={26}*/}
          {/*  className="transition duration-300 text-[#1DA1F2]/80 group-hover:text-[#1DA1F2]"*/}
          {/*/>*/}
          <Music2 size={24} className="transition duration-300 text-[#000]/80 group-hover:text-[#000]" />
        </a>
      )}
      {project?.youtube_url && (
        <a href={project.youtube_url} className="cursor-pointer group">
          <Youtube
            size={26}
            className="transition duration-300 text-[#FF0000]/80 group-hover:text-[#FF0000]"
          />
        </a>
      )}
      {project?.telegram_url && (
        <a href={project.telegram_url} className="cursor-pointer group">
          <Send className="transition duration-300 text-[#1DA1F2]/80 group-hover:text-[#1DA1F2]" />
        </a>
      )}
      {project?.linkedin_url && (
        <a href={project.linkedin_url} className="cursor-pointer group">
          <Facebook size={24} className="transition duration-300 text-[#4267B2]/80 group-hover:text-[#4267B2]" />
        </a>
      )}
    </div>
  );
};

export default ProjectIcons;
