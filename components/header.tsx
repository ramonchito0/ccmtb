"use client"

import Link from "next/link"
import { Facebook, Instagram, ShoppingCart, User, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems] = useState(0)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Top Bar Section */}
      <div className="text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Social Media Icons */}
            <div className="flex items-center gap-2">
              <Link href="#" className="text-foreground hover:text-primary transition" title="Facebook">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition" title="Instagram">
                <Instagram size={18} />
              </Link>
              <Link href="#" className="ml-2 text-foreground hover:text-primary transition" title="CCMTB Race Results">
                CCMTB Race Results
              </Link>    
            </div>

            {/* My Account and Cart */}
            <div className="flex items-center gap-5 md:gap-6">
       
              <Link href="#" className="text-foreground hover:text-primary transition flex items-center gap-2 text-sm">
                <User size={18} />
                <span className="hidden md:inline-block">My Account</span>
              </Link>

              <Link href="#" className="text-foreground hover:text-primary transition flex items-center gap-2 text-sm">
                <ShoppingCart size={18} />
                <span>{cartItems} <span className="hidden md:inline-block">items</span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Desktop Menu - Left Side */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                <Image src="/images/CCMTB_Logo.png" alt="CCMTB Logo" width={81} height={55} />
              </Link>

              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-foreground hover:text-primary transition">
                  Home
                </Link>
                <div className="group relative">
                  <button className="text-foreground hover:text-primary transition">Trails</button>
                  <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    <Link href="#" className="block px-4 py-2 hover:bg-primary">
                      Ourimbah Trails
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-primary">
                      Trail Status
                    </Link>
                  </div>
                </div>
                <Link href="#" className="text-foreground hover:text-primary transition">
                  Compete
                </Link>
                <div className="group relative">
                  <button className="text-foreground hover:text-primary transition">Support</button>
                  <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                    <Link href="#" className="block px-4 py-2 hover:bg-primary">
                      Sponsorship
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-primary">
                      Supporter Packs
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-primary">
                      Join the Club
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-primary">
                      Donate to Ourimbah
                    </Link>
                  </div>
                </div>
                <Link href="#" className="text-foreground hover:text-primary transition">
                  Coaching
                </Link>
              </div>
            </div>

            {/* Right Menu */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="#" className="text-foreground hover:text-primary transition">
                Contact
              </Link>
              <Link href="#" className="text-foreground hover:text-primary transition">
                Shop
              </Link>
              <Link href="#" className="px-6 pt-1.5 pb-2 rounded-full bg-accent hover:bg-accent/90">
                Donate
              </Link>              
              
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-background/80 rounded-[10px] backdrop-blur-sm p-4 space-y-2">
              <Link href="/" className="block px-4 py-2 hover:bg-muted rounded">
                Home
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-muted rounded">
                Trails
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-muted rounded">
                Compete
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-muted rounded">
                Support
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-muted rounded">
                Coaching
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-muted rounded">
                Contact
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-muted rounded">
                Shop
              </Link>
              <Button className="w-full bg-accent hover:bg-accent/90">Donate</Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}
