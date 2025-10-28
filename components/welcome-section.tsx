"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function WelcomeSection() {
  return (
    <section className="py-20 bg-gray-900 relative">
      <div className="absolute -top-10 left-0 w-full h-[70px] bg-gradient-to-b from-transparent via-gray-900/90 to-gray-900" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative h-96 lg:h-full min-h-96">
            <img
              src="/images/XC-MTB-scaled.jpg"
              alt="CCMTB Community"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Text Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-foreground text-balance">
                Welcome to Ourimbah
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-4">
                Central Coast Mountain Bike Club (CCMTB) is a not-for-profit organisation dedicated to creating, building, 
                and maintaining the trails we all love to ride. Every dollar raised goes straight back into the park.
              </p>
            </div>

            {/* Highlight Box */}
            <div className="bg-primary/15 p-8 border-l-4 border-primary rounded-tr-[10px] rounded-br-[10px] shadow-md">
              <p className="text-primary font-bold text-xl mb-2">
                For the riders. For your friends & family.
              </p>
              <p className="text-foreground/80 text-base">
                100% community funded — every supporter helps keep Ourimbah rolling.
              </p>

              <div className="mt-6">
                <Link
                  href="#"
                  className="justify-center inline-flex items-center gap-3 bg-primary hover:bg-primary/90 font-bold pb-3 px-7 rounded-lg text-md pt-2.5 transition-colors text-foreground"
                >
                  Buy a Supporter Pack <ArrowRight size={18} />
                </Link>                   
              </div>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              We’re grateful to operate under a permit from Forestry Corporation NSW. 
              Our trails are built and maintained entirely by volunteers — 
              so every bit of help, whether financial or physical, keeps the adventure alive for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
