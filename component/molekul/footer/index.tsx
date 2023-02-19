import Marquee from "react-fast-marquee"
export default function Footer() {
  return (
    <div className="border-purple-400 border-t-2 p-5 text-center text-white bg-purple-900 flex flex-col">
      <div className="justify-center flex gap-1">
        <a href="https://initer3737.github.io" target={'_blank'} className={' active:bg-purple-600'}>
          &copy;yotsusan_machi&initer3737&LDV
        </a>
        Copyright Reserved
      </div>
    </div>
  )
}
