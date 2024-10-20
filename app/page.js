import BrandList from "@/components/my-components/brandList"
import GetStartedButton from "@/components/my-components/getStartedButton"
import Navbar from "@/components/my-components/navbar"
import BlurFade from "@/components/ui/blur-fade"
import HeroVideoDialog from "@/components/ui/hero-video-dialog"
import Link from "next/link"

export default function Home() {
  const firstSectionAnimationDelay = 0.25
  return (
    <header>
      <Navbar />
      <section className="w-full mt-28 flex flex-col justify-center items-center align-middle">
        <BlurFade delay={firstSectionAnimationDelay} yOffset={-10} inView>
          <Link
            href={"/about"}
            className=" group inline-block transition-all duration-500 ease-out "
          >
            <div className="inline-flex justify-center items-center gap-6 rounded-full bg-indigo-500 pl-1 pr-3 py-1">
              <div className=" flex justify-center items-center gap-1 rounded-full bg-indigo-200 ">
                <p className="px-3 py-1">🔈 Announcement</p>
              </div>
              <p className="text-indigo-100 flex items-center">
                Introducing Startup
                <span
                  className={
                    "transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                  }
                >
                  🢒
                </span>
              </p>
            </div>
          </Link>
        </BlurFade>
        <BlurFade delay={firstSectionAnimationDelay * 2} inView>
          <h2 className="mt-14 mb-6 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Bootstrap your startup 🚀
          </h2>
        </BlurFade>
        <BlurFade delay={firstSectionAnimationDelay * 2.5} inView>
          <p className="mb-6 text-xl text-indigo-500 text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none ">
            Get a fast and eye-catching landing page
          </p>
        </BlurFade>

        <BlurFade delay={firstSectionAnimationDelay * 3} inView>
          <div className="flex flex-col justify-center items-center">
            <GetStartedButton className="mt-10" />
            <p className="text-sm text-indigo-500 text-pretty tracking-tighter sm:text-base xl:text-lg/none text-center mt-4">
              Get your website tested for free
            </p>
          </div>
        </BlurFade>
        <BlurFade
          className="mt-16 w-full"
          delay={firstSectionAnimationDelay * 2.5}
          inView
        >
          <HeroVideoDialog
            className="dark:hidden block"
            animationStyle="fade"
            videoSrc="https://www.youtube.com/embed/l2B90FHYOIc?si=ZG_TTz0Kuo3W2f8g"
            thumbnailSrc="http://img.youtube.com/vi/l2B90FHYOIc/maxresdefault.jpg"
            thumbnailAlt="Hero Video"
          />
        </BlurFade>
      </section>
      <section className="w-full mt-28 flex flex-col justify-center items-center align-middle">
        <BrandList />
      </section>
    </header>
  )
}
