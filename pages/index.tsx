import styles from '../styles/Home.module.css'
import img from '../assets/img/wall.jpg'
import { 
  Template, 
  Parallax,
  Header
} from '../component/asembleKomponen' 
export default function Home() {
  return (
    <div className=''>
        <Template title={'homepage'}>
          <Header/>
           <Parallax img={img.src}>
             <h1 className="font-semibold text-center text-white">
              hello world!
             </h1>
             <h1 className="font-semibold text-center text-white">
              under construction!
             </h1>
            </Parallax> 
        </Template>
    </div>
  )
}
