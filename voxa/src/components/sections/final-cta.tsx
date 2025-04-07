"use client"

import LeadFormModal from "../LeadFormModal";
import { VoxaButton } from "../ui/voxa-button";
import { useState } from "react"

export const FinalCTA = () => {
    const [showModal, setShowModal] = useState(false)
  
  return (
    <section className="bg-slate-900 text-white text-center py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Let your voice bot do the talking</h2>
        <p className="text-lg text-gray-300 mb-6">
          You focus on building your product. Voxa handles the conversations that convert.
        </p>
        

        </div>
    </section>
  );
};
