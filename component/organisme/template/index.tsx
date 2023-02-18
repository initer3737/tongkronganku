import { ReactNode } from "react"
import Head from "next/head"
import {
    Footer,
    Navigasi
}from '../../asembleKomponen'

 const Template:React.FC<{title:string,children:ReactNode  }>
        =({title,children})=>{
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
          {/*bts icon   */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
      </Head>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <Navigasi/>
            <div className="bg-purple-100 ">
              {children}
            </div>
          </div>
          <Footer/>
        </div>  
    </>
  )
}

export default Template;