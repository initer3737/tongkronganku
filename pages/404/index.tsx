import notFound from '../../assets/img/404.jpg'
import Link from 'next/link'
import { 
    Icon ,
    Template,
    Parallax
} from '../../component/asembleKomponen';
export default function index() {
  return (
   <Template title='404 | halaman tidak ditemukan'> 
        <Parallax img={notFound.src}>
    <div className="flex flex-col items-center justify-center h-screen">
        <Link href={'/'} className={'bg-purple-400 rounded-md px-5 py-2 text-purple-50 shadow-md shadow-purple-600 hover:shadow-purple-700 hover:bg-purple-50 hover:text-purple-600 flex flex-row gap-1 hover:border-2 border-solid hover:border-purple-400 transition-all duration-500'}>
            <Icon IconName={'info-circle'} Variant={'text-whit'} />
            Home
        </Link>
    </div>
        </Parallax>
    </Template>
  )
}
