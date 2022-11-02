import Link from "next/link"
import { useRouter } from "next/router"
import { Icon } from "../../atom"
export default function Header() {
  const {pathname}=useRouter();
    const path=pathname.split('/');
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-sky-200">
      <ul className="flex flex-row gap-3 py-3 text-white px-7">
        <li>
          <Link href={'/'} legacyBehavior>
            <a className={`flex flex-row gap-1 ${path[1]===''?'text-cyan-900':''}`}>
              <Icon IconName={"house"} Variant={"text-teal-900"} /> 
              <Icon IconName={path[1]===''?"diamond-fill":''} Variant={"text-cyan-400 shadow-violet-600"} /> 
              tongkronganku
            </a>
          </Link>
        </li>
     <div className="fixed md:bg-none md:flex md:static inset-y-1/2">
     <ul className="px-3 rounded-md shadow-lg shadow-sky-800 backdrop-sepia-0 md:rounded-none md:border-none md:shadow-none md:flex-row md:flex md:gap-3">
      <li>
          <Link href={'toko'} legacyBehavior>
            <a className={`flex flex-row gap-1 transition ease-in hover:text-sky-200 500 ${path[1]==='toko'?'text-cyan-900':''}`}>
              <Icon IconName={path[1]==='toko'?"diamond-fill":''} Variant={"text-cyan-400 shadow-violet-600"} /> 
              toko
            </a>
          </Link>
        </li>
        <li>
          <Link href={'tentang'} legacyBehavior>
            <a className={`flex flex-row gap-1 transition ease-in hover:text-sky-200 ${path[1]==='tentang'?'text-cyan-900':''}`}>
              <Icon IconName={path[1]==='tentang'?"diamond-fill":''} Variant={"text-cyan-400 shadow-violet-600"} /> 
              tentang
            </a>
          </Link>
        </li>
     </ul>
      </div>   
      </ul>
    </nav>
  )
}
