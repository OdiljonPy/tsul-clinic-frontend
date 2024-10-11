import { ReactNode } from "react";

interface props {
  url?: string;
  children: ReactNode;
}
const SocialIcon = ({ children, url }: props) => {
  return (
    <a
      href={url}
      target="_blank"
      className="w-10 h-10 group rounded-full bg-white transition-all duration-300 flex justify-center items-center hover:bg-primary-main"
    >
      <span className="text-black group-hover:text-white transition-all duration-300 group-hover:rotate-[720deg]">
        {children}
      </span>
    </a>
  );
};

export default SocialIcon;
