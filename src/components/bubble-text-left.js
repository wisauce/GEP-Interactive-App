import Image from "next/image"

export default function BubbleChatLeft({text, section}) {
  return(
    <div className="flex">
      <div className={`rounded-3xl px-6 py-3 max-w-[80vw] relative font-blue-curve ${section == 1 ? "text-[#25368D] bg-[#DFF6FF]" : section == 2 ? "text-[#a22306] bg-[#fbdc4c]" : section == 3 ? "text-[#347562] bg-[#ff9178]" : "text-[#ab166a] bg-[#f3b9d2]"}`}>
        <div className="absolute w-20 aspect-square -left-8 -top-11 -rotate-12">
          <Image 
            src="/images/vstocks/Mascot.webp" 
            alt="background" 
            fill
            sizes=""
            className="object-cover opacity-90 select-none"
          />
        </div>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}