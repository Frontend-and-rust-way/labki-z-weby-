"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useBasketStore2 } from "../basket/store/store/use-basket-store-2";
import { useTranslation } from "react-i18next";
import { bookDescriptionEn } from "./mock/mock-book-description";
import { bookDescriptionUk } from "./mock/mock-book-description";

export function BookCard() {
  type TypeBookDescription = typeof bookDescriptionEn | typeof bookDescriptionUk;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const {
    mockBooks,
    addChosenBookIntoBasket,
    chosenGenre,
    chosenAuthor,
  } = useBasketStore2();

  const {t} = useTranslation();  

  const bookDescription = t("mainPage.bookDescription", {
    returnObjects: true,
  }) as TypeBookDescription;

  const chosenFilter = chosenAuthor || chosenGenre;
  const filteredBooks = mockBooks.filter((book) =>
    chosenFilter
      ? book.author === chosenFilter || book.genre === chosenFilter
      : true
  );

  return (
    <div className="w-full h-[800px] my-20 max-w-6xl mx-auto px-8 py-10 bg-white rounded-3xl shadow-2xl overflow-y-auto">
      <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-6">
        {bookDescription.map((title) => (
          <span
            key={title}
            className="w-full text-center text-xl font-semibold text-gray-900 tracking-wider uppercase"
          >
            {title}
          </span>
        ))}
      </div>

      <div className="space-y-8">
        {filteredBooks.map((book, index) => (
          <div
            key={book.title}
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
              }}
              className={cn(
                "w-[160px] h-12 flex items-center justify-center px-4 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5 active:scale-95",
                selectedIndex === index
                  ? "bg-gradient-to-r from-blue-900 to-blue-200"
                  : "bg-gradient-to-r from-emerald-500 to-green-600"
              )}
            >
              {t("mainPage.addToBasket", "Додати до кошика")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
