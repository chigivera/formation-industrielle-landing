// src/components/Navbar.tsx

"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import LanguageSwitcher from "./LanguageSwitcher"
import Image from "next/image"

const navLinks = [
  { href: "#who-we-are", translationKey: "whoWeAre" },
  { href: "#services", translationKey: "services" },
  { href: "#team", translationKey: "team" },
  { href: "#functionalities", translationKey: "functionalities" },
  { href: "#contact", translationKey: "contact" },
]

const Navbar = () => {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine which section is currently in view
      const sections = navLinks.map((link) => link.href.substring(1)) // Remove # from href

      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          // If the section is in the viewport (with some buffer for navbar height)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(`#${sections[i]}`)
            break
          }
        }
      }

      // If we're at the top of the page, no section is active
      if (window.scrollY < 100) {
        setActiveSection("")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-10 mr-2">
            <Image src="/images/logo.png" alt={t("brand")} layout="fill" objectFit="contain" />
          </div>
          <span className={`text-2xl font-bold ${scrolled ? "text-primary" : "text-white"}`}>{t("brand")}</span>
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} scrolled={scrolled} isActive={activeSection === link.href}>
              {t(link.translationKey)}
            </NavLink>
          ))}
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)} className="ml-4">
            <Menu className={`h-6 w-6 ${scrolled ? "text-primary" : "text-white"}`} />
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                scrolled={true}
                isActive={activeSection === link.href}
              >
                {t(link.translationKey)}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}

const NavLink = ({
  href,
  children,
  onClick,
  scrolled = false,
  isActive = false,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
  scrolled?: boolean
  isActive?: boolean
}) => (
  <Link
    href={href}
    className={`font-medium transition-colors relative ${
      scrolled
        ? isActive
          ? "text-primary font-bold"
          : "text-gray-800 hover:text-primary"
        : isActive
          ? "text-primary font-bold"
          : "text-white hover:text-primary"
    }`}
    onClick={onClick}
  >
    {children}
    {isActive && <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-primary rounded-full"></span>}
  </Link>
)

export default Navbar

