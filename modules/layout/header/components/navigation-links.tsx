import { INavigationLinksProps } from "../types/interfaces";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Aclonica } from "next/font/google";

export const aclonica = Aclonica({
  subsets: ["latin"],
  weight: "400",
});

export function NavigationLinks({ items, className }: INavigationLinksProps) {
  return (
    <nav className={cn("flex text-xl lg:text-2xl items-center gap-6", aclonica.className, className)}>
      {items.map((item) => (
        <Link key={item.heading} href={item.link} className="hover:text-blue-600 transition-colors">
          {item.heading}
        </Link>
      ))}
    </nav>
  );
}
