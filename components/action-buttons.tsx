"use client"

import { useState } from "react"
import { Heart, MapPin, Zap, Trophy, Users, Gift } from "lucide-react"

export function ActionButtons() {
  const [eventLink, setEventLink] = useState("XC3 Race - Live Timing")
  const [eventUrl, setEventUrl] = useState("#")

  const buttons = [
    {
      icon: Heart,
      label: "Support the Park",
      description: "Help maintain our trails",
      url: "https://www.ccmtb.com.au/",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Zap,
      label: "Book Shuttles",
      description: "Get to the top faster",
      url: "https://transitionextreme.com.au",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: MapPin,
      label: "Explore Trails",
      description: "Discover new routes",
      url: "#trails",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Trophy,
      label: eventLink,
      description: "Check live results",
      url: eventUrl,
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Users,
      label: "Join the Club",
      description: "Become a member",
      url: "#join",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Gift,
      label: "Donate",
      description: "Support our community",
      url: "#",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-slate-200 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buttons.map((btn, idx) => {
            const Icon = btn.icon
            return (
              <a
                key={idx}
                href={btn.url}
                className="group relative overflow-hidden p-8"
              >
                <div
                  className={`absolute inset-0 bg-foreground rounded-[10px] shadow-xs
`}
                />

                <div className="relative z-10 flex flex-col items-center text-center gap-1">
                  <div
                    className={`p-5 rounded-full bg-gradient-to-br ${btn.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="mt-2 text-lg font-bold transition-colors duration-300">
                    {btn.label}
                  </h3>

                  <p className="text-sm transition-colors duration-300">
                    {btn.description}
                  </p>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
