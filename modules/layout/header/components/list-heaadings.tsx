import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { useToggleStore } from "../store/use-toggle-store";
import { IHeadingListProps } from "../types/interfaces";

export function HeadingList({ className, size = 40 }: IHeadingListProps) {
  const modal = useToggleStore((state) => state.modal);
  const closeModal = useToggleStore((state) => state.closeModal);

  if (!modal) return null;

  return createPortal(
    <div className={cn("fixed inset-0 bg-black/40 flex justify-center items-center z-50", className)}>
      <X
        onClick={closeModal}
        className="absolute top-4 right-4 text-white cursor-pointer hover:text-gray-300 transition-colors"
        size={size}
      />
    </div>,
    document.body
  );
}