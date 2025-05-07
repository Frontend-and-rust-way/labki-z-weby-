"use client"
import { HeaderStruct } from "@/modules/layout/header/header-structure"
import { Footer } from "@/modules/layout/footer/footer"
import AutoSlider from "@/ui/slider"
import { BookCard } from "@/modules/layout/catalog-page/grid-book-cards/book-cards"
import { BasketModal } from "@/modules/layout/catalog-page/basket/components/all-busket-modal"
import { BuyBookModal } from "@/modal/buy-book-modal"
export default function Catalog() {

  return ( 
    <>
      <BuyBookModal/>
      <HeaderStruct/> 
      <AutoSlider/>
      <BookCard/>
      <BasketModal/>
      <Footer/>
    </>
  );
}
