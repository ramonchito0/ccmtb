import { CheckCircle2 } from "lucide-react"

export function TrailStatus() {
  const trails = [
    { name: "GRAVITRON", type: "Gravity Enduro", status: "OPEN" },
    { name: "AMAROO", type: "Flow", status: "OPEN" },
    { name: "BACK IN BLACK", type: "Downhill", status: "OPEN" },
    { name: "LYREBIRD", type: "Cross Country", status: "OPEN" },
  ]

  return (
    <section
      className="pt-20 py-30 relative"
      style={{
        backgroundImage: "url(/images/Gravity-11.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="flex justify-center flex-col items-center gap-2 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">All Trails Open</h1>
            <a href="#" className="bg-primary/85 py-1 px-4 rounded inline-block text-lg text-foreground transition-colors">
              DH ROUND#3 - RESULTS
            </a>            
          </div>
          <h1 className="text-xl md:text-4xl font-bold text-white mb-3">Trail Status</h1>
          <p className="text-lg mb-4 font-bold">24th October 2025</p>
        </div>

        <div className="grid grid-cols-1 text-center md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trails.map((trail) => (
            <div
              key={trail.name}
              className="shadow-lg rounded-[10px] group bg-white/85 hover:border-primary/50 transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="p-6">
                {/* Status badge */}
                <div className="flex justify-center items-center gap-1 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs font-bold text-green-600 uppercase tracking-wider">{trail.status}</span>
                </div>

                {/* Trail info */}
                <h3 className="font-bold text-lg text-black mb-1 group-hover:text-primary transition-colors">
                  {trail.name}
                </h3>
                <p className="text-sm text-black mb-4">{trail.type}</p>
              </div>

              {/* Hover effect bar */}
              <div className="h-1 bg-gradient-to-r from-primary to-primary/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
