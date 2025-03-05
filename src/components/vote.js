import { useState } from "react";
import Image from "next/image";

export default function Vote({ artworks, next, show }) {
  const [search, setSearch] = useState("");
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  

  // Handle vote submission
  const handleVote = async () => {
    if (!selectedArtwork) return;
    const router = useRouter();
    try {
      await fetch("/api/vote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ artworkName: selectedArtwork }),
      });
    } catch {}
  };

  return (
    <div className="z-50 bg-[#FEF7DD] absolute w-full">
      <div className="w-full p-4 flex flex-col gap-2 overflow-auto">
        <div className="px-6 flex py-3 gap-2 rounded-[2rem] bg-white border-opacity-0 group focus-within:border-opacity-100 border-4 border-[#ABABAB]">
          <span className="w-6 aspect-square inline-block relative">
            <Image src="/images/icons/Search.svg" alt="search" fill className="object-cover" />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="w-full placeholder:text-xl text-xl text-[#ABABAB] outline-none"
            placeholder="Cari judul karya..."
          />
        </div>

        <div className="grid grid-cols-2 grid-rows-10 gap-4 grid-flow-row font-asal-usil text-center text-[#F9EF6C]">
          {artworks.map((art, i) =>
            art.includes(search.toLowerCase()) ? (
              <div key={i} onClick={() => setSelectedArtwork(art)} className="cursor-pointer">
                {art}
              </div>
            ) : null
          )}

          {/* Example artwork items */}
          <div 
            className="aspect-square rounded-xl relative overflow-hidden cursor-pointer"
            onClick={() => setSelectedArtwork("testing")}
          >
            <div className={`absolute inset-0 ${selectedArtwork === "testing" ? 'bg-[#15358D]' : 'bg-opacity-0'} z-10 bg-opacity-70 flex justify-center items-center`}>
              {selectedArtwork === "testing" && (
                <p className="text-2xl w-full">AKU SUKA<br></br>YANG INI!</p>
              )}
            </div>
            <Image 
              src="/images/kine-FachriAlbar-Fadhal.jpg" 
              alt="background" 
              fill
              className="object-cover opacity-90 select-none"
            />
          </div>

        </div>
      </div>

      <div className="w-full fixed h-60 bottom-0 z-50 flex justify-center items-center font-blue-curve">
        <button
          onClick={() => {
            handleVote; 
            next();
            show(false);
          }}
          disabled={!selectedArtwork}
          className={`${!selectedArtwork ? "bg-[#8E8E8E]" : "bg-[#15358D]"} text-[#FEF7DD] text-2xl px-8 py-2 z-50 rounded-3xl transition-colors`}
        >
          VOTE NOW
        </button>
        <div className="w-full h-full absolute" style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,237,97,0), rgba(255,237,97,1))" }}></div>
      </div>
    </div>
  );
}
