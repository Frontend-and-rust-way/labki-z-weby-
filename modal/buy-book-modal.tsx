import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/ui/button";
import { useBasketStore2 } from "@/modules/layout/catalog-page/basket/store/store/use-basket-store-2";
import { useTranslation } from "react-i18next";

export function BuyBookModal() {
  const orderModal = useBasketStore2((state) => state.orderModal);
  const totalSummary = useBasketStore2((state) => state.totalSummary);
  const closeOrderModal = useBasketStore2((state) => state.closeOrderModal);
  const addOrderIntoArray = useBasketStore2((state) => state.addOrderIntoArray);
  const orderings = useBasketStore2((state) => state.ordering);
  const getOrderingFromLocalStorage = useBasketStore2(state=>state.getOrderingFromLocalStorage);
  const {t} = useTranslation();
  

  useEffect(() => { 
    getOrderingFromLocalStorage();
  },[getOrderingFromLocalStorage]);

  if (!orderModal) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="relative max-w-md w-full mx-4 px-6 py-10 bg-white rounded-3xl shadow-xl border border-gray-200 flex flex-col items-center space-y-6 animate-fade-in-scale">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
          onClick={closeOrderModal}
          aria-label="Close modal"
        >
          <X size={22}  />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">{t("mainPage.totalSummary")}</h2>
        <span className="text-[24px] font-bold text-blue-700">
          ${totalSummary.toFixed(2)}
        </span>
        <Button
          onClick={() => {
            addOrderIntoArray(totalSummary);
            setTimeout(() => {
              localStorage.setItem("orders", JSON.stringify(orderings));  
            }, 10);
          }}
          className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white font-medium tracking-wide rounded-xl transition duration-300"
        >
          {t("mainPage.orderBooks")}
        </Button>
      </div>
    </div>,
    document.body
  );
}
