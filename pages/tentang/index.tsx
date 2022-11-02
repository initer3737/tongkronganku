import {
    Parallax,
    Template
}from '../../component/asembleKomponen'
export default function index() {
  return (
    <Template title='tentang'>
       <div className="flex flex-col items-center justify-center h-screen">
       <div className="w-1/4 overflow-hidden rounded-md shadow-sm bg-sky-100 shadow-sky-700">
           <div className="p-2 border text-sky-900">
            <h3>sebuah platform online yang menampung usaha umkm</h3>
           </div>
        </div>
       </div>
    </Template>
  )
}
