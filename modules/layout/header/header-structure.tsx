"use client";
import { HeaderStructure } from "./components/header";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { Burger } from "./components/burger-icon";
import { navItems } from "@/modules/layout/header/mock/mock-navItems";
import { HeaderModal } from "@/modal/header-modal-burger-icon";
import { usePathname } from "next/navigation";
import { useBasketStore2 } from "../catalog-page/basket/store/store/use-basket-store-2";
import { booksEn } from "@/mock/mock-books-en";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/ui/popover";

export function HeaderStruct() {
  const {i18n}= useTranslation("resources");
  const isBurgerIconExists = useMediaQuery({ maxWidth: 1100 });
  const url = usePathname();
  const mockArray = useBasketStore2((state) => state.mockBooks);
  const setChosenGenreValue = useBasketStore2((state) => state.setChosenGenreValue)  
  const setChosenAuthorValue = useBasketStore2((state) => state.setChosenAuthorValue);
  const books = i18n.language === "en" ? booksEn : booksEn ;

  return (
    <HeaderStructure>
      {!isBurgerIconExists ? (
        <>
          <HeaderStructure.NavigationLinks items={navItems} />
          {url.includes("catalog") && (
            <div className="flex gap-5 items-center justify-center">
               <Popover>
                <PopoverTrigger className="text-center px-4 py-2 text-sm font-medium bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                  Author
                </PopoverTrigger>
                <PopoverContent className="p-3 w-[500px] h-[200px] overflow-auto text-center bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col gap-2">
                  {books.map((book) => (
                    <div
                      key={`author-${book.code}`}
                      className="px-3 py-1 hover:bg-gray-100 rounded-md cursor-pointer transition text-gray-800 text-sm"
                      onClick={() => {setChosenAuthorValue(book.author)}}
                    >
                      {book.author}
                    </div>
                  ))}
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger className="text-center px-4 py-2 text-sm font-medium bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                  Genre
                </PopoverTrigger>
                <PopoverContent className="p-3 w-[500px] h-[200px] overflow-auto text-center bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col gap-2">
                  {mockArray.map((book) => (
                    <div
                      key={`genre-${book.code}`}
                      className="px-3 py-1 hover:bg-gray-100 rounded-md cursor-pointer transition text-gray-800 text-sm"
                      onClick={() => setChosenGenreValue(book.genre)}
                    >
                      {book.genre}
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          )}
          <HeaderStructure.RegistrationPanel />
        </>
      ) : (
        <Burger />
      )}

      <HeaderModal />
    </HeaderStructure>
  );
}
