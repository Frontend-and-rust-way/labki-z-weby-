import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IRegistrationPanelProps } from "../types/interfaces";
import { aclonica } from "./navigation-links";
import { Busket } from "@/modules/layout/catalog-page/basket/basket";
import { auth } from "@/app/firebase";
import useAccountStore from "../../my-account-page/my-account-section/store/use-account-store";

export const RegistrationPanel: React.FC<IRegistrationPanelProps> = ({ className }) => {
  const pathname = usePathname();
  const isCatalog = pathname.includes("catalog");
  const openRegistrationModal = useAccountStore(state => state.openRegistrationModal);
  const openEnterModal = useAccountStore(state => state.openEnterModal);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  const textClass = "cursor-pointer text-center whitespace-nowrap";

  return (
    <div className={cn(
      isCatalog ? "flex items-center justify-between gap-[20px] lg:gap-[30px]" : "flex gap-[20px] justify-end",
      className,
      aclonica.className
    )}>
      <span className={cn("md:text-[15px] lg:text-[17px]", textClass)} onClick={openRegistrationModal}>
        Sign Up
      </span>
      <span className={cn("md:text-[15px] lg:text-[17px]", textClass)} onClick={openEnterModal}>
        Sign In
      </span>

      {!user ? (
        <span className={cn("text-[10px] md:text-[15px] lg:text-[20px]", textClass)} onClick={openRegistrationModal}>
          Unregistered
        </span>
      ) : (
        <Link href="/my-account" className="whitespace-nowrap">
          My account
        </Link>
      )}  
      {isCatalog && <Busket className="w-full max-w-[200px] max-h-[60px]" />}
    </div>
  );
};
