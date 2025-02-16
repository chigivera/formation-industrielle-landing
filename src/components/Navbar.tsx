// src/components/Navbar.tsx

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import LanguageSwitcher from "./LanguageSwitcher"

const Navbar = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          {t("brand")}
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="#who-we-are">{t("whoWeAre")}</NavLink>
          <NavLink href="#services">{t("services")}</NavLink>
          <NavLink href="#functionalities">{t("functionalities")}</NavLink>
          <NavLink href="#contact">{t("contact")}</NavLink>
          <LanguageSwitcher />
        </div>
        <div className="md:hidden flex items-center">
          <LanguageSwitcher />
          <button onClick={() => setIsOpen(!isOpen)} className="ml-4">
            <Menu className="h-6 w-6" />
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
            <NavLink href="#who-we-are" onClick={() => setIsOpen(false)}>
              {t("whoWeAre")}
            </NavLink>
            <NavLink href="#services" onClick={() => setIsOpen(false)}>
              {t("services")}
            </NavLink>
            <NavLink href="#functionalities" onClick={() => setIsOpen(false)}>
              {t("functionalities")}
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsOpen(false)}>
              {t("contact")}
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) => (
  <Link href={href} className="text-gray-600 hover:text-primary transition-colors" onClick={onClick}>
    {children}
  </Link>
)

export default Navbar

