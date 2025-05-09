"use client"
import { createPortal } from "react-dom";
import { useAccountStore } from "@/modules/layout/my-account-page/my-account-section/store/use-account-store";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";

export function SupportModal() {
  const isSupportModalOpen = useAccountStore((state) => state.isSupportModalOpen);
  const closeSupportModal = useAccountStore((state) => state.closeSupportModal);
  const {t} = useTranslation();
  
  if (!isSupportModalOpen) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <form
        className="relative bg-white text-black shadow-2xl rounded-2xl w-full max-w-lg p-6 flex flex-col gap-5 animate-fade-in"
      > 
        <button
          type="button"
          onClick={closeSupportModal}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>


        <h1 className="text-2xl font-semibold text-center text-gray-800">
          ({t("accountPage.enterMessage")})
        </h1>

        <textarea
          className="resize-none w-full h-40 p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder={t("accountPage.enterMessage")}
          name="support-message"
          id="support-modal"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
          onClick={() => alert("hello world mydear frined what do you need")}
        >
          {t("accountPage.sendMessage")}
        </button>
      </form>
    </div>,
    document.body
  );
}
