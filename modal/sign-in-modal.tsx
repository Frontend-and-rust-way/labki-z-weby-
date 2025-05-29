"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useAccountStore } from "@/modules/layout/my-account-page/my-account-section/store/use-account-store";
import { X } from "lucide-react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/firebase";

export function SignInModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setLoginAttempts(0);
    } catch (error) {
      console.error("Помилка під час входу:", error);
      setLoginAttempts((prev) => prev + 1);
      if (loginAttempts >= 1) setShowResetPassword(true);
      alert("Невірний email або пароль");
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resetEmail) {
      alert("Будь ласка, введіть email.");
      return;
    }

    auth.languageCode = 'uk';
    setLoading(true);

    try {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(resetEmail)) {
        alert("Будь ласка, введіть правильний email.");
        setLoading(false);
        return;
      }

      await sendPasswordResetEmail(auth, resetEmail);
      setResetEmailSent(true);
      console.log("📩 Лист для скидання пароля надіслано на:", resetEmail);

      setTimeout(() => {
        setShowResetPassword(false);
        setResetEmail("");
        setResetEmailSent(false);
      }, 8000);
    } catch (error: any) {
      console.error("❌ Помилка при надсиланні листа:", error);
      alert("Не вдалося надіслати лист. Причина: " + error.message);
    }

    setLoading(false);
  };

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative bg-white text-black shadow-xl rounded-3xl w-full max-w-md p-8 flex flex-col gap-6 animate-fade-in">
        <button
          type="button"
          onClick={closeEnterModal}
          className="absolute top-5 right-5 text-gray-400 hover:text-red-500 transition"
          aria-label="Close"
        >
          <X size={28} />
        </button>

        <h1 className="text-3xl font-bold text-center text-gray-900">
          {showResetPassword ? "Скидання паролю" : "Увійти в акаунт"}
        </h1>

        {!showResetPassword ? (
          <form onSubmit={loginUser} className="flex flex-col gap-4">
            <p className="text-sm text-center text-gray-500 mb-2">
              Введіть пошту і пароль для входу
            </p>
            <input
              type="email"
              placeholder="пошта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="password"
              placeholder="пароль"
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
        ) : (
          <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
            <p className="text-sm text-center text-gray-600">
              Введіть email, і ми надішлемо лист для скидання пароля
            </p>
            <input
              type="email"
              placeholder="Ваша пошта"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 rounded-lg transition disabled:opacity-50"
            >
              {loading ? "Надсилаємо..." : "Надіслати лист"}
            </button>
            {resetEmailSent && (
              <p className="text-green-600 text-sm text-center">
                📩 Лист успішно надіслано!
              </p>
            )}
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}