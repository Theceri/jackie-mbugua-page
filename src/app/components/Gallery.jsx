import Image from 'next/image'

export default function Gallery() {
  const images = [
    { src: '/placeholder.svg', alt: 'Hair styling example 1' },
    { src: '/placeholder.svg', alt: 'Makeup example 1' },
    { src: '/placeholder.svg', alt: 'Hair styling example 2' },
    { src: '/placeholder.svg', alt: 'Makeup example 2' },
    { src: '/placeholder.svg', alt: 'Hair styling example 3' },
    { src: '/placeholder.svg', alt: 'Makeup example 3' },
  ]

  return (
    <section id="gallery" className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
