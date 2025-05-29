"use client";

import { useBasketStore2 } from "../../catalog-page/basket/store/store/use-basket-store-2";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useAccountStore from "./store/use-account-store";
import AuthStatus from "@/firebase/auth-status";
import LogoutButton from "@/firebase/logout-form";
import { getAuth } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/app/firebase";

import {
  FiUser,
  FiShoppingBag,
  FiHelpCircle,
  FiChevronRight,
} from "react-icons/fi";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

async function fetchUserOrders() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) return [];

  try {
    const res = await fetch(`http://localhost:4000/my-account?userId=${user.uid}`);
    if (!res.ok) throw new Error("Помилка при запиті до сервера");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Помилка при отриманні замовлень:", error);
    return [];
  }
}

export default function MyAccount() {
  const openSupportModal = useAccountStore((state) => state.openSupportModal);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [userOrders, setUserOrders] = useState<any[]>([]);
  const [userData, setUserData] = useState<{ name?: string; phone?: string; email?: string } | null>(null);
  const getOrderingFromLocalStorage = useBasketStore2((state) => state.getOrderingFromLocalStorage);

  useEffect(() => {
    getOrderingFromLocalStorage();
    fetchUserOrders().then(setUserOrders);

    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      try {
        const docSnap = await getDoc(doc(db, "users", user.uid));
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      } catch (err) {
        console.error("Помилка отримання даних користувача:", err);
      }
    };

    fetchUserData();
  }, []);

  const sections: Section[] = [
    {
      id: "personal",
      title: "Особисті дані",
      icon: <FiUser className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <AuthStatus />
          {userData && (
            <div className="text-gray-800 space-y-2 text-sm">
              <p><span className="font-semibold">Ім’я:</span> {userData.name || "absent"}</p>
              <p><span className="font-semibold">Телефон:</span> {userData.phone || "absent"}</p>
              <p><span className="font-semibold">Email:</span> {userData.email || "absent"}</p>
            </div>
          )}
          <LogoutButton />
        </div>
      ),
    },
    {
      id: "orders",
      title: "Історія замовлень",
      icon: <FiShoppingBag className="w-6 h-6" />,
      content: (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-4 py-2 text-center">Order</th>
                <th className="px-4 py-2 text-center">Date</th>
                <th className="px-4 py-2 text-center">Status</th>
                <th className="px-4 py-2 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {userOrders.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    no orders
                  </td>
                </tr>
              ) : (
                userOrders.map((order, index) => (
                  <tr
                    key={order.id}
                    className="border-b hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-center">{index + 1}</td>
                    <td className="px-4 py-3 text-blue-800 text-sm text-center">
                      {order.createdAt?.toDate?.().toLocaleDateString() || "N/A"}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        delivered
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-center">
                      ${order.books?.reduce((acc: number, book: any) => acc + (book.price * book.countPurchase || 0), 0).toFixed(2)}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: "support",
      title: "Підтримка",
      icon: <FiHelpCircle className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <button
            className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:opacity-90 transition"
            onClick={openSupportModal}
          >
            contact Support
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4 py-10">
      <div className="w-full max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          My account
        </motion.h1>

        <div className="space-y-6">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveSection(activeSection === section.id ? null : section.id)
                }
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-blue-600">{section.icon}</div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {section.title}
                  </h2>
                </div>
                <FiChevronRight
                  className={`w-5 h-5 text-gray-700 transition-transform ${
                    activeSection === section.id ? "rotate-90" : ""
                  }`}
                />
              </button>

              {activeSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 py-5 border-t border-gray-100 bg-gray-50"
                >
                  {section.content}
                </motion.div>
              )}
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
