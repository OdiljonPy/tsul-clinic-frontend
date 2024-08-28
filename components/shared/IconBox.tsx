"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React from "react";

interface propTypes {
  iconName: React.ReactNode;
  headline: string;
  content: string;
  type: string | undefined;
}

const IconBox = ({ iconName, headline, content, type }: propTypes) => {
  useGSAP(() => {
    gsap.to(".box", {
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      y: 0,
    });
  });

  return (
    <div
      // eslint-disable-next-line
      className={`sm:basis-full lg:basis-1/3 ${type} box translate-y-10 px-10 pb-8 pt-10 opacity-0`}
    >
      {iconName}
      <h3 className="mb-3 mt-5 text-2xl font-bold text-black">{headline}</h3>
      <p className="text-base">{content}</p>
    </div>
  );
};

export default IconBox;
