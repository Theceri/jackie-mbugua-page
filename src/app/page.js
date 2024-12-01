import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-white max-w-[1920px] mx-auto">
      <Header />
      <HeroSection />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}