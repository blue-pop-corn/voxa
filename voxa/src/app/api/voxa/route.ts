// app/api/voxa/route.ts

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { message } = await req.json()

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

  const data = await res.json()
  const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't reply."

  return NextResponse.json({ reply })
}
