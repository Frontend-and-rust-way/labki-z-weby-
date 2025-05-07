
import { useBasketStore2 } from "../store/store/use-basket-store-2";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { TotalSummaryBlock } from "./total-summary-basket-block";
import { BasketPurchases } from "./basket-purchases";
import { useEffect } from "react";

export function BasketModal() {
const closeBasketModal = useBasketStore2(state => state.closeBasketModal);
// const openBasketModal = useBasketStore2(state => state.openBasketModal);
const isBasketModalActive = useBasketStore2(state => state.isBasketModalActive);
const addedBooks = useBasketStore2(state => state.addedBooks);
const clearAddedBooks = useBasketStore2(state => state.clearAddedBooks);
const data = useBasketStore2(state => state.setTotalSummary);

const reduceAllBooksCount = addedBooks.reduce((acc,book)=> +acc + +book.countPurchase,0);
  useEffect(() => { 
    data();
  },[addedBooks,data]);

  if (!isBasketModalActive) return null;

  return createPortal(
    <div className="fixed top-0 right-0 h-full w-[90%] sm:w-[500px] bg-white shadow-2xl z-50 flex flex-col">
      <div className="p-5 flex justify-between items-center border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Your Basket</h2>
        <X
          size={24}
          className="text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
          onClick={closeBasketModal}
        />
      </div>

      <div className="px-5 py-4 flex justify-between items-center border-b border-gray-100">
        <span className="text-gray-700 font-medium">{(reduceAllBooksCount)} item(s)</span>
        <button
          className="text-sm text-red-600 hover:text-red-800 hover:underline transition-colors"
          onClick={clearAddedBooks}
        >
          Delete everything
        </button>
      </div>

      <div className="h-full w-full overflow-y-scroll">
        {addedBooks.map((bookData, index) => (
          <BasketPurchases
            key={`${bookData.title}-${index}`}
            src={bookData.imageUrl || "/default-image.png"}
            title={bookData.title}
            author={bookData.author}
            price={bookData.price}
            type={bookData.type}
            isExists={bookData.isExists?.expectedDate || bookData.isExists}
            code={bookData.code}
            index={index}
          />
        ))}
      </div>
      <TotalSummaryBlock />
    </div>,
    document.body
  );
}
