import { NextResponse } from 'next/server'

const credentials = {
  apiKey: process.env.AFRICAS_TALKING_API_KEY,
  username: process.env.AFRICAS_TALKING_USERNAME,
}

const AfricasTalking = require('africastalking')(credentials)

export async function POST(req) {
  const { phone, message } = await req.json()

  try {
    const sms = AfricasTalking.SMS
    const result = await sms.send({
      to: phone,
      message: message,
      from: 'JackieBeauty'
    })

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error('Error sending SMS:', error)
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}