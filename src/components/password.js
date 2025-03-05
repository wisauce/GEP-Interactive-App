"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Password({show, setShow, section}) {
  const [pass, setPassInput] = useState("");

  useEffect(() => {
    if (pass == (section == 1 ? process.env.NEXT_PUBLIC_PASSWORD1 : section == 2 ? process.env.NEXT_PUBLIC_PASSWORD2 : section == 3 ? process.env.NEXT_PUBLIC_PASSWORD3 : process.env.NEXT_PUBLIC_PASSWORD4)) {
      setShow(false)
    }
  }, [pass]);
  return (
        <div className={`transition duration-1000 flex fixed justify-center items-center w-full h-[100vh] p-4 z-40 ${!show ? "-translate-y-[100vh]" : ""}`}>
        <div className="flex flex-col gap-3 font-blue-curve text-2xl text-center">
          <h1 className={section == 1 ? "text-[#25368D]" : section == 2 ? "text-[#a22306]" : section == 3 ? "text-[#347562]" : "text-[#ab166a]"}>{section == 1 ? "Pssst, apa passwordnya?" : section == 2 ? "Woah! Kita akhirnya sampai di tempat selanjutnya! " : section == 3 ? "Pssst, bisikin passwordnya" : "Loh, Sekarang kita di mana?"}</h1>
          <div className="flex flex-col gap-2 font-blue-curve w-80">
            <input 
              type="text"
              value={pass}
              maxLength={20}
              onChange={(e) => setPassInput(e.target.value.toLowerCase())}
              className=" px-8 py-4 rounded-[2rem] text-center placeholder:text-xl text-xl text-[#ABABAB] outline-none border-opacity-0 focus:border-opacity-100 border-4 border-[#ABABAB]"
              placeholder="passwordnya..."
            />
          </div>
        </div>
      </div>
  );
}