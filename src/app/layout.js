import "./globals.css";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "Ganesha Exhibition Programme",
  description: "Ganesha Exhibition Programme adalah perjalanan seru di mana kreativitas, seni, dan imajinasi bertemu untuk mencipatakan pengalaman yang tak terlupakan! GEP merupakan ekshibisi tahunan dari Liga Film Mahasiswa ITB, GEP menjadi wadah untuk memamerkan karya terbaik dari kru LFM ITB kepada publik.",
};

export default function RootLayout({ children }) {
  return (  
    <html lang="en" className="bg-[#F9EF6C] w-full">
      <body className="w-full relative">
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
