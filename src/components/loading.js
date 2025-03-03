import Image from "next/image"

export default function Loading() {
  return(
    <div className="fixed w-[100vw] h-[100vh] z-40 bg-yellow-50">
      <div className="z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image 
          src="/images/Logo-Ludic.webp" 
          alt="background" 
          height={200}
          width={200}
          className="object-cover select-none"
        />
        <h1 className="font-blue-curve text-[#25368D] text-center">Ganesha Exhibition Programme by LFM ITB</h1>
      </div>
      <Image 
        src="/images/Loading.webp" 
        alt="background" 
        fill
        sizes=""
        className="object-cover select-none"
      />
    </div>
  )
}