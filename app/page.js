import Navbar from "@/components/my-components/navbar"
import BlurFade from "@/components/ui/blur-fade"
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
          <span className="text-xl text-indigo-500 text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
            Get a fast and eye-catching landing page
          </span>
        </BlurFade>
      </section>
    </header>
  )
}
