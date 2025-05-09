"use client";

import { createPortal } from "react-dom";
import { useAccountStore } from "@/modules/layout/my-account-page/my-account-section/store/use-account-store";
import { X } from "lucide-react";

export function RegisterModal() {
  const isRegistrationModalOpen = useAccountStore((state) => state.isRegistrationModalOpen);
  const closeRegistrationModal = useAccountStore((state) => state.closeRegistrationModal);
  const setLinkAccountTrue   = useAccountStore((state) => state.setLinkAccountTrue);
  if (!isRegistrationModalOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <form
        className="relative bg-white text-black shadow-xl rounded-3xl w-full max-w-md p-8 flex flex-col gap-6 animate-fade-in"
      >
        <button
          type="button"
          onClick={closeRegistrationModal}
          className="absolute top-5 right-5 text-gray-400 hover:text-red-500 transition"
          aria-label="Close"
        >
          <X size={28} />
        </button>

        <h1 className="text-3xl font-bold text-center text-gray-900">
          Створити акаунт
        </h1>
        <p className="text-sm text-center text-gray-500 mb-2">
          Заповніть форму для реєстрації
        </p>

        <input
          type="text"
          placeholder="Ваше повне ім’я"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="password"
          placeholder="Пароль"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="phone"
          placeholder="Пароль"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          type="submit"
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
          onClick={ () => {  closeRegistrationModal(); setLinkAccountTrue()  }}
        >
          Зареєструватися
        </button>
      </form>
    </div>,
    document.body
  );
}
