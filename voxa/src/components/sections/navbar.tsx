"use client"

import LeadFormModal from "../LeadFormModal";
import { VoxaButton } from "../ui/voxa-button";
import { useState } from "react"
export const Navbar = () => {
    const [showModal, setShowModal] = useState(false)
  
  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-white border-b">
      <h1 className="text-xl font-bold text-slate-900">Voxa</h1>
      <VoxaButton onClick={() => setShowModal(true)}>Get a Demo</VoxaButton>
      {showModal && <LeadFormModal onClose={() => setShowModal(false)} />}
      </nav>
  );
};
