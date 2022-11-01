import { 
  Template,
  Icon 

} from "../../component/asembleKomponen";
import epri from '../../assets/img/epri/penjual.jpg'
import product1 from '../../assets/img/epri/products-1.jpg'
import product2 from '../../assets/img/epri/products-2.jpg'
import product3 from '../../assets/img/epri/products-3.jpg'
import product4 from '../../assets/img/epri/products-4.jpg'
import product5 from '../../assets/img/epri/products-5.jpg'
import product6 from '../../assets/img/epri/products-6.jpg'
import product7 from '../../assets/img/epri/products-7.jpg'
import product8 from '../../assets/img/epri/products-8.jpg'
import product9 from '../../assets/img/epri/products-9.jpg'
import product10 from '../../assets/img/epri/products-10.jpg'
export default function Toko() {
  return (
    <>
        <Template title="toko | epri">
          <div className="flex items-center justify-center gap-3 py-4 mt-5 w-fit">
            <img src={epri.src} alt="epri" className="w-3/6 gap-3 rounded-lg shadow-lg shadow-purple-300" />
            <div className="flex flex-col gap-3 p-4 bg-purple-200 rounded-md shadow-md shadow-purple-400">
              <a href="https://www.instagram.com/epri_bochel/" target={'_blank'} className="flex flex-row gap-2 px-5 py-3 text-white transition-colors translate-y-2 bg-purple-600 rounded-md shadow-lg shadow-purple-400 hover:text-purple-900 hover:bg-purple-50">
                <Icon IconName={"instagram"} Variant={"text-pink-700"}/>
                instagram
              </a>
              <a href="https://wa.me/6289502624920" target={'_blank'} className="flex flex-row gap-2 px-5 py-3 text-white transition-colors translate-y-2 rounded-md shadow-lg bg-emerald-600 shadow-emerald-400 hover:text-emerald-900 hover:bg-emerald-50">
                <Icon IconName={"whatsapp"} Variant={"text-emerald-400"}/>
                whatsapp
              </a>
            </div>
           </div>
           <p className="text-center ">
            <Icon IconName={"info-circle-fill"} Variant={"text-purple-700"}/> products
           </p>
            <div className="flex flex-col flex-wrap justify-center gap-3 py-5 bg-flex md:flex-row">
              <img src={product1.src} alt="cilok" className="w-full rounded-md shadow-lg md:w-3/12 shadow-purple-600" />
              <img src={product2.src} alt="cilok" className="w-full rounded-md shadow-lg md:w-3/12 shadow-purple-600" />
              <img src={product3.src} alt="cilok" className="w-full rounded-md shadow-lg md:w-3/12 shadow-purple-600" />
              <img src={product4.src} alt="cilok" className="w-full rounded-md shadow-lg md:w-3/12 shadow-purple-600" />
              <img src={product5.src} alt="cilok" className="w-full rounded-md shadow-lg md:w-3/12 shadow-purple-600" />
              <img src={product6.src} alt="cilok" className="w-full rounded-md shadow-lg md:w-3/12 shadow-purple-600" />
              <img src={product7.src} alt="cilok" className="w-full rounded-md shadow-lg md:w-3/12 shadow-purple-600" />
              <img src={product8.src} alt="cilok" className="w-full rounded-md shadow-lg md:w-3/12 shadow-purple-600" />
              <img src={product9.src} alt="cilok" className="w-full rounded-md shadow-lg md:w-3/12 shadow-purple-600" />
              <img src={product10.src} alt="cilok" className="w-full rounded-md shadow-lg md:w-3/12 shadow-purple-600" />
            </div>

        </Template>
    </>
  )
}
