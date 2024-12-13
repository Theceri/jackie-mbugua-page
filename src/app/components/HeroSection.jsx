'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import useParallax from '../hooks/useParallax'

export default function HeroSection() {
  const parallaxStyle = useParallax(0.5)

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div style={parallaxStyle} className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg"
          alt="Jackie Mbugua - PRO Hair Stylist and Makeup Artist"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="container mx-auto px-4 z-20 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Transform Your Look</h1>
        <p className="text-xl md:text-2xl mb-8">Professional Hair Styling and Makeup Services by Jackie Mbugua</p>
        <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
          Book Now
        </Button>
      </div>
    </section>
  )
}

