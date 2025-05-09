import { HeaderStruct } from "@/modules/layout/header/header-structure"
import { Footer } from "@/modules/layout/footer/footer"
import AutoSlider from "@/ui/slider"
import MyAccount from "@/modules/layout/my-account-page/my-account-section/my-account"
import { SupportModal } from "@/modal/support-modal"

export default function Catalog() {
  return ( 
    <>
      <HeaderStruct/> 
      <AutoSlider/> 
      <MyAccount/>
      <SupportModal/>
      <Footer/>
    </>
     )
}
