'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">Jackie Mbugua</h1>
        <nav className="hidden md:flex space-x-4">
          <a href="#services" className="text-gray-600 hover:text-pink-600">Services</a>
          <a href="#gallery" className="text-gray-600 hover:text-pink-600">Gallery</a>
          <a href="#testimonials" className="text-gray-600 hover:text-pink-600">Testimonials</a>
          <a href="#contact" className="text-gray-600 hover:text-pink-600">Contact</a>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white p-4">
          <a href="#services" className="block py-2 text-gray-600 hover:text-pink-600">Services</a>
          <a href="#gallery" className="block py-2 text-gray-600 hover:text-pink-600">Gallery</a>
          <a href="#testimonials" className="block py-2 text-gray-600 hover:text-pink-600">Testimonials</a>
          <a href="#contact" className="block py-2 text-gray-600 hover:text-pink-600">Contact</a>
        </nav>
      )}
    </header>
  )
}

