"use client";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useAccountStore } from "@/modules/layout/my-account-page/my-account-section/store/use-account-store";
import { X } from "lucide-react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/app/firebase";

export function RegisterModal() {
  const [nameUser, setNameUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isRegistrationModalOpen = useAccountStore((state) => state.isRegistrationModalOpen);
  const closeRegistrationModal = useAccountStore((state) => state.closeRegistrationModal);
  const setLinkAccountTrue = useAccountStore((state) => state.setLinkAccountTrue);

  if (!isRegistrationModalOpen) return null;

  const registerUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: nameUser });

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: nameUser,
        email: user.email,
        phone: phone,
        createdAt: new Date().toISOString(),
      });

      closeRegistrationModal();
      setLinkAccountTrue();
    } catch (error) {
      console.error("Помилка під час реєстрації:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        phone: user.phoneNumber || "",
        createdAt: new Date().toISOString(),
      });

      closeRegistrationModal();
      setLinkAccountTrue();
    } catch (error) {
      console.error("Помилка входу через Google:", error);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <form
        onSubmit={registerUser}
        className="relative bg-white text-black shadow-2xl rounded-2xl w-full max-w-md p-8 flex flex-col gap-6 animate-fade-in"
      >
        <button
          type="button"
          onClick={closeRegistrationModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
          aria-label="Close"
        >
          <X size={26} />
        </button>

        <h1 className="text-3xl font-bold text-center text-gray-900">Створити акаунт</h1>
        <p className="text-sm text-center text-gray-500 -mt-3">
          Заповніть форму або скористайтесь Google
        </p>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-3 w-full bg-white border border-gray-300 hover:bg-gray-100 text-black font-semibold py-3 rounded-xl transition"
        >
          <Image src="/pngimg.com - google_PNG19635.png" width={22} height={22} alt="Google Logo" />
          Продовжити з Google
        </button>

        <div className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Ім'я та прізвище"
            value={nameUser}
            onChange={(e) => setNameUser(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <input
            type="tel"
            placeholder="Номер телефону"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <input
            type="email"
            placeholder="Електронна пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Зареєструватися
        </button>
      </form>
    </div>,
    document.body
  );
}
