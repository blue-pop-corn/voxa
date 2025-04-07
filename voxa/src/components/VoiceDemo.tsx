"use client"

import React, { useEffect, useRef, useState } from "react"

const VoiceDemo = () => {
  const [isListening, setIsListening] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [response, setResponse] = useState("")
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const SpeechRecognitionClass =
      typeof window !== "undefined"
        ? window.SpeechRecognition || window.webkitSpeechRecognition
        : undefined

    if (SpeechRecognitionClass) {
      const recog = new SpeechRecognitionClass()
      recog.continuous = false
      recog.lang = "en-US"
      recog.interimResults = false
      recog.maxAlternatives = 1

      recog.onresult = async (event: SpeechRecognitionEvent) => {
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

      recog.onerror = (event: Event) => {
        const errorEvent = event as SpeechRecognitionErrorEvent
        console.error("Speech recognition error:", errorEvent.error)
        setIsListening(false)
      }

      setRecognition(recog)
    }
  }, [])

  const handleListen = () => {
    if (!recognition) return
    setUserInput("")
    setResponse("")
    setIsListening(true)
    recognition.start()
  }

  const speak = (text: string) => {
    const synth = window.speechSynthesis
    const utterance = new SpeechSynthesisUtterance(text)
  
    utterance.onstart = () => {
      startFakeWaveform()
    }
  
    utterance.onend = () => {
      stopFakeWaveform()
    }
  
    synth.speak(utterance)
  }
  
  useEffect(() => {
    if (typeof window === "undefined") return
  
    const SpeechRecognitionClass =
      typeof window !== "undefined"
        ? window.SpeechRecognition || window.webkitSpeechRecognition
        : undefined
  
    if (SpeechRecognitionClass) {
      const recog = new SpeechRecognitionClass()
      recog.continuous = false
      recog.lang = "en-US"
      recog.interimResults = false
      recog.maxAlternatives = 1
  
      recog.onresult = async (event: SpeechRecognitionEvent) => {
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
  
      recog.onerror = (event: Event) => {
        const errorEvent = event as SpeechRecognitionErrorEvent
        console.error("Speech recognition error:", errorEvent.error)
        setIsListening(false)
      }
  
      setRecognition(recog)
    }
  }, [speak]) 
  

  const startFakeWaveform = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let t = 0
    const draw = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.beginPath()
      ctx.moveTo(0, canvas.height / 2)

      for (let x = 0; x < canvas.width; x++) {
        const y =
          canvas.height / 2 +
          Math.sin((x + t) * 0.05) * 20 * Math.sin((t * 0.02)) // funky waveform
        ctx.lineTo(x, y)
      }

      ctx.strokeStyle = "#2563eb"
      ctx.lineWidth = 2
      ctx.stroke()

      t += 1
      animationRef.current = requestAnimationFrame(draw)
    }

    animationRef.current = requestAnimationFrame(draw)
  }

  const stopFakeWaveform = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
      animationRef.current = null
    }

    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">🎤 Talk to Voxa</h2>
      <button
        onClick={handleListen}
        disabled={isListening}
        className="px-6 py-3 bg-yellow-400 text-black rounded-xl hover:bg-yellow-300 transition-all font-semibold"
      >
        {isListening ? "Listening..." : "Start Talking"}
      </button>

      {userInput && (
        <div className="mt-4">
          <p className="font-medium">You said:</p>
          <p className="italic text-gray-700">{userInput}</p>
        </div>
      )}

      {response && (
        <div className="mt-4">
          <p className="font-medium">Voxa says:</p>
          <p className="italic text-blue-700">{response}</p>
        </div>
      )}

      <canvas
        ref={canvasRef}
        width={600}
        height={100}
        className="mt-6 w-full border rounded bg-gray-50"
      />
    </div>
  )
}

export default VoiceDemo
