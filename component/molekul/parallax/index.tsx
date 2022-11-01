import { url } from 'inspector';
import {ReactNode} from 'react'
import gam from '../../../assets/img/wall.jpg'
const Parallax:React.FC<{children:ReactNode}>

=({children})=> {
  return (
    <div className={`bg-fixed bg-blue-400 py-4 bg-cover bg-center bg-no-repeat h-screen`} style={{
      backgroundImage:`url(${gam.src})`
    }}>
      {children}
  </div>
  )
}

export default Parallax;