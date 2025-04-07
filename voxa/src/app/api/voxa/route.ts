// app/api/voxa/route.ts

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    if (!message) {
      return NextResponse.json({ reply: "No message provided." }, { status: 400 })
    }

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
      }),
    })

    if (!res.ok) {
      const error = await res.text()
      console.error("OpenAI API Error:", error)
      return NextResponse.json({ reply: "Oops! I am still new and learning, having trouble catching what you said, try saying that again" }, { status: res.status })
    }
    

    const data = await res.json()
    const reply = data.choices?.[0]?.message?.content?.trim()

    if (!reply) {
      console.warn("No reply generated from OpenAI.")
      return NextResponse.json({ reply: "Oops! I am still new and learning, having trouble catching what you said, try saying that again" }, { status: 500 })
    }

    return NextResponse.json({ reply })
  } catch (error) {
    console.error("API Route Error:", error)
    return NextResponse.json({ reply: "Sorry, something went wrong." }, { status: 500 })
  }
}
