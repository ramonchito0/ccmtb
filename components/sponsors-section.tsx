import Image from "next/image"
import { Trophy, Medal, Award } from "lucide-react"

export function SponsorsSection() {
  const sponsors = {
    gold: [
      { name: "Coastal Bike Co", logo: "/images/logos/Coastal_Logo_GoldSponsors.jpg" },
      { name: "Angry Goat Trails", logo: "/images/logos/AngryGoatTrails_GoldSponsors.jpg" },
      { name: "Earth Connect", logo: "/images/logos/EarthConnect_GoldSponsors.jpg" },
      { name: "Giant Tuggerah", logo: "/images/logos/GiantTuggerah_GoldSponsors.jpg" },
      { name: "Transition Extreme", logo: "/images/logos/TransitionExtreme_GoldSponsors.jpg" },
    ],
    silver: [
      { name: "Bicycle Techbar", logo: "/images/logos/BicycleTechbarLogo_SilverSponsors.jpg" },
      { name: "Crofto", logo: "/images/logos/CroftoLogo_SilverSponsors.jpg" },
      { name: "AJ Scarr", logo: "/images/logos/AJ_Scarr_logo_SilverSponsors.jpg" },
      { name: "Flash Gordon Photography", logo: "/images/logos/FlashGordonPhotography_SilverSponsors.jpg" },
    ],
    bronze: [
      { name: "Built Republic", logo: "/images/logos/BuiltRepublic_BronzeSponsors.jpg" },
      { name: "Elders Insurance", logo: "/images/logos/EldersInsurance_BronzeSponsor.jpg" },
      { name: "Lift3", logo: "/images/logos/Lift3_BronzeSponsor.jpg" },
      { name: "My Ride", logo: "/images/logos/MyRide_BronzeSponsor.jpg" },
      { name: "NSW Forests", logo: "/images/logos/NSW_Forests_BronzeSponsor.jpg" },
      { name: "Slam Factory", logo: "/images/logos/SlamFactory_BronzeSponsor.jpg" },
      { name: "Tall Tree Creative", logo: "/images/logos/TallTreeCreative_BronzeSponsor.jpg" },
    ],
  }

  const renderSponsors = (tier, sponsors) => {
    const iconProps = "w-7 h-7 mr-2"
    let icon
    let color

    switch (tier) {
      case "gold":
        icon = <Trophy className={`${iconProps} text-yellow-500`} />
        color = "text-yellow-600"
        break
      case "silver":
        icon = <Medal className={`${iconProps} text-gray-400`} />
        color = "text-gray-500"
        break
      case "bronze":
        icon = <Award className={`${iconProps} text-amber-700`} />
        color = "text-amber-700"
        break
    }

    return (
      <div className="mb-16">
        <div className="flex items-center justify-center mb-8">
          {icon}
          <h3 className={`text-3xl font-semibold ${color}`}>
            {tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="flex justify-center items-center rounded">
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={100}
                className="object-contain grayscale hover:grayscale-0 transition duration-300 rounded"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 bg-slate-200 border-b border-border border-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
          Grateful for Our Community of Sponsors
        </h2>
        <p className="text-lg sm:text-xl mb-16 text-slate-700 max-w-3xl mx-auto">
          We’re incredibly thankful to our local businesses and partners who help us build, maintain, and grow the trails
          we all love. Every contribution helps keep Ourimbah thriving for riders of all levels.
        </p>

        {renderSponsors("gold", sponsors.gold)}
        {renderSponsors("silver", sponsors.silver)}
        {renderSponsors("bronze", sponsors.bronze)}

        <p className="mt-20 text-slate-600 text-base">
          Interested in supporting? <a href="#" className="text-primary font-semibold hover:underline">Become a Sponsor</a>
        </p>          
      </div>
    </section>
  )
}
