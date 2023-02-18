import React from 'react'
import food1 from './homepageAssets/food1.jpg'
import food2 from './homepageAssets/food2.jpg'
import food3 from './homepageAssets/food3.jpg'
import food4 from './homepageAssets/food4.jpg'
import food5 from './homepageAssets/food5.jpg'
import food6 from './homepageAssets/food6.jpg'
import food7 from './homepageAssets/food7.jpg'
import food8 from './homepageAssets/food8.jpg'
import Image from 'next/image'
import homepageStyle from './homepage.module.css'
export default function Homepage() {
  return (
    <div className={`${homepageStyle.ImageContainer} flex flex-wrap justify-center bg-slate-100 pt-4`}>
      <div className="overflow-hidden w-full md:w-1/2">
        <Image src={food1.src} data-text={'sasa'} className='object-cover w-full' width='512' height='112' alt={'food1'} loading={'lazy'} />
      </div>
      <div className="overflow-hidden w-full md:w-1/2">
        <Image src={food2.src} data-text={'sasa'} className='object-cover w-full' width='512' height='112' alt={'food1'} loading={'lazy'} />
      </div>
      <div className="overflow-hidden w-full md:w-1/2">
        <Image src={food3.src} data-text={'sasa'} className='object-cover w-full' width='512' height='112' alt={'food1'} loading={'lazy'} />
      </div>
      <div className="overflow-hidden w-full md:w-1/2">
        <Image src={food4.src} data-text={'sasa'} className='object-cover w-full' width='512' height='112' alt={'food1'} loading={'lazy'} />
      </div>
      <div className="overflow-hidden w-full md:w-1/2">
        <Image src={food5.src} data-text={'sasa'} className='object-cover w-full' width='512' height='112' alt={'food1'} loading={'lazy'} />
      </div>
      <div className="overflow-hidden w-full md:w-1/2">
        <Image src={food6.src} data-text={'sasa'} className='object-cover w-full' width='512' height='112' alt={'food1'} loading={'lazy'} />
      </div>
      <div className="overflow-hidden w-full md:w-1/2">
        <Image src={food7.src} data-text={'sasa'} className='object-cover w-full' width='512' height='112' alt={'food1'} loading={'lazy'} />
      </div>
      <div className="overflow-hidden w-full md:w-1/2">
        <Image src={food8.src} data-text={'sasa'} className='object-cover w-full' width='512' height='112' alt={'food1'} loading={'lazy'} />
      </div>
     
    </div>
  )
}
