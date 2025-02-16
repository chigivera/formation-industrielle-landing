// src/components/Contact.tsx

"use client"

import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useTranslations } from "next-intl"

const Contact = () => {
  const t = useTranslations();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t("contactUs")}
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto space-y-4"
        >
          <Input type="text" placeholder={t("name")} />
          <Input type="email" placeholder={t("email")} />
          <Textarea placeholder={t("message")} />
          <Button type="submit" className="w-full">
            {t("send")}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact

