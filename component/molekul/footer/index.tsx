import Marquee from "react-fast-marquee"
export default function Footer() {
  return (
    <div className="p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-sky-200">
      <Marquee className="" pauseOnHover direction="left" speed={30} loop={0} delay={2} gradient={false} >
        <a href="https://initer3737.github.io" target={'_blank'} className={'text-white active:bg-purple-600'}>
          about me
        </a>
      </Marquee>
    </div>
  )
}
