// src/components/LanguageSwitcher.tsx
"use client"
import { useRouter, usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

const languages = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "ar", flag: "🇲🇦", name: "العربية" },
]

const LanguageSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const changeLanguage = (lang: string) => {
    const currentPath = pathname || "/"
    const newPath = currentPath.replace(/^\/[^/]+/, `/${lang}`)
    router.push(newPath)
  }

  const currentFlag = languages.find((lang) => lang.code === locale)?.flag || languages[0].flag

  return (
    <Select onValueChange={changeLanguage} defaultValue={locale}>
      <SelectTrigger className="w-[60px] bg-white/90 border-none">
        <SelectValue>
          <span className="text-xl mr-4">{currentFlag}</span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code} className="flex items-center">
            <span className="text-xl mr-2">{lang.flag}</span>
            <span>{lang.name}</span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default LanguageSwitcher

