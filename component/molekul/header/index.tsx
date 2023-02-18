import Link from "next/link"
import { useRouter } from "next/router"
import { Icon } from "../../atom"
import Image from "next/image";
import Img1 from '../../../assets/imgWebsite/img1.jpg'
import Img2 from '../../../assets/imgWebsite/img2.jpg'
import Img3 from '../../../assets/imgWebsite/img3.jpg'
import Img4 from '../../../assets/imgWebsite/img4.jpg'
import Img5 from '../../../assets/imgWebsite/img5.jpg'
import Img6 from '../../../assets/imgWebsite/img6.jpg'
import Img7 from '../../../assets/imgWebsite/img7.png'
import Img8 from '../../../assets/imgWebsite/img8.jpg'
import { useEffect, useState } from "react";
import headerCss from './header.module.css'
//===============================
export default function Header() {
  const {pathname}=useRouter();
    const path=pathname.split('/');
    const sliderImg=[Img1,Img2, Img3, Img4,Img5,Img6, Img7,Img8]
    const sliderText=['healing','comfortable', 'flavour', 'socials','classic','yummy', 'fresh','clean']
    let [slider,setSlider]=useState<Number>(0);
    //===========
    useEffect(()=>{
      const slidersSlide=setInterval(()=>{
          setSlider((prevvalue=>(Number(prevvalue)+1)))
        if( Number(slider) >= sliderImg.length -1){
            setSlider(0)
        }
      },3000)
      return ()=>{
        clearInterval(slidersSlide)
      }
    },[slider])
  return (
      <header className="relative">
        <div className="absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center">
            <h1 className={headerCss.text}>{sliderText[Number(slider)]}</h1>
        </div>
       <Image 
          src={sliderImg[Number(slider)].src} 
          alt="cilok" 
          className={`w-[100vw] h-[60vh] object-cover gambar-slider`} 
          width={600}
          height={450}
          loading={'lazy'}
        />
      </header>
  )
}
