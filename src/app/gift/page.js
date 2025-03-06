"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';

// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Password from '@/components/password';

export default function Home() {
  const [selectedGif, setSelectedGif] = useState(null);
  const router = useRouter();
  const gifs = [
    {
      id: 1,
      url: "/images/ryo.gif",
      alt: "Gift option 1"
    },
    {
      id: 2,
      url: "/images/ryo.gif",
      alt: "Gift option 2"
    },
    {
      id: 3,
      url: "/images/ryo.gif",
      alt: "Gift option 3"
    }
  ];

  const handleSelect = (id) => {
    setSelectedGif(id);
  };

  const handleProceed = () => {
    if (selectedGif) {
      const selectedGifObject = gifs.find(gif => gif.id === selectedGif);
      
      // Create a link element
      const link = document.createElement('a');
      link.href = selectedGifObject.url;
      link.download = `gift-${selectedGif}.gif`;
      
      // Some browsers require the link to be in the document
      document.body.appendChild(link);
      
      // Trigger download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      
      alert("Enjoy your gift!");
      setTimeout(() => {
        router.push("/leave")
      }, 500);
    }
  };
  const [show, setShow] = useState(true);
  const section = 5

  return (
    <>
      <Password
        show={show}
        setShow={setShow}
        section={section}
      />
      <div className="min-h-screen bg-[#FEF7DD] p-8">
      <main className="max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#15358D] my-6 font-blue-curve">
          Choose your GIFt!
        </h1>

        <div className="grid grid-cols-1 gap-6 my-8">
          {gifs.map((gif) => (
            <div 
              key={gif.id}
              className={`relative rounded-lg overflow-hidden cursor-pointer transition-all aspect-square duration-300 transform ${
                selectedGif === gif.id 
                  ? 'scale-105' 
                  : 'hover:scale-[1.02]'
              }`}
              onClick={() => handleSelect(gif.id)}
            >
              {/* Using placeholder for the artifact. In a real app, use the actual GIF URLs */}
              <Image 
                src={gif.url} 
                alt="background" 
                fill
                sizes=""
                className="object-cover select-none"
              />
              
              {selectedGif === gif.id && (
                <div className="absolute inset-0 bg-[#F9EF6C] bg-opacity-30 flex items-center justify-center">
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center my-8">
          <button
            onClick={handleProceed}
            disabled={!selectedGif}
            className={`text-2xl px-8 py-2 z-50 rounded-3xl transition-all font-blue-curve text-white ${
              selectedGif 
                ? 'bg-[#15358D] hover:bg-[#15358A] cursor-pointer' 
                : 'bg-[#8E8E8E] cursor-not-allowed'
            }`}
          >
            I Choose This!
            </button>
          </div>
        </main>
      </div>

    </>
  );
}