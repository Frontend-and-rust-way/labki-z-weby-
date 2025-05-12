import { cn } from "@/lib/utils";
import { IRegistrationPanelProps } from "../types/interfaces";
import { aclonica } from "./navigation-links";
import { Busket } from "@/modules/layout/catalog-page/basket/basket";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useAccountStore from "../../my-account-page/my-account-section/store/use-account-store";
import { RegisterModal } from "@/modal/register-modal";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/app/firebase";
import { SignInModal } from "@/modal/sign-in-modal";

export function RegistrationPanel({ className }: IRegistrationPanelProps) {
  const openRegistationModal = useAccountStore(state => state.openRegistrationModal);
  const pathname = usePathname();
  const isCatalog = pathname.includes("catalog");
  const [user, setUser] = useState<any>(null);
  const openEnterModal = useAccountStore(state => state.openEnterModal);
  
  const baseClass = isCatalog
    ? "flex sm:basis-[380px] items-center justify-between gap-5"
    : "flex justify-end";

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) 
        setUser(user); 
      else 
        setUser(null); 
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={cn(baseClass, className, aclonica.className)}>

      <span onClick={openRegistationModal}>Sign Up</span>
      <span className="mx-[20px]" onClick={openEnterModal}>Sign in</span>

      {!user ? (
        <span onClick={openRegistationModal}>Please register to enter or log in </span>
      ) : (
        <Link href="/my-account">My account</Link> 
      )}
      <RegisterModal />
      <SignInModal/>
      {isCatalog && <Busket className="w-full max-w-[200px] max-h-[60px]" />}
    </div>
  );
}
