import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/images/CCMTB_Logo.png" alt="CCMTB Logo" width={81} height={55} />
            </div>
            <p className="text-sm mb-4">
              Central Coast Mountain Bike Club - Building and maintaining the trails we love to ride.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="mailto:info@ccmtb.com.au" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/trails" className="hover:text-primary transition-colors">
                  Ourimbah Trails
                </Link>
              </li>
              <li>
                <Link href="/trail-status" className="hover:text-primary transition-colors">
                  Trail Status
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="hover:text-primary transition-colors">
                  Coaching
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/support/join" className="hover:text-primary transition-colors">
                  Join the Club
                </Link>
              </li>
              <li>
                <Link href="/support/donate" className="hover:text-primary transition-colors">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="/support/sponsorship" className="hover:text-primary transition-colors">
                  Become a Sponsor
                </Link>
              </li>
              <li>
                <Link href="/support/supporter-packs" className="hover:text-primary transition-colors">
                  Supporter Packs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://www.ccmtb.com.au/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Shop
                </a>
              </li>
              <li>
                <a href="mailto:info@ccmtb.com.au" className="hover:text-primary transition-colors">
                  info@ccmtb.com.au
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-wrap gap-4 text-sm">
              <Link href="/policies/social-media" className="hover:text-primary transition-colors">
                Social Media Rules
              </Link>
              <Link href="/policies/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/policies/payment-refund" className="hover:text-primary transition-colors">
                Payment & Refund Policy
              </Link>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} Central Coast Mountain Bike Club. All rights reserved.
            </p>
            <p className="text-xs">
              Credits: Images by SPC Photography | Art Work by Looney Parrot | Vision by Skol Media | ABN 48 153 469 801
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
