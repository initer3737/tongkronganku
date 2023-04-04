import Link from "next/link"
import { useRouter } from "next/router"
import { Icon } from "../../atom"
import Image from "next/image";
import Img0 from '../../../assets/imgWebsite/img1.jpg'
import Img1 from '../../../assets/imgWebsite/img2.jpg'
import Img2 from '../../../assets/imgWebsite/img3.jpg'
import Img3 from '../../../assets/imgWebsite/img4.jpg'
import Img4 from '../../../assets/imgWebsite/img5.jpg'
import Img5 from '../../../assets/imgWebsite/img6.jpg'
import Img6 from '../../../assets/imgWebsite/img7.png'
import Img7 from '../../../assets/imgWebsite/img8.jpg'
import { useEffect, useState } from "react";
import headerCss from './header.module.css'
//===============================
export default function Header() {
  const {pathname}=useRouter();
    const sliderText=['healing','comfortable', 'flavour', 'socials','classic','yummy', 'fresh','clean']
    let [slider,setSlider]=useState<Number>(1);
    //===========
    useEffect(()=>{
      const slidersSlide=setInterval(()=>{
          setSlider((prevvalue=>(Number(prevvalue)+1)))
        if( Number(slider) >= sliderText.length -1){
            setSlider(0)
        }
      },6000)
      return ()=>{
        clearInterval(slidersSlide)
      }
    },[slider])
  return (
      <header className="relative">
       <div className="absolute top-[10px]">
        <div className={`relative`}>
          <div className="absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center">        
                                    {/**0 */}
              {/* <h1 className={`${headerCss.text} ${slider === 0 ? headerCss.appear:headerCss.disappear}`}>{sliderText[Number(0)]}</h1> */}
          </div>
          <Image 
              src={Img0.src} 
              alt="cilok" 
              className={`w-[100vw] h-[60vh] object-cover gambar-slider`} 
              width={600}
              height={450}
              loading={'lazy'}
            />
        </div>
       </div>

       <div className="absolute top-[10px]">
        <div className={`relative ${slider === 0 ?headerCss.appear:headerCss.disappear}`}>
          <div className="absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center">        
                                    {/**0 */}
              <h1 className={`${headerCss.text} ${slider === 0 ? headerCss.appear:headerCss.disappear}`}>{sliderText[Number(0)]}</h1>
          </div>
          <Image 
              src={Img0.src} 
              alt="cilok" 
              className={`w-[100vw] h-[60vh] object-cover gambar-slider`} 
              width={600}
              height={450}
              loading={'lazy'}
            />
        </div>
       </div>

       <div className="absolute top-[10px]">
        <div className={`relative ${slider === 1 ?headerCss.appear:headerCss.disappear}`}>
          <div className="absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center">        
                                    {/**1 */}
            <h1 className={`${headerCss.text} ${slider === 1 ? headerCss.appear:headerCss.disappear}`}>{sliderText[Number(1)]}</h1>
          </div>
          <Image 
              src={Img1.src} 
              alt="cilok" 
              className={`w-[100vw] h-[60vh] object-cover gambar-slider`} 
              width={600}
              height={450}
              loading={'lazy'}
            />
        </div>
       </div>

    <div className="absolute top-[10px]">
        <div className={`relative ${slider === 2 ?headerCss.appear:headerCss.disappear}`}>
          <div className="absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center">        
                                    {/**2 */}
              <h1 className={`${headerCss.text} ${slider === 2 ? headerCss.appear:headerCss.disappear}`}>{sliderText[Number(2)]}</h1>
          </div>
          <Image 
              src={Img2.src} 
              alt="cilok" 
              className={`w-[100vw] h-[60vh] object-cover gambar-slider`} 
              width={600}
              height={450}
              loading={'lazy'}
            />
        </div>
    </div>

    <div className="absolute top-[10px]">
        <div className={`relative ${slider === 3 ?headerCss.appear:headerCss.disappear}`}>
          <div className="absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center">        
                                    {/**3 */}
              <h1 className={`${headerCss.text} ${slider === 3 ? headerCss.appear:headerCss.disappear}`}>{sliderText[Number(3)]}</h1>
          </div>
          <Image 
              src={Img3.src} 
              alt="cilok" 
              className={`w-[100vw] h-[60vh] object-cover gambar-slider`} 
              width={600}
              height={450}
              loading={'lazy'}
            />
        </div>
    </div>

    <div className="absolute top-[10px]">
        <div className={`relative ${slider === 4 ?headerCss.appear:headerCss.disappear}`}>
          <div className="absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center">        
                                    {/**4 */}
              <h1 className={`${headerCss.text} ${slider === 4 ? headerCss.appear:headerCss.disappear}`}>{sliderText[Number(4)]}</h1>
          </div>
          <Image 
              src={Img4.src} 
              alt="cilok" 
              className={`w-[100vw] h-[60vh] object-cover gambar-slider`} 
              width={600}
              height={450}
              loading={'lazy'}
            />
        </div>
    </div>

    <div className="absolute top-[10px]">
        <div className={`relative ${slider === 5 ?headerCss.appear:headerCss.disappear}`}>
          <div className="absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center">        
                                    {/**5 */}
              <h1 className={`${headerCss.text} ${slider === 5 ? headerCss.appear:headerCss.disappear}`}>{sliderText[Number(5)]}</h1>
          </div>
          <Image 
              src={Img5.src} 
              alt="cilok" 
              className={`w-[100vw] h-[60vh] object-cover gambar-slider`} 
              width={600}
              height={450}
              loading={'lazy'}
            />
        </div>
    </div>

    <div className="absolute top-[10px]">
        <div className={`relative ${slider === 6 ?headerCss.appear:headerCss.disappear}`}>
          <div className="absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center">        
                                    {/**6 */}
              <h1 className={`${headerCss.text} ${slider === 6 ? headerCss.appear:headerCss.disappear}`}>{sliderText[Number(6)]}</h1>
          </div>
          <Image 
              src={Img6.src} 
              alt="cilok" 
              className={`w-[100vw] h-[60vh] object-cover gambar-slider`} 
              width={600}
              height={450}
              loading={'lazy'}
            />
        </div>
    </div>

    <div className="absolute top-[10px]">
        <div className={`relative ${slider === 7 ?headerCss.appear:headerCss.disappear}`}>
          <div className="absolute w-[100%] h-[100%] bg-[#000]/60 text-white grid place-items-center">        
                                    {/**7 */}
              <h1 className={`${headerCss.text} ${slider === 7 ? headerCss.appear:headerCss.disappear}`}>{sliderText[Number(7)]}</h1>
          </div>
          <Image 
              src={Img7.src} 
              alt="cilok" 
              className={`w-[100vw] h-[60vh] object-cover gambar-slider`} 
              width={600}
              height={450}
              loading={'lazy'}
            />
        </div>
    </div>

    
        
      </header>
  )
}
