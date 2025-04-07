// app/api/lead/route.ts

import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  const { email } = body

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: "Voxa <onboarding@resend.dev>",
      to: "bhurva007@gmail.com",
      subject: "🚀 New Voxa Lead",
      html: `<p><strong>Email:</strong> ${email}</p>`,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Email send failed:", error)
    return NextResponse.json({ error: "Email send failed" }, { status: 500 })
  }
}