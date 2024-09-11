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
      className="w-9 h-9 rounded-full bg-primary-main flex justify-center items-center hover:bg-primary-main"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
