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
          <Header/>
           <Homepage/>
        </Template>
    </div>
  )
}
