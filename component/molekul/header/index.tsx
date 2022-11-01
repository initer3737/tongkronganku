import Link from "next/link"
import { useRouter } from "next/router"
import { Icon } from "../../atom"
export default function Header() {
  const {pathname}=useRouter();
    const path=pathname.split('/');
  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-sky-200">
      <ul className="flex flex-row gap-3 py-3 px-7 text-white">
        <li>
          <Link href={'/'} legacyBehavior>
            <a className="flex flex-row gap-1">
              <Icon IconName={"house"} Variant={"text-teal-900"} /> 
              <Icon IconName={path[1]===''?"diamond-fill":''} Variant={"text-cyan-400 shadow-violet-600"} /> 
              tongkronganku
            </a>
          </Link>
        </li>
        <li>
          <Link href={'toko'} legacyBehavior>
            <a className="flex flex-row gap-1 hover:text-sky-200 transition ease-in 500">
              <Icon IconName={path[1]==='toko'?"diamond-fill":''} Variant={"text-cyan-400 shadow-violet-600"} /> 
              toko
            </a>
          </Link>
        </li>
        <li>
          <Link href={'tentang'} legacyBehavior>
            <a className="flex flex-row gap-1 hover:text-sky-200 transition ease-in 500">
              <Icon IconName={path[1]==='tentang'?"diamond-fill":''} Variant={"text-cyan-400 shadow-violet-600"} /> 
              tentang
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
