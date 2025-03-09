// src/components/Contact.tsx

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { useTranslations } from "next-intl"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import Image from "next/image"
import { PhoneInput } from "./ui/phone-input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(8, { message: "Please enter a valid phone number." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const Contact = () => {
  const t = useTranslations()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Construct WhatsApp API URL
    const whatsappNumber = "+212522123456" // Replace with your actual WhatsApp number
    const message = `Name: ${values.name}%0APhone: ${values.phone}%0AMessage: ${values.message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    // Show success message
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset()
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          {t("contactUs")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[500px] rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src="/images/contact.jpg"
              alt="Contact us"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="bg-green-50 p-8 rounded-lg shadow-md text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-700 mb-2">{t("messageSent")}</h3>
                <p className="text-green-600">{t("whatsappOpening")}</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("name")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("name")} {...field} className="border-gray-300" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("phoneNumber")}</FormLabel>
                        <FormControl>
                          <PhoneInput
                            placeholder={t("phoneNumber")}
                            value={field.value}
                            onChange={field.onChange}
                            defaultCountry="MA"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("message")}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t("message")} className="min-h-[120px] border-gray-300" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        {t("sending")}
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                        {t("sendViaWhatsapp")}
                      </div>
                    )}
                  </Button>
                </form>
              </Form>
            )}

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">{t("phoneNumber")}</h4>
                  <p className="text-gray-600">+212 522 123 456</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">{t("emailAddress")}</h4>
                  <p className="text-gray-600">contact@formationindustrielle.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">{t("location")}</h4>
                  <p className="text-gray-600">Casablanca, Morocco</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">{t("businessHours")}</h4>
                  <p className="text-gray-600">Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

