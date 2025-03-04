import { useEffect, useState } from "react";
import Image from "next/image";

export default function Vote({Artworks}) {
  const [search, setSearch] = useState("");
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [isVoting, setIsVoting] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [message, setMessage] = useState("");

  // Handle artwork selection
  const handleSelectArtwork = (artworkName) => {
    if (!hasVoted) {
      setSelectedArtwork(artworkName);
    }
  };

  // Handle vote submission
  const handleVote = async () => {
    if (!selectedArtwork) {
      setMessage("Please select an artwork first!");
      return;
    }
  
    setIsVoting(true);
    try {
      const response = await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ artworkName: selectedArtwork }),
      });
  
      console.log("Response status:", response.status); // Debug log
      const text = await response.text();
      console.log("Raw response text:", text); // Debug log
  
      let result;
      if (text) {
        try {
          result = JSON.parse(text);
        } catch (error) {
          console.error("Invalid JSON response:", text);
          result = { message: "Unexpected server response" };
        }
      } else {
        result = { message: "No response from server" };
      }
  
      if (response.ok) {
        setHasVoted(true);
        setMessage(result.message || "Thank you for voting!");
      } else {
        setMessage(result.message || "Failed to submit your vote. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting vote:", error);
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsVoting(false);
    }
  };  


  return (
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
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            className="w-full placeholder:text-xl text-xl text-[#ABABAB] outline-none"
            placeholder="Cari judul karya..."
          />
        </div>

        {/* Grid of Images */}
        <div className="grid grid-cols-2 grid-rows-10 gap-4 grid-flow-row font-asal-usil text-center text-[#F9EF6C]">
          {/* Example artwork item */}
          {Artworks.map(function(art, i) {
            if (art.includes(search.toLowerCase()))
            return (<div>{art}</div>)
          })}

          <div 
            className="aspect-square rounded-xl relative overflow-hidden cursor-pointer"
            onClick={() => handleSelectArtwork("Kine-FachriAlbar-Fadhal")}
          >
            <div className={`absolute inset-0 ${selectedArtwork === "Kine-FachriAlbar-Fadhal" ? 'bg-[#15358D]' : 'bg-opacity-0'} z-10 bg-opacity-70 flex justify-center items-center`}>
              {selectedArtwork === "Kine-FachriAlbar-Fadhal" && (
                <p className="text-2xl w-full">AKU SUKA<br></br>YANG INI!</p>
              )}
            </div>
            <Image 
              src="/images/kine-FachriAlbar-Fadhal.jpg" 
              alt="background" 
              fill
              sizes=""
              className="object-cover opacity-90 select-none"
            />
          </div>
          <div 
            className="aspect-square rounded-xl relative overflow-hidden cursor-pointer"
            onClick={() => handleSelectArtwork("Kine-Sendi")}
          >
            <div className={`absolute inset-0 ${selectedArtwork === "Kine-Sendi" ? 'bg-[#15358D]' : 'bg-opacity-0'} z-10 bg-opacity-70 flex justify-center items-center`}>
              {selectedArtwork === "Kine-Sendi" && (
                <p className="text-2xl w-full">AKU SUKA<br></br>YANG INI!</p>
              )}
            </div>
            <Image 
              src="/images/kine-FachriAlbar-Fadhal.jpg" 
              alt="background" 
              fill
              sizes=""
              className="object-cover opacity-90 select-none"
            />
          </div>
          
          {/* Your existing artwork grid items would go here */}
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

      {/* Vote Now Button */}
      <div className="w-full fixed h-60 bottom-0 z-50 flex justify-center items-center font-blue-curve">
        <button 
          onClick={handleVote}
          disabled={isVoting || hasVoted || !selectedArtwork}
          className={`${
            hasVoted ? 'bg-green-500' : !selectedArtwork ? 'bg-[#8E8E8E]' : 'bg-[#15358D]'
          } text-[#FEF7DD] text-2xl px-8 py-2 z-50 rounded-3xl transition-colors`}
        >
          {hasVoted ? "VOTED!" : isVoting ? "VOTING..." : "VOTE NOW"}
        </button>
        <div className="w-full h-full absolute" style={{backgroundImage: "linear-gradient(to bottom, rgba(255,237,97,0), rgba(255,237,97,1))"}}></div>
      </div>
    </div>
  );
}