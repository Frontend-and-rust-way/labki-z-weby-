import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { IBurgerProps } from "../types/interfaces";
import {useToggleStore} from "../store/use-toggle-store";

export function Burger({ size = 40, className,...props }: IBurgerProps) {
  const openModal = useToggleStore((state) => state.openModal);

  return (
    <Menu
      onClick={openModal}
      size={size}
      className={cn("text-black cursor-pointer hover:text-gray-600 transition-colors", className)}
      {...props}
    />
  );
}
