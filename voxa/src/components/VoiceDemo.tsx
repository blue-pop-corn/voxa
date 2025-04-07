"use client"

import React, { useState } from "react"

export default function VoiceDemo() {
  const [isListening, setIsListening] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [response, setResponse] = useState("")

  const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
  }

  const handleSpeech = () => {
    const SpeechRecognition = window.SpeechRecognition || (window as any).webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.lang = "en-US"
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => {
      setIsListening(true)
    }

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event)
      setIsListening(false)
    }

    recognition.onresult = async (event: any) => {
      const transcript = event.results[0][0].transcript
      setUserInput(transcript)
      setIsListening(false)

      const res = await fetch("/api/voxa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: transcript }),
      })

      const data = await res.json()
      setResponse(data.reply)
      speak(data.reply)
    }

    recognition.start()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 text-center px-4">
      <h1 className="text-3xl font-bold">🎙️ Voxa Voice Demo</h1>

      <button
        onClick={handleSpeech}
        disabled={isListening}
        className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-xl transition-all"
      >
        {isListening ? "Listening..." : "Start Talking"}
      </button>

      {userInput && (
        <p className="text-lg">
          <strong>You:</strong> {userInput}
        </p>
      )}

      {response && (
        <p className="text-lg">
          <strong>Voxa:</strong> {response}
        </p>
      )}
    </div>
  )
}
