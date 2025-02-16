// src/components/Footer.tsx

"use client"

import Link from "next/link"
import { Facebook, Twitter, LinkedinIcon as LinkedIn } from "lucide-react"
import { useTranslations } from "next-intl"

const Footer = () => {
  const t = useTranslations();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t("brand")}</h3>
            <p className="text-gray-400">{t("footerDescription")}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("quickLinks")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#who-we-are" className="text-gray-400 hover:text-white">
                  {t("whoWeAre")}
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white">
                  {t("services")}
                </Link>
              </li>
              <li>
                <Link href="#functionalities" className="text-gray-400 hover:text-white">
                  {t("functionalities")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("legal")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">
                  {t("termsOfService")}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">
                  {t("privacyPolicy")}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t("followUs")}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {t("brand")}. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

