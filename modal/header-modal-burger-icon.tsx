"use client";
import { headerModalDataEn } from "@/constant/constant-header-modal-";
import { createPortal } from "react-dom";
import { useToggleStore } from "@/modules/layout/header/store/use-toggle-store";
import { X } from "lucide-react";
import { Button } from "@/ui/button";
import Link from "next/link";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
// import {openRegistationModal} from ""
import useAccountStore from "@/modules/layout/my-account-page/my-account-section/store/use-account-store";


export function HeaderModal() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const closeModal = useToggleStore((state) => state.closeModal);
  const isModalActive = useToggleStore((state) => state.modal);
  const auth = getAuth();
  const openRegistationModal = useAccountStore((state)=>state.openRegistrationModal);
  const openEnterModal = useAccountStore(state=>state.openRegistrationModal);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserLoggedIn(!!user); // true якщо user існує
    });

    return () => unsubscribe(); // відписка при розмонтуванні
  }, [auth]);

  if (!isModalActive) return null;

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

      {!isUserLoggedIn && (
        <>
          <span className="text-2xl mt-[20px] font-semibold px-[20px] py-[10px] hover:text-white rounded-[20px] hover:bg-blue-600 transition-colors cursor-pointer" onClick={openEnterModal}>Sign In</span>
          <span className="text-2xl mt-[20px] font-semibold px-[20px] py-[10px] hover:text-white rounded-[20px]  hover:bg-blue-600 transition-colors cursor-pointer" onClick={openRegistationModal}>Sign Up</span>
        </>
      )}
    </div>,
    document.body
  );
}
