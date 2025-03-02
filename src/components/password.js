"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Password({show, setShow}) {
  const [pass, setPassInput] = useState("");

  useEffect(() => {
    if (pass == process.env.NEXT_PUBLIC_PASSWORD) {
      setShow(false)
    }
  }, [pass]);
  return (
        <div className={`transition duration-1000 flex fixed justify-center items-center w-full h-[100vh] p-4 z-40 ${!show ? "translate-y-[100vh]" : ""}`}>
        <div className="fixed w-full h-full -z-10">
            <Image 
              src="/images/bg-auth.webp" 
              alt="background" 
              fill
              sizes=""
              className="object-cover"
            />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-blue-curve text-[#C33F7B] text-3xl text-center">Apa kata sandinya?</h1>
          <div className="flex flex-col gap-2 font-blue-curve w-80">
            <input 
              type="text"
              value={pass}
              maxLength={20}
              onChange={(e) => setPassInput(e.target.value)}
              className=" px-8 py-4 rounded-[2rem] text-center placeholder:text-xl text-xl text-[#ABABAB] outline-none border-opacity-0 focus:border-opacity-100 border-4 border-[#ABABAB]"
              placeholder="kata sandinya..."
            />
          </div>
        </div>
      </div>
  );
}