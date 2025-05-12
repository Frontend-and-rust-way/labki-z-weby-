import { INavigationLinksProps } from "../types/interfaces";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Aclonica } from "next/font/google";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase";

export const aclonica = Aclonica({
  subsets: ["latin"],
  weight: "400",
});

export function NavigationLinks({ items, className }: INavigationLinksProps) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  function getLink(itemLink: string) {
    // Якщо лінк веде на /catalog і користувач НЕ автентифікований — блокуємо
    if (!user && itemLink === "/catalog") {
      return "#";
    }
    return itemLink;
  }

  return (
    <nav className={cn("flex text-xl lg:text-2xl items-center gap-6", aclonica.className, className)}>
      {items.map((item) => (
        <Link
          key={item.heading}
          href={getLink(item.link)}
          className="hover:text-blue-600 transition-colors"
        >
          {item.heading}
        </Link>
      ))}
    </nav>
  );
}
