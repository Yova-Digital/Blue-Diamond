import Hero from "@/components/hero"
import RegistrationSection from "@/components/RegistrationSection"
import Features from "@/components/features"
import About from "@/components/about"
import Services from "@/components/services"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <RegistrationSection />
      <Features />
      <ContactForm />
    </main>
  )
} 
