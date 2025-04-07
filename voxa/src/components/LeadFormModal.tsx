// components/LeadFormModal.tsx
"use client"

import { useState } from "react"

const LeadFormModal = ({ onClose }: { onClose: () => void }) => {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 text-xl hover:text-gray-800"
        >
          ×
        </button>

        {submitted ? (
          <p className="text-green-600 font-medium">Thanks! We’ll be in touch soon 👋</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold mb-2">Get a Demo</h2>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded mb-4"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold py-2 rounded"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default LeadFormModal