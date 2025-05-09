import { cn } from "@/lib/utils";
import { IRegistrationPanelProps } from "../types/interfaces";
import { aclonica } from "./navigation-links";
import { Busket } from "@/modules/layout/catalog-page/basket/basket";
import { usePathname } from "next/navigation";
import Link from "next/link";
import useAccountStore from "../../my-account-page/my-account-section/store/use-account-store";
import { RegisterModal } from "@/modal/register-modal";

export function RegistrationPanel({className}: IRegistrationPanelProps) {
  const  openRegistationModal = useAccountStore(state => state.openRegistrationModal);
  const pathname = usePathname();
  const isCatalog = pathname.includes("catalog");
  const isLinkAccount = useAccountStore((state) => state.isLinkAccount);
  const baseClass = isCatalog
    ? "flex sm:basis-[380px] items-center justify-between gap-5"
    : "flex justify-end";

  return (
    <div className={cn(baseClass, className, aclonica.className)}>
        {!isLinkAccount  && <span onClick={openRegistationModal}>My account</span>}
        {isLinkAccount &&  <Link  href="/my-account">My account</Link>}
        <RegisterModal/>
      {isCatalog && <Busket className="w-full max-w-[200px] max-h-[60px]" />}
    </div>
  );
}