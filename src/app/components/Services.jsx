"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Scissors, Palette } from 'lucide-react'

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scissors className="mr-2" /> Hair Styling
              </CardTitle>
              <CardDescription>Professional hair styling for any occasion</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Cutting and Trimming</li>
                <li>Coloring and Highlights</li>
                <li>Updos and Styling</li>
                <li>Hair Treatments</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => window.open('https://wa.me/254796097514?text=I%20am%20interested%20in%20your%20hair%20styling%20services')}>
                Book Hair Styling
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Palette className="mr-2" /> Makeup Artistry
              </CardTitle>
              <CardDescription>Enhance your natural beauty with professional makeup</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                <li>Bridal Makeup</li>
                <li>Special Event Makeup</li>
                <li>Photoshoot Makeup</li>
                <li>Makeup Lessons</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => window.open('https://wa.me/254796097514?text=I%20am%20interested%20in%20your%20makeup%20services')}>
                Book Makeup Service
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

