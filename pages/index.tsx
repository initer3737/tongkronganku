import styles from '../styles/Home.module.css'
import img from '../assets/img/wall.jpg'
import { 
  Template, 
  // Parallax,
  Homepage,
  Header
} from '../component/asembleKomponen' 
export default function Home() {
  return (
    <div className=''>
        <Template title={'homepage'}>
            <div className="flex flex-col">
                <Header/>
              <div className="z-10 mt-[325px] md:mt-[425px]">
                <Homepage/>
              </div>
            </div>
        </Template>
    </div>
  )
}
