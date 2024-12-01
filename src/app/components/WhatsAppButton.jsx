// 'use client'

// import { WhatsappButton } from '@carlos8a/react-whatsapp-floating-button'

// export default function WhatsAppButton() {
//   return (
//     <WhatsappButton
//       phone="+254796097514"
//       message="Hello Jackie, I'm interested in your services!"
//       position="right"
//       size="60px"
//       backgroundColor="#25D366"
//       textColor="#fff"
//     />
//   )
// }

'use client'

import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const handleClick = () => {
    const phone = '+254796097514'
    const message = encodeURIComponent('Hello Jackie, I\'m interested in your services!')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-4 right-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] p-4 shadow-lg"
    >
      <MessageCircle className="w-6 h-6" />
    </Button>
  )
}