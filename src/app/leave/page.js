"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function() {
  
  const [imagePath, setImagePath] = useState("/images/pemutaran7.jpg")
  useEffect(() => {
    // Get current date
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1 // JavaScript months are 0-indexed
    const year = currentDate.getFullYear()
    
    // Check if today is one of our target dates (March 7-9, 2025)
    if (year === 2025 && month === 3) {
      if (day === 7) {
        setImagePath("/images/pemutaran7.png") // Image for March 7
      } else if (day === 8) {
        setImagePath("/images/pemutaran8.png") // Image for March 8
      } else if (day === 9) {
        setImagePath("/images/pemutaran9.png") // Image for March 9
      }
    }
  }, []) // Empty dependency array ensures this runs once on component mount
  
  return(
    <div className="relative w-full h-[100vh] flex justify-center items-center flex-col gap-6">
      <div className="flex justify-center flex-col items-center w-2/3 text-center">
        <h1 className="font-asal-usil text-lg font-bold bg-gradient-to-r from-[#072499] to-[#4E86FF] bg-clip-text text-transparent">
          Thank you for exploring the world of
        </h1>
        <Image 
          src="/images/Logo-Ludic.webp"
          alt="background" 
          height={200}
          width={200}
          className="object-cover select-none"
        />
      </div>
      <div>
        <h1 className="text-center font-blue-curve text-lg font-bold bg-gradient-to-r from-[#072499] to-[#4E86FF] bg-clip-text text-transparent">Jadwal Pemutaran Film Hari Ini</h1>
        <Image 
          src={imagePath}
          alt="background" 
          height={280}
          width={350}
          className="object-cover select-none"
        />
      </div>
    </div>
  )
}