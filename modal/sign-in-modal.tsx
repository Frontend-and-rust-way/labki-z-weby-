"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useAccountStore } from "@/modules/layout/my-account-page/my-account-section/store/use-account-store";
import { X } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";


export function SignInModal() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isEnterModalOpen = useAccountStore((state) => state.isEnterModalOpen);
  const closeEnterModal = useAccountStore((state) => state.closeEnterModal);
  const setEnterInAccount = useAccountStore((state) => state.setEnterInAccount);

  if (!isEnterModalOpen) return null;

  const loginUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEnterInAccount(); 
      closeEnterModal();   
    } catch (error) {
      console.error("Помилка під час входу:", error);
      alert("Невірний email або пароль");
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <form
        onSubmit={loginUser}
        className="relative bg-white text-black shadow-xl rounded-3xl w-full max-w-md p-8 flex flex-col gap-6 animate-fade-in"
      >
        <button
          type="button"
          onClick={closeEnterModal}
          className="absolute top-5 right-5 text-gray-400 hover:text-red-500 transition"
          aria-label="Close"
        >
          <X size={28} />
        </button>

        <h1 className="text-3xl font-bold text-center text-gray-900">
          Увійти в акаунт
        </h1>
        <p className="text-sm text-center text-gray-500 mb-2">
          Введіть email і пароль для входу
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <button
          type="submit"
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
        >
          Увійти в акаунт
        </button>
      </form>
    </div>,
    document.body
  );
}
