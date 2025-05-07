// import {useState } from "react";
import { useBasketStore2 } from "../store/store/use-basket-store-2";
export function TotalSummaryBlock() {
  // const [allBooksPrice, setAllBooksPrice] = useState<number>(0);
  const openOrderModal = useBasketStore2(state=>state.openOrderModal);
  const  totalSummary = useBasketStore2( (state) => state.totalSummary);
  return (
    <div className="flex flex-col gap-4 p-6 bg-gray-50 rounded-xl shadow-sm">
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium text-gray-700">Total:</span>
        <span className="text-xl font-bold text-gray-900">{totalSummary}$</span>
      </div>
      <button 
       onClick={openOrderModal}      
       className="rounded-full w-full py-3 bg-blue-800 text-white font-medium hover:bg-blue-900 transition-colors duration-300 shadow-md">
        Перейти до оформлення замовлення
      </button>
    </div>
  );
}
