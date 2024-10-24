"use client";

import { useEffect } from "react";

const JivoChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.jivosite.com/widget/J1shxFqHcJ";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default JivoChat;
