'use client';
import { useTranslation } from "react-i18next";
import { HeaderStruct } from "@/modules/layout/header/header-structure";
import { Footer } from "@/modules/layout/footer/footer";
import AutoSlider from "@/ui/slider";
import { IntroSection } from "@/modules/layout/main-page/main-blog-description/components/section";
import { Heading } from "@/ui/heading";
import { Description } from "@/ui/description";
import { mockDataIntroSectionEn } from "@/mock/mock-intro-section-en";
import { mockDataIntroSectionUk } from "@/mock/mock-into-section-uk";
import { useMainPageStore } from "@/store/main-page-store";
import { Fragment } from "react";
import { BuyBookModal } from "@/modal/buy-book-modal";
// import { addBooks } from "@/firebase/add-docs";
// import { booksEn } from "@/mock/mock-books-en";
import { getCollectionData } from "@/firebase/firebase-function";
// import { getCollectionData } from "@/firebase/firebase-function";

export default function Home() {
  const mockIndex = useMainPageStore((state) => state.mockMainPageDataIndex);
  const { i18n } = useTranslation("resources");
  // const books = i18n.language === "uk" ?getCollectionData("booksUk"):  getCollectionData("books");
  // const books = i18n.language === "uk" ?getCollectionData("booksUk"):  getCollectionData("books");

  const books = i18n.language === "uk" ? mockDataIntroSectionUk : mockDataIntroSectionEn;
  return (
    <>
      <HeaderStruct />
      <BuyBookModal/>
      <div className="relative h-[100vh] bg-transparent" onClick={() =>  { 
          getCollectionData("booksUk");
      }}>
        <AutoSlider />
      </div>

      <IntroSection className="py-[20px]">
        {books.filter((_, i) => i === mockIndex).map((section) => (
            <Fragment key={section.link}>
              <Heading className="text-white text-[40px]">
                {section.heading}
              </Heading>
              <Description className="w-[50%] text-center">
                  {section.description}
              </Description>
            </Fragment>
          ))}
      </IntroSection>
      <Footer />
    </>
  );
}
