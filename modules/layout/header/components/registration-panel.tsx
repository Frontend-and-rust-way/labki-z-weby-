import { cn } from "@/lib/utils";
import { IRegistrationPanelProps } from "../types/interfaces";
import { aclonica } from "./navigation-links";
import { Busket } from "@/modules/layout/catalog-page/basket/basket";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function RegistrationPanel({className}: IRegistrationPanelProps) {
  const pathname = usePathname();
  const isCatalog = pathname.includes("catalog");

  const baseClass = isCatalog
    ? "flex sm:basis-[380px] items-center justify-between gap-5"
    : "flex justify-end";

  return (
    <div className={cn(baseClass, className, aclonica.className)}>
        <Link href="/my-account">My account</Link>
      {isCatalog && <Busket className="w-full max-w-[200px] max-h-[60px]" />}
    </div>
  );
}