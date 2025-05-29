"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useBasketStore2 } from "../basket/store/store/use-basket-store-2";
import { getCollectionData } from "@/firebase/firebase-function";

export function BookCard() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [clickNumber, setClickNumber] = useState<number>(0);
  const [booksData, setBooksData] = useState<any[]>([]);  

  const {
    addChosenBookIntoBasket,
    chosenGenre,
    chosenAuthor,
  } = useBasketStore2();

  const chosenFilter = chosenAuthor || chosenGenre;

  const filteredBooks = booksData.filter((book) =>
    chosenFilter
      ? book.author === chosenFilter || book.genre === chosenFilter
      : true
  );

  useEffect(() => {
    async function loadData() {
      const books = await getCollectionData("books");
      setBooksData(books || []);
    }
    loadData();
  }, []);

  return (
    <div className="w-full h-[800px] my-20 max-w-6xl mx-auto px-8 py-10 bg-white rounded-3xl shadow-2xl overflow-y-auto">
      <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">
        Каталог книг
      </h2>

      <div className="space-y-8">
        {filteredBooks.map((book, index) => (
          <div
            key={book.code || index}
            className="flex items-center justify-between gap-6 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-6 w-1/3">
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-md">
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />  
              </div>
              <span className="text-lg font-medium text-gray-800">
                {book.title}
              </span>
            </div>

            <span className="w-1/5 text-center text-gray-600 font-normal">
              {book.author}
            </span>

            <span className="w-1/5 text-center inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
              ★ {book.rating}
            </span>

            <span className="w-1/5 text-center inline-flex items-center justify-center px-4 py-2 rounded-lg text-base font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              {book.price} ₴
            </span>

            <button
              onClick={() => {
                setSelectedIndex(index);
                addChosenBookIntoBasket(index);
                setClickNumber((n) => n + 1);
              }}
              className={cn(
                "w-[160px] h-12 flex items-center justify-center px-4 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5 active:scale-95",
                selectedIndex === index && clickNumber % 2 === 0
                  ? "bg-gradient-to-r from-blue-900 to-blue-200"
                  : "bg-gradient-to-r from-emerald-500 to-green-600"
              )}
            >
              додати до кошика
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
