import { headerModalDataEn } from "@/constant/constant-header-modal-"
import { createPortal } from "react-dom"
import { useToggleStore } from "@/modules/layout/header/store/use-toggle-store"
import { X } from "lucide-react" // Не забудь встановити "lucide-react"
import { Button } from "@/ui/button"
import Link from "next/link"
export function HeaderModal() {
  const closeModal = useToggleStore( (state) => state.closeModal)
  const isModalActive = useToggleStore( (state) => state.modal)
  
  if (!isModalActive) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white text-gray-800 p-6">

      <Button
        onClick={closeModal}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition"
        aria-label="Закрити"
      >
        <X className="w-6 h-6" />
      </Button>


      <div className="flex flex-col items-center gap-6">
        {headerModalDataEn.map((value) => (
          <Link 
            href={value.link}
            key={value.link}
            className="text-2xl font-semibold hover:text-blue-600 transition-colors cursor-pointer"
          >
            {value.title}
          </Link>
        ))}
      </div>
    </div>,
    document.body
  )
}
