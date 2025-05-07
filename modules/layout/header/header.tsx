"use client"
import { cn } from "@/lib/utils";
import { roboto } from "@/fonts/fonts";
import { IHeaderProps } from "./types/interfaces";
import { NavigationLinks } from "./components/navigation-links";
import { RegistrationPanel } from "./components/registration-panel";
import { useMediaQuery } from "react-responsive";


export function Header({ className, children }: IHeaderProps) {
  const isMobile = useMediaQuery({ maxWidth: 640 });


  return (
    <header
      className={cn(
        roboto.className,
        "text-base lg:text-xl flex items-center w-full h-[90px] bg-white text-black px-4 sm:px-8",
        className,
        isMobile ? "justify-end" : "justify-between"
      )}
    >
      {children}
    </header>
  );  
}

export const HeaderStructure = Object.assign(Header, {
  NavigationLinks,
  RegistrationPanel,
});