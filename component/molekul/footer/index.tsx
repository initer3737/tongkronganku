import Marquee from "react-fast-marquee"
export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 p-5">
      <Marquee className="" pauseOnHover direction="left" speed={30} loop={0} delay={2} gradient={false} >
        <a href="https://initer3737.github.io" target={'_blank'} className={'text-white active:bg-purple-600'}>
          about me
        </a>
      </Marquee>
    </div>
  )
}
