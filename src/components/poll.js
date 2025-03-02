import Image from "next/image"

export default function Poll({section}) {
  return(
    <div className="flex">
      <div className={`rounded-3xl px-6 py-4 max-w-[80vw] relative font-blue-curve ${section == 1 ? "text-[#25368D] bg-[#DFF6FF]" : section == 2 ? "text-[#a22306] bg-[#fbdc4c]" : section == 3 ? "text-[#347562] bg-[#ff9178]" : "text-[#ab166a] bg-[#f3b9d2]"}`}>
        <div className="absolute w-20 aspect-square -left-8 -top-11 -rotate-12">
          <Image 
            src="/images/vstocks/Mascot.webp" 
            alt="background" 
            fill
            sizes=""
            className="object-cover opacity-90 select-none"
          />
        </div>
        <button className={`text-white rounded-lg px-3 py-2 ${section == 1 ? " bg-[#25368D]" : section == 2 ? "bg-[#a22306]" : section == 3 ? "bg-[#347562]" : "bg-[#ab166a]"}`}>
          Vote Now
        </button>
      </div>
    </div>
  )
}