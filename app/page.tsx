import Hero from "@/components/hero"
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
      <Features />
      <ContactForm />
    </main>
  )
}
