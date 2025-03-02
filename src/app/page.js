"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setUserName } from "@/utils/nameToStorage";

export default function Home() {
  const [name, setNameInput] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") return;
    setUserName(name);
    router.push("/city1");
  };
  return (
    <div className="flex justify-center items-center h-[100vh] p-4">
      <div className="fixed w-[100vw] h-[100vh] -z-50">
          <Image 
            src="/images/bg-auth.webp" 
            alt="background" 
            fill
            sizes=""
            className="object-cover"
          />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-blue-curve text-[#C33F7B] text-3xl text-center">Siapa nama kamu?</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 font-blue-curve w-80">
          <input 
            type="text"
            value={name}
            maxLength={20}
            onChange={(e) => setNameInput(e.target.value)}
            className=" px-8 py-4 rounded-[2rem] text-center placeholder:text-xl text-xl text-[#ABABAB] outline-none border-opacity-0 focus:border-opacity-100 border-4 border-[#ABABAB]"
            placeholder="Namaku..."
          />
          <button type="submit" className="bg-[#F3B9D2] text-[#C33F7B] outline-none px-8 py-4 rounded-[2rem] text-xl flex justify-center gap-3">
            <p className="inline-block leading-tight opacity-50 outline-none">Lanjutkan</p>
            <span className="w-6 aspect-square inline-block relative">
              <Image 
                src="/images/icons/Send.svg" 
                alt="background" 
                fill
                sizes=""
                className="object-cover"
              />
          </span>
          </button>
        </form>
      </div>
    </div>
  );
}
