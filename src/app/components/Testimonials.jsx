import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah K.',
      content: 'Jackie did an amazing job on my wedding day! My hair and makeup were perfect and lasted all day.',
      avatar: '/placeholder.svg',
    },
    {
      name: 'Emily M.',
      content: 'I always leave feeling confident and beautiful after my appointments with Jackie. Highly recommended!',
      avatar: '/placeholder.svg',
    },
    {
      name: 'Lisa T.',
      content: "Jackie's attention to detail is incredible. She really listens to what you want and delivers every time.",
      avatar: '/placeholder.svg',
    },
  ]

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Avatar className="mr-2">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  {testimonial.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

