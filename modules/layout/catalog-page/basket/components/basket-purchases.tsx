import Image from "next/image";
import { Minus, Plus, Car, Trash2 } from "lucide-react";
import { IBasketPurchase } from "../types/interfaces";
// import { useBasketStore } from "../store/store/use-basket-store";  
import { useBasketStore2 } from "../store/store/use-basket-store-2";

export function BasketPurchases({
  index,
  src,
  title,
  author,
  price,
  type,
  isExists,
}: IBasketPurchase) {
    const addedBook = useBasketStore2((state) => state.addedBooks);
    const increaseElement = useBasketStore2((state) => state.increaseElement);
    const decreaseElement = useBasketStore2((state) => state.decreaseElement);
    const deleteChosenAddedBooks = useBasketStore2(state => state.deleteChosenAddedBooks);

  return (
    <div className="flex items-start gap-6 p-5 border-b border-gray-200 hover:bg-gray-50 transition duration-300">
      <Image
        src={src}
        alt="card"
        width={80}
        height={80}
        className="rounded-lg shadow-md object-cover"
      />

      <div className="flex flex-col gap-2 flex-1">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{author}</p>
        </div>

        <div className="flex gap-4 items-center text-sm text-gray-700 font-medium">
          <span className="text-green-600 flex items-center gap-1">
            <Car size={18} />
            {isExists ? "В наявності" : "Немає"}
          </span>
        </div>

        <div className="flex gap-3 items-center text-sm text-gray-700">
          <span className="font-semibold">
            {+price * addedBook[index].countPurchase}
          </span>
          <span className="text-gray-500">/ {type}</span>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between h-[100%] gap-6">
        <button
          className="text-gray-400 hover:text-red-500 transition"
        >
          <Trash2 onClick={() => deleteChosenAddedBooks(index)} size={20} />
        </button>

        <div className="flex items-center text-black gap-2 bg-gray-100 px-2 py-1 rounded-full">
          <button
            className="p-1 rounded-full hover:bg-gray-300 transition"
          >
            <Minus  onClick={() => decreaseElement(index)} size={16} />
          </button>
          <span className="text-sm font-medium min-w-[24px] text-center">
            {addedBook[index].countPurchase}
          </span>
          <button
            className="p-1 rounded-full hover:bg-gray-300 transition"
          >
            <Plus  onClick={() => increaseElement(index)} size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
