'use client';

import { HeaderStruct } from "@/modules/layout/header/header-structure";
import { Footer } from "@/modules/layout/footer/footer";
import AutoSlider from "@/ui/slider";
import { IntroSection } from "@/modules/layout/main-page/main-blog-description/components/section";
import { Heading } from "@/ui/heading";
import { Description } from "@/ui/description";
import { Button } from "@/ui/button";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mockDataIntroSection } from "@/mock/mock-intro-section";
import { useMainPageStore } from "@/store/main-page-store";
import { Fragment } from "react";
import { BuyBookModal } from "@/modal/buy-book-modal";


export default function Home() {
  const mockIndex = useMainPageStore((state) => state.mockMainPageDataIndex);
  const increaseMainPageDataIndex = useMainPageStore((state) => state.increaseMainPageDataIndex);
  const decreaseMainPageDataIndex = useMainPageStore((state) => state.decreaseMainPageDataIndex);

  return (
    <>
      <HeaderStruct />
      <BuyBookModal/>
      <div className="relative h-[100vh] bg-transparent">
        <AutoSlider />
      </div>

      <IntroSection className="py-[20px]">
        {mockDataIntroSection
          .filter((_, i) => i === mockIndex)
          .map((section) => (
            <Fragment key={section.link}>
              <Heading className="text-white text-[40px]">
                {section.heading}
              </Heading>
              <Description className="w-[30%] text-center">
                  {section.description}
              </Description>
              <div className="flex w-full justify-between items-center px-[10%] py-6 gap-6">
                <Button
                  onClick={decreaseMainPageDataIndex}
                  className="flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-900 to-blue-950 text-white text-lg font-medium hover:from-blue-950 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Prev
                </Button>

                <Button
                  className="flex items-center justify-center px-9 py-3.5 rounded-xl bg-gradient-to-r from-blue-900 to-blue-950 text-white text-lg font-medium hover:from-blue-950 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  <Link href={section.link} className="text-white no-underline hover:text-blue-100 transition-colors">
                    {section.heading}
                  </Link>
                </Button>

                <Button
                  onClick={increaseMainPageDataIndex}
                  className="flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-900 to-blue-950 text-white text-lg font-medium hover:from-blue-950 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02]"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </Fragment>
          ))}
      </IntroSection>
      
      <Footer />
    </>
  );
}
