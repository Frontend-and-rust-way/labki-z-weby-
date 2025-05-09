"use client";
import { useBasketStore2 } from "../../catalog-page/basket/store/store/use-basket-store-2";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import emailjs from 'emailjs-com';
import useAccountStore from "./store/use-account-store";
import { useTranslation } from "react-i18next";

import {
  FiUser,
  FiShoppingBag,
  FiSettings,
  FiHelpCircle,
  FiEdit2,
  FiChevronRight,
} from "react-icons/fi";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

export default function MyAccount() {
  const openSupportModal = useAccountStore(state => state.openSupportModal);
  console.log(emailjs);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const orderingData = useBasketStore2(state => state.ordering);
  const getOrderingFromLocalStorage = useBasketStore2(state => state.getOrderingFromLocalStorage);
  const {t} = useTranslation();

// !! Іван Іванов
  useEffect(() => {
    getOrderingFromLocalStorage();
  },[getOrderingFromLocalStorage]) 


  const sections: Section[] = [
    {
      id: "personal",
      title: "Особисті дані",
      icon: <FiUser className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
              II
            </div>
            <div>
              <h3 className="text-xl font-semibold">Іван Іванов</h3>
              <p className="text-gray-black">ivan@example.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-black">{t("accountPage.phone")}</p>
              <p className="font-medium">+380991234567</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-black">{t("accountPage.address")}</p>
              <p className="font-medium">{t("accoutPage.addressCity")}</p>
            </div>
          </div>
          <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
            <FiEdit2 />
            <span>{t("accountPage.edit")}</span>
          </button>
        </div>
      ),
    },
    {
      id: "orders",
      title: "Історія замовлень",
      icon: <FiShoppingBag className="w-6 h-6" />,
      content: (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 text-left text-black">{t("acccountPage.orderNumber")}</th>
                <th className="py-3 px-4 text-left text-black">{t("acccountPage.date")}</th>
                <th className="py-3 px-4 text-left text-black">{t("acccountPage.status")}</th>
                <th className="py-3 px-4 text-left text-black">{t("acccountPage.total")}</th>
              </tr>
            </thead>
            <tbody>
              {orderingData.map((ordering, index) => ( 
              <tr key={`${ordering}-${index}`}  className="border-b hover:bg-gray-50 text-black transition-colors">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">2025-05-01</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {t("accountPage.delivered")}
                  </span>
                </td>
                <td className="py-3 px-4 font-medium">{ordering}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      ),
    },
    {
      id: "settings",
      title: "Налаштування",
      icon: <FiSettings className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <label className="block text-sm text-black mb-2">{t("accountPage.language")}</label>
            <select className="w-full p-2 border rounded-lg bg-white">
              <option>{t("accountPage.ukranian")}</option>
              <option>{t("accountPage.english")}</option>
            </select>
          </div>
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
           className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity"
           onClick={openSupportModal}
           >
          {t("accountPage.contactSupport")}
          </button>
        </div>
      ),
    },
  ];

  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center text-black mb-8"
        >
          {t("accountPage.myAccount")}
        </motion.h1>

        <div className="grid gap-6">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() =>
                  setActiveSection(activeSection === section.id ? null : section.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-blue-500">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-black">{section.title}</h2>
                </div>
                <FiChevronRight
                  className={`w-5 h-5 text-black transition-transform ${
                    activeSection === section.id ? "rotate-90" : ""
                  }`}
                />
              </button>

              {activeSection === section.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 py-4 border-t"
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
