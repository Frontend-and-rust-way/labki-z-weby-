import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiLock, FiShoppingBag,  FiSettings, FiEdit2, FiLogOut, FiTrash2, FiChevronRight } from "react-icons/fi";

export default function MyAccount() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
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
              <p className="text-gray-600">ivan@example.com</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Телефон</p>
              <p className="font-medium">+380991234567</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Адреса</p>
              <p className="font-medium">м. Київ, вул. Прикладна, 1</p>
            </div>
          </div>
          <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
            <FiEdit2 />
            <span>Редагувати</span>
          </button>
        </div>
      ),
    },
    {
      id: "security",
      title: "Безпека",
      icon: <FiLock className="w-6 h-6" />,
      content: (
        <div className="space-y-4">
          <button className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
            <span>Змінити пароль</span>
            <FiChevronRight />
          </button>
          <button className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between">
            <span>Вийти з усіх сесій</span>
            <FiLogOut />
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
                <th className="py-3 px-4 text-left text-gray-500">№</th>
                <th className="py-3 px-4 text-left text-gray-500">Дата</th>
                <th className="py-3 px-4 text-left text-gray-500">Статус</th>
                <th className="py-3 px-4 text-left text-gray-500">Сума</th>
                <th className="py-3 px-4 text-left text-gray-500"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4">001</td>
                <td className="py-3 px-4">2025-05-01</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Доставлено
                  </span>
                </td>
                <td className="py-3 px-4 font-medium">450 грн</td>
                <td className="py-3 px-4">
                  <button className="text-blue-600 hover:text-blue-800">Деталі</button>
                </td>
              </tr>
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
            <label className="block text-sm text-gray-500 mb-2">Мова</label>
            <select className="w-full p-2 border rounded-lg bg-white">
              <option>Українська</option>
              <option>English</option>
            </select>
          </div>
          <button className="w-full px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2">
            <FiTrash2 />
            <span>Видалити акаунт</span>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-800 mb-8"
        >
          Мій акаунт
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
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-blue-500">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                </div>
                <FiChevronRight
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    activeSection === section.id ? "transform rotate-90" : ""
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