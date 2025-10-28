"use client"
import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [offsetY, setOffsetY] = useState(0)
  const [trackLength, setTrackLength] = useState(0)
  const [communityFunded, setCommunityFunded] = useState(0)
  const [shuttleDays, setShuttleDays] = useState(0)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Counter animation
  useEffect(() => {
    const duration = 1000 // 1 seconds
    const frameRate = 30 // FPS
    const totalFrames = Math.round((duration / 1000) * frameRate)

    let frame = 0

    const counterInterval = setInterval(() => {
      frame++
      setTrackLength(Math.floor((22 * frame) / totalFrames))
      setCommunityFunded(Math.floor((100 * frame) / totalFrames))
      setShuttleDays(Math.floor((7 * frame) / totalFrames))

      if (frame === totalFrames) {
        clearInterval(counterInterval)
        setTrackLength(22)
        setCommunityFunded(100)
        setShuttleDays(7)
      }
    }, 1000 / frameRate)

    return () => clearInterval(counterInterval)
  }, [])

  return (
    <section className="relative h-[840px] flex items-end md:items-center bg-gray-900 overflow-hidden">
      <div
        className="absolute right-0 top-0 bottom-0 w-full h-[480px] md:h-full lg:w-[1262px] lg:h-[894px] overflow-hidden"
        style={{
          transform: `translateY(${offsetY * 0.2}px)`,
          transition: "transform 0.1s linear",
        }}
      >
        <img
          src="/images/ccmtb-hero4.jpg"
          alt="CCMTB Hero"
          className="absolute top-12 bottom-0 right-0 md:-right-36 lg:-right-60 2xl:right-0 md:w-full h-full object-cover"
        />
        <div className="md:hidden absolute w-full h-[50px] bottom-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>


      <div className="absolute -right-20 xl:right-0 top-0 bottom-0 w-xs bg-gradient-to-l from-gray-900 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.gray.900)_5%,transparent_30%),linear-gradient(to_bottom,theme(colors.gray.900)_10%,transparent_18%)] md:bg-[linear-gradient(to_right,theme(colors.gray.900)_10%,transparent_60%),linear-gradient(to_bottom,theme(colors.gray.900)_8%,transparent_26%)] lg:bg-[linear-gradient(to_right,theme(colors.gray.900)_10%,transparent_60%),linear-gradient(to_bottom,theme(colors.gray.900)_8%,transparent_26%)] xl:bg-[linear-gradient(to_right,theme(colors.gray.900)_35%,transparent_60%),linear-gradient(to_bottom,theme(colors.gray.900)_8%,transparent_26%)]" />

      {/* Content */}
      <div className="text-center md:text-left relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
        <h1 className="text-5xl md:text-8xl font-bold mb-4 max-w-[750px]">
          <span className="md:text-[54px] block ">Explore Ourimbah</span>{" "}
          <strong>MTB Park</strong>
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Epic Trail on the Central Coast
        </p>
        <div className="flex gap-3">
              <Link
                href="#"
                className="justify-center flex items-center gap-3 bg-primary hover:bg-primary/90 font-bold pb-3 px-7 rounded-lg text-md pt-2.5 transition-colors text-foreground"
              >
                Buy A Supporter Pack <ArrowRight size={18} />
              </Link>          
              <Link
                href="#"
                className="justify-center flex items-center gap-3 bg-primary hover:bg-primary/90 font-bold pb-3 px-7 rounded-lg text-md pt-2.5 transition-colors text-foreground"
              >
                Book Shuttles <ArrowRight size={18} />
              </Link>          
        </div>
        <div className="h-[190px] md:hidden"></div>
      </div>

      

      {/* Stats Section */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-gray-900 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-2xl">
            <div className="grid grid-cols-3 gap-2 md:gap-12 text-white">
              {/* Column 1 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {trackLength}
                </div>
                <p className="text-base md:text-lg text-gray-300">
                  Track length in kms
                </p>
              </div>

              {/* Column 2 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {communityFunded}%
                </div>
                <p className="text-base md:text-lg text-gray-300">
                  Community Funded
                </p>
              </div>

              {/* Column 3 */}
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {shuttleDays}
                </div>
                <p className="text-base md:text-lg text-gray-300">
                  Shuttle days / week
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
