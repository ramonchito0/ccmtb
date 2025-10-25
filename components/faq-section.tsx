"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Are there Shuttles?",
      answer:
        "To shuttle the Gravity Zone, please book with Transition Extreme via their website.",
    },
    {
      question: "Can I self shuttle?",
      answer:
        "Yes, you can. However, please be mindful that Red Hill Rd is a public road, and we ask you to drop off at the public shuttle drop-off point.",
    },
    {
      question: "Parking",
      answer:
        "Parking for the main trailhead is on Red Hill Rd, Ourimbah. If you Google 'Central Coast Mountain Bike Club Trailhead & Parking,' it will take you to the parking area.",
    },
    {
      question: "Where are the trails?",
      answer:
        "The main trailhead is on the corner of Mitchels Ridge Road and the Princes Highway, just north of Dalmeny. Approximately 10 minutes drive from the township of Narooma.",
    },
    {
      question: "Are the MTB trails free to ride?",
      answer: "Yes, they are!",
    },
    {
      question: "What are the trails like?",
      answer:
        "We have a mix of trails right from beginner to expert, including a national-level downhill track! There are four main gravity trails, and one main XC loop, with a number of offshoots and diversions.",
    },
    {
      question: "What to do in a MTB emergency?",
      answer: "Please visit our Emergency Procedures page.",
    },
    {
      question: "Mobile phone reception",
      answer:
        "There is some reception in the park; however, due to undulating terrain, mobile reception can be patchy. Move to higher ground if signal is unavailable. Don’t rely on reception being available at all times in all locations in the trail network.",
    },
    {
      question: "Can I purchase food and drinks at the trailhead?",
      answer: "No, there is no food or drinks available.",
    },
    {
      question: "Is there toilets at the park?",
      answer: "Yes, there are drop toilets located at the trailhead.",
    },
    {
      question: "Is there water available at the park?",
      answer: "No! Please ensure to bring water so you can stay adequately hydrated.",
    },
    {
      question: "Are the trails suitable for beginners and kids?",
      answer:
        "Please see our trails section info on our green trails and ride to your ability.",
    },
    {
      question: "Are there any current trail closures?",
      answer: "Please check our trail status section.",
    },
    {
      question: "Can I ride my E-bike?",
      answer: "Yes! E-Bikes are very popular on our trails.",
    },
    {
      question: "Are bathroom facilities available?",
      answer:
        "Yes! We have drop toilets at the Mitchels Ridge Trailhead/carpark.",
    },
    {
      question: "Can I become a MTB member, even if I'm not a local?",
      answer: "Yes, you can. We welcome all new members.",
    },
    {
      question: "How do I become a Central Coast MTB Club member?",
      answer:
        "To be a member, you must have a current membership with AusCycling. AusCycling is the National Organisation overseeing our club. Please see the AusCycling website.",
    },
  ]

  return (
    <section className="py-16 bg-slate-200 border-b border-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-balance text-black">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="text-black overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-foreground hover:bg-foreground/90 transition"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                <ChevronDown size={20} className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-foreground">
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
