import Image from "next/image"
import Link from "next/link"

export function FooterBoxes() {
  const boxes = [
    { 
      title: "Visit", 
      description: "Discover the trails and experience the thrill of Ourimbah firsthand.", 
      image: "/images/Blake-Nielsen-1000-1.jpg" 
    },
    { 
      title: "Join", 
      description: "Become part of a passionate community that builds and rides together.", 
      image: "/images/Gravity-9-1.jpg" 
    },
    { 
      title: "Ride", 
      description: "Challenge yourself across our diverse terrain, built for every rider.", 
      image: "/images/SPC-252_5269x3513_5248556-scaled.jpg" 
    },
    { 
      title: "Compete", 
      description: "Test your skills and push your limits in our local and club events.", 
      image: "/images/Sam-Whipp-1000.jpg" 
    },
  ]

  return (
    <section className="relative py-24 bg-gray-900 overflow-hidden">
      {/* Background image at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[550px]">
        <Image
          src="/images/footer-bg1.jpg"
          alt="Footer background"
          fill
          className="object-cover object-bottom"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent via-gray-900/20 to-gray-900" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900" />
      </div>

      {/* Section content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center tracking-wide">
          Be Part of the Community
        </h2>

        {/* Boxes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-lg w-full h-64 cursor-pointer"
            >
              <Image
                src={box.image}
                alt={box.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/80" />
              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 text-center px-6">
                <h3 className="text-2xl font-semibold text-white tracking-wide transition-transform duration-500 group-hover:translate-y-[-4px]">
                  {box.title}
                </h3>
                <p className="text-sm text-gray-200 mt-2 max-w-xs transition-opacity duration-500 group-hover:opacity-100 opacity-90">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          <Link
            href="#"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 font-bold py-4 px-8 rounded-lg text-lg transition-colors text-foreground"
          >
            Join the Club
          </Link>
        </div>
      </div>

      {/* Large gap below */}
      <div className="h-[500px]" />
    </section>
  )
}
