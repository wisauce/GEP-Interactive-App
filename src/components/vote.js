import { useState } from "react"
import Image from "next/image"

export default function Vote() {
  const [search,setSearch] = useState()
  return(
    <div className="z-50 bg-[#FEF7DD] absolute w-full">
      <div className="w-full p-4 flex flex-col gap-2 overflow-auto">
        <div className="px-6 flex py-3 gap-2 rounded-[2rem] bg-white border-opacity-0 group focus-within:border-opacity-100 border-4 border-[#ABABAB]">
          <span className="w-6 aspect-square inline-block relative">
            <Image 
              src="/images/icons/Search.svg" 
              alt="background" 
              fill
              sizes=""
              className="object-cover"
            />
          </span>
          <input 
            type="text"
            value={search}
            className="w-full placeholder:text-xl text-xl text-[#ABABAB] outline-none"
            placeholder="Cari judul karya..."
          />
        </div>
        
        <div className="grid grid-cols-2 grid-rows-10 gap-4 grid-flow-row font-asal-usil text-center text-[#F9EF6C]">
          <div className="aspect-square rounded-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[#15358D] z-10 bg-opacity-70 flex justify-center items-center">
              <p className="text-2xl w-full">AKU SUKA<br></br>YANG INI!</p>
            </div>
            <Image 
              src="/images/kine-FachriAlbar-Fadhal.jpg" 
              alt="background" 
              fill
              sizes=""
              className="object-cover opacity-90 select-none"
            />
          </div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
          <div className="bg-black aspect-square"></div>
        </div>
          
      </div>

      <div className="w-full fixed h-60 bottom-0 z-50 flex justify-center items-center font-blue-curve">
        <button className="bg-[#8E8E8E] text-[#FEF7DD] text-2xl px-8 py-2 z-50 rounded-3xl">VOTE NOW</button>
        <div className="w-full h-full absolute" style={{backgroundImage: "linear-gradient(to bottom, rgba(255,237,97,0), rgba(255,237,97,1))"}}></div>
      </div>
    </div>
  )
}