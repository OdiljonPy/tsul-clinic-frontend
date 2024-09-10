import Link from "next/link";
import { ChevronRight } from "lucide-react";
import React, { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import Spinner from "@/components/shared/Spinner";

export type TypeButton = "primary" | "secondary" | "dark";

interface buttonCustomProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  href?: string;
  loading?: boolean;
  buttonType?: TypeButton;
}

const ButtonCustom = ({
  text,
  href,
  buttonType = "primary",
  className,
  loading,
  ...props
}: buttonCustomProps) => {
  const buttonStyle: Record<TypeButton, string> = {
    primary: "primary-button",
    secondary: "primary-button-dark",
    dark: "secondary-button",
  };

  return (
    <>
      {href ? (
        <Link
          className={cn(
            className,
            `group rounded-lg ${buttonStyle[buttonType]}`,
          )}
          href={href}
        >
          {text}
          <ChevronRight
            size="15"
            className="absolute  right-1/3 top-1/2 -translate-y-1/2 opacity-0 group-hover:right-5 group-hover:opacity-100"
          />
        </Link>
      ) : (
        <button
          {...props}
          className={cn(
            className,
            `group flex items-center gap-2 ${buttonStyle[buttonType]}`,
          )}
        >
          {loading && <Spinner />}
          {text}
          <ChevronRight
            size="15"
            className="absolute rounded-lg right-1/3 top-1/2 -translate-y-1/2 opacity-0 group-hover:right-5 group-hover:opacity-100"
          />
        </button>
      )}
    </>
  );

  // switch (buttonType) {
  //   case "dark":
  //     return buttonType3;
  //
  //   case "secondary":
  //     return buttonType2;
  //
  //   default:
  //     return buttonType1;
  // }
};

export default ButtonCustom;
