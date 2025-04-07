// types/speech.d.ts

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult
  length: number
}
interface SpeechRecognitionErrorEvent extends Event {
  error: string
  message: string
}

interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative
  isFinal: boolean
  length: number
}

interface SpeechRecognitionAlternative {
  transcript: string
  confidence: number
}

interface SpeechRecognition extends EventTarget {
  lang: string
  continuous: boolean
  interimResults: boolean
  maxAlternatives: number
  onaudioend: (event: Event) => void
  onaudiostart: (event: Event) => void
  onend: (event: Event) => void
  onerror: (event: Event) => void
  onnomatch: (event: Event) => void
  onresult: (event: SpeechRecognitionEvent) => void
  onsoundend: (event: Event) => void
  onsoundstart: (event: Event) => void
  onspeechend: (event: Event) => void
  onspeechstart: (event: Event) => void
  onstart: (event: Event) => void
  start(): void
  stop(): void
  abort(): void
}

interface Window {
  SpeechRecognition: new () => SpeechRecognition
  webkitSpeechRecognition: new () => SpeechRecognition
}
