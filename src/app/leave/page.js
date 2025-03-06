import Image from "next/image"

export default function() {
  return(
    <div className="relative w-full h-[100vh] flex justify-center items-center">
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
    </div>
  )
}