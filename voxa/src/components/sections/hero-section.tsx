"use client"

import { useState } from "react"
import { VoxaButton } from "../ui/voxa-button"
import LeadFormModal from "../LeadFormModal"

export const HeroSection = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="w-full text-center py-20 px-6 bg-yellow-400">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Give Your Business a Voice in 60 Seconds
        </h1>
        <p className="mt-4 text-lg md:text-xl text-slate-800">
          Voxa builds custom AI voice bots that talk to your customers, book calls, and close leads — while you focus on your product.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <VoxaButton onClick={() => setShowModal(true)}>Get a Demo</VoxaButton>
          <VoxaButton variant="secondary">Hear Voxa in Action</VoxaButton>
        </div>

        {showModal && <LeadFormModal onClose={() => setShowModal(false)} />}
      </div>
    </section>
  )
}
