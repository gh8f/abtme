"use client"

import { useState, useEffect } from "react"

export default function Component() {
  const [entered, setEntered] = useState(false)
  const [userIP, setUserIP] = useState("")

  // Generate random IP address
  const generateRandomIP = () => {
    const octet = () => Math.floor(Math.random() * 256)
    return `${octet()}.${octet()}.${octet()}.${octet()}`
  }

  useEffect(() => {
    setUserIP(generateRandomIP())
  }, [])

  const handleEnter = () => {
    setEntered(true)
  }

  if (!entered) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center cursor-pointer" onClick={handleEnter}>
        <div className="text-center">
          <h1
            className="text-white text-4xl md:text-6xl font-bold animate-pulse"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Click to Enter
          </h1>
          <div className="mt-4">
            <div className="w-2 h-2 bg-white rounded-full mx-auto animate-bounce"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Snow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div className="text-center">
          <h1
            className="text-white text-5xl md:text-7xl font-bold mb-8 animate-fadeInUp"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            {"Hi, I'm gh8f.".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-letterDrop"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          <p
            className="text-white text-xl md:text-2xl animate-slideInFromBottom"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            {"Your IP: ".split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-letterGlow"
                style={{
                  animationDelay: `${1 + index * 0.05}s`,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <span className="text-green-400 animate-pulse font-mono">
              {userIP.split("").map((char, index) => (
                <span
                  key={index}
                  className="inline-block animate-letterGlow"
                  style={{
                    animationDelay: `${1.5 + index * 0.1}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
