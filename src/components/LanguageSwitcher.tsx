// src/components/LanguageSwitcher.tsx
"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
const languages = ["en", "fr","ar"];
const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations();

  const changeLanguage = (lang: string) => {
    const currentPath = pathname || "/";
    const newPath = currentPath.replace(/^\/[^/]+/, `/${lang}`);
    router.push(newPath);
  };

  return (
    <Select onValueChange={changeLanguage} defaultValue={locale}>
      <SelectTrigger className="w-[120px]">
        <SelectValue placeholder={t("language")} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang} value={lang}>
            {lang.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;