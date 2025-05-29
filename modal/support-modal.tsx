"use client";

import { createPortal } from "react-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAccountStore } from "@/modules/layout/my-account-page/my-account-section/store/use-account-store";
import { X } from "lucide-react";

export function SupportModal() {
  const formRef = useRef<HTMLFormElement>(null);
  const isSupportModalOpen = useAccountStore((state) => state.isSupportModalOpen);
  const closeSupportModal = useAccountStore((state) => state.closeSupportModal);

  if (!isSupportModalOpen) return null;

  const sendSupportMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;
    
    emailjs
      .sendForm(
        "service_d3b8yxq",
        "template_2c4n1jn",     
         formRef.current,
        "0gcZeeowEFfX0bsz5"     
      )
      .then(
        () => {
          alert("Повідомлення успішно надіслано!");
          formRef.current?.reset();
          closeSupportModal();
        },
        (error) => {
          console.error("Помилка надсилання:", error);
          alert("Не вдалося надіслати повідомлення. Спробуйте пізніше.");
        }
      );
  };

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <form
        ref={formRef}
        onSubmit={sendSupportMessage}
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
                      введіть повідомлення 
        </h1>

        <textarea
          name="message"
          className="resize-none w-full h-40 p-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          placeholder="введіть будь ласка повідомлення"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
        >
            надіслати повідомлення
        </button>
      </form>
    </div>,
    document.body
  );
}
