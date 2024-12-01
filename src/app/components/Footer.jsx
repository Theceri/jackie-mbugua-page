import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Jackie Mbugua</h3>
            <p>PRO Hair Stylist and Makeup Artist</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-400"><Facebook /></a>
            <a href="#" className="hover:text-pink-400"><Instagram /></a>
            <a href="#" className="hover:text-pink-400"><Twitter /></a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Jackie Mbugua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

