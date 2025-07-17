"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, useAnimation, useInView, Variants } from "framer-motion"
import { useLanguage } from "./language-provider"
import { Send, Phone, Mail, MapPin, MessageSquare, User, MailIcon, PhoneIcon } from "lucide-react"
import emailjs from '@emailjs/browser'

const FloatingInput = ({ id, label, type = "text", value, onChange, placeholder, icon: Icon, required = false }: any) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative w-full mb-6">
      <div className={`
        absolute left-4 top-1/2 -translate-y-1/2 z-10
        ${isFocused || value ? 'text-blue-500' : 'text-gray-400'}
        transition-colors duration-300
      `}>
        <Icon className="w-5 h-5" />
      </div>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={`
          w-full pl-12 pr-6 py-4 bg-white dark:bg-gray-800/50
          border-2 rounded-xl focus:outline-none transition-all duration-300
          ${isFocused || value ? 'border-blue-500' : 'border-gray-200 dark:border-gray-700'}
          text-gray-800 dark:text-white placeholder-transparent
          backdrop-blur-sm
        `}
        placeholder={placeholder}
        dir={id === "phone" ? "ltr" : undefined}
        style={id === "phone" ? { direction: "ltr", unicodeBidi: "isolate" } : undefined}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-12 px-1 -top-2.5 bg-white dark:bg-gray-900
          text-xs font-medium transition-all duration-300
          ${isFocused || value ? 'text-blue-500' : 'text-gray-500'}
        `}
      >
        {label}
      </label>
    </div>
  )
}

const FloatingTextarea = ({ id, label, value, onChange, placeholder, required = false }: any) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative w-full mb-6">
      <div className={`
        absolute left-4 top-4 z-10
        ${isFocused || value ? 'text-blue-500' : 'text-gray-400'}
        transition-colors duration-300
      `}>
        <MessageSquare className="w-5 h-5" />
      </div>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={5}
        className={`
          w-full pl-12 pr-6 py-4 bg-white dark:bg-gray-800/50
          border-2 rounded-xl focus:outline-none transition-all duration-300
          ${isFocused || value ? 'border-blue-500' : 'border-gray-200 dark:border-gray-700'}
          text-gray-800 dark:text-white placeholder-transparent
          backdrop-blur-sm resize-none
        `}
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className={`
          absolute left-12 px-1 -top-2.5 bg-white dark:bg-gray-900
          text-xs font-medium transition-all duration-300
          ${isFocused || value ? 'text-blue-500' : 'text-gray-500'}
        `}
      >
        {label}
      </label>
    </div>
  )
}

// حذف ContactCard القديم واستبداله بمكون جديد للأيقونة فقط مع النسخ
const ContactIcon = ({ icon: Icon, value, color, label }: { icon: any, value: string, color: string, label: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // يمكن إضافة معالجة خطأ هنا
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleCopy}
        aria-label={label}
        className={`group p-5 rounded-2xl ${color} text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400`}
        type="button"
      >
        <Icon className="w-8 h-8" />
      </button>
      {copied && (
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs rounded px-2 py-1 shadow-lg animate-fade-in-out z-20 whitespace-nowrap">
          تم النسخ
        </span>
      )}
    </div>
  );
};

export default function ContactForm() {
  const { t } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using EmailJS
      await emailjs.send(
        'service_m77xks3', // Service ID
        'template_7b036pg', // Template ID
        {
          fullName: formData.name, // Using name as fullName for template
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          date: new Date().toLocaleString(),
        },
        'WgosXKTCh0k4qROqR' // Replace with your actual public key
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Show success message
      const successEl = document.getElementById('success-message')
      if (successEl) {
        successEl.classList.remove('opacity-0', 'translate-y-4')
        successEl.classList.add('opacity-100', 'translate-y-0')

        setTimeout(() => {
          successEl.classList.remove('opacity-100', 'translate-y-0')
          successEl.classList.add('opacity-0', 'translate-y-4')
        }, 3000)
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Show error message
      alert(t('contact.errorMessage') || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number = 0) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        delay: i * 0.1
      }
    })
  }

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800/50"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 w-96 h-96 bg-blue-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={itemVariants}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
            {t("contact.subtitle")}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            {t("contact.title")}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="space-y-6 flex flex-col items-center lg:items-start"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-gray-900 dark:text-white">
              {t("contact.getInTouch")}
            </motion.h3>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-8">
              {t("contact.availability")}
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-8 mt-6">
              <ContactIcon
                icon={Phone}
                value={"+971 50 6347214"}
                color="bg-blue-500"
                label={t("contact.phoneLabel")}
              />
              <ContactIcon
                icon={Mail}
                value={"ceo@bluediamond.ae"}
                color="bg-emerald-500"
                label={t("contact.emailLabel")}
              />
              <ContactIcon
                icon={MapPin}
                value={t("contact.location")}
                color="bg-amber-500"
                label={t("contact.locationLabel")}
              />
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={itemVariants}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-500/10 rounded-full -z-10"></div>

              <form onSubmit={handleSubmit} className="relative z-10">
                <FloatingInput
                  id="name"
                  label={t("contact.name")}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  icon={User}
                  required
                />

                <div className="grid md:grid-cols-2 gap-6">
                  <FloatingInput
                    id="email"
                    type="email"
                    label={t("contact.email")}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    icon={MailIcon}
                    required
                  />

                  <FloatingInput
                    id="phone"
                    type="tel"
                    label={t("contact.phone")}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    icon={PhoneIcon}
                    required
                  />
                </div>

                <FloatingInput
                  id="subject"
                  label={t("contact.subject")}
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  icon={MessageSquare}
                  required
                />

                <FloatingTextarea
                  id="message"
                  label={t("contact.message")}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your financing needs..."
                  required
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`
                    relative w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold 
                    rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105
                    flex items-center justify-center gap-x-2 overflow-hidden group
                    ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t("contact.sending")}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        <span>{t("contact.submit")}</span>
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>

                {/* Success Message */}
                <motion.div
                  id="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  className="mt-6 p-4 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg text-sm transition-all duration-500 opacity-0 translate-y-4"
                >
                  {t("contact.successMessage")}
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
