"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { UserButton } from "@clerk/nextjs"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/forums", label: "Forums" },
    { href: "/chat", label: "About Us" },
  ]

  return (
    <nav
      className={`bg-[#1A202C] text-[#F9FAFB] py-3 md:py-4 fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl bg-opacity-95 backdrop-blur-sm" : "shadow-lg"
      } ${isOpen ? "h-screen md:h-auto" : ""}`}
    >
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center px-6 lg:px-20">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden">
              <Image
                src="/x.jpg"
                alt="ConvoNetX Logo"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 40px, 48px"
                className="rounded-full transition duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-[#A076F9]"
                priority
              />
            </div>
            <span className="text-2xl md:text-3xl font-bold tracking-wide ml-2 md:ml-4 bg-gradient-to-r from-[#A076F9] to-[#D2A2FF] text-transparent bg-clip-text transition-all duration-300 group-hover:from-[#D2A2FF] group-hover:to-[#A076F9]">
              ConvoNetX
            </span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <UserButton
              className="transition duration-300 hover:scale-110 hover:ring-2 hover:ring-[#A076F9] rounded-full mr-4"
              afterSignOutUrl="/"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A076F9] transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6 text-[#D2A2FF]" /> : <Menu className="h-6 w-6 text-[#D2A2FF]" />}
            </button>
          </div>
        </div>

        {/* Desktop & Mobile Navigation */}
        <div
          className={`${
            isOpen ? "flex flex-col mt-4" : "hidden md:flex"
          } md:items-center md:space-x-1 lg:space-x-6 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-2 lg:space-x-6 space-y-4 md:space-y-0">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`font-medium text-xl md:text-lg lg:text-xl transition duration-300 block py-2 md:py-0 px-3 md:px-2 rounded-md md:rounded-none ${
                    pathname === link.href
                      ? "bg-gradient-to-r from-[#A076F9] to-[#D2A2FF] text-transparent bg-clip-text md:text-[#D2A2FF]"
                      : "text-gray-200 hover:bg-[#2D3748] md:hover:bg-transparent md:hover:text-[#D2A2FF]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#A076F9] to-[#D2A2FF] transition-all duration-300 ${
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    } hidden md:block`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop user button */}
          <div className="hidden md:block">
            <UserButton
              className="transition duration-300 hover:scale-110 hover:ring-2 hover:ring-[#A076F9] rounded-full"
              afterSignOutUrl="/"
            />
          </div>
        </div>
      </div>

      {/* Fullscreen mobile menu background */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-[#1A202C] bg-opacity-95 z-[-1]"></div>}
    </nav>
  )
}

export default Navbar

