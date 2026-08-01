import React, { useState, useEffect, useRef } from "react"
import { Mic, MicOff } from "lucide-react"

const VoiceInputButton = ({ onTranscript, className = "" }) => {
  const [isListening, setIsListening] = useState(false)
  const [isSupported, setIsSupported] = useState(true)
  const recognitionRef = useRef(null)

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition

    if (!SpeechRecognition) {
      setIsSupported(false)
      return
    }

    try {
      const recognition = new SpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = "en-US"

      recognition.onresult = (event) => {
        if (event.results && event.results[0] && event.results[0][0]) {
          const transcript = event.results[0][0].transcript
          if (transcript && onTranscript) {
            onTranscript(transcript)
          }
        }
      }

      recognition.onerror = (event) => {
        // Silently handle common benign speech recognition errors (no-speech, aborted, etc)
        setIsListening(false)
      }

      recognition.onend = () => {
        setIsListening(false)
      }

      recognitionRef.current = recognition
    } catch (e) {
      setIsSupported(false)
    }
  }, [onTranscript])

  const toggleListening = () => {
    if (!isSupported || !recognitionRef.current) {
      alert("Speech recognition is not supported in this browser.")
      return
    }

    if (isListening) {
      try {
        recognitionRef.current.stop()
      } catch (err) {
        // Ignore stop errors if already stopped
      }
      setIsListening(false)
    } else {
      try {
        recognitionRef.current.start()
        setIsListening(true)
      } catch (err) {
        // Handle edge case where recognition is already running
        try {
          recognitionRef.current.stop()
          setTimeout(() => {
            try {
              recognitionRef.current.start()
              setIsListening(true)
            } catch (e) {
              setIsListening(false)
            }
          }, 100)
        } catch (e) {
          setIsListening(false)
        }
      }
    }
  }

  return (
    <button
      type="button"
      onClick={toggleListening}
      title={isListening ? "Stop Voice Input" : "Start Voice Input"}
      className={`p-1.5 rounded-full transition-all cursor-pointer flex items-center justify-center ${isListening
          ? "bg-red-500 text-white animate-pulse"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
        } ${className}`}
    >
      {isListening ? (
        <MicOff className="w-4 h-4" />
      ) : (
        <Mic className="w-4 h-4" />
      )}
    </button>
  )
}

export default VoiceInputButton
