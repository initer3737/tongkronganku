import {ReactNode} from 'react'
const Parallax:React.FC<{children:ReactNode,img:string}>

=({children,img})=> {
  return (
    <div className={`bg-fixed py-4 bg-cover bg-center bg-no-repeat h-screen`} style={{
      backgroundImage:`url(${img})`
    }}>
      {children}
  </div>
  )
}

export default Parallax;