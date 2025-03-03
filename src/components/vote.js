import { useState } from "react";
import Image from "next/image";
import axios from "axios";


function ArtCard() {
  return(
    <div className="aspect-square rounded-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-[#15358D] z-10 bg-opacity-70 flex justify-center items-center">
        <p className="text-2xl w-full">AKU SUKA<br></br>YANG INI!</p>
      </div>
      <Image 
        src="/images/kine-FachriAlbar-Fadhal.jpg" 
        alt="background" 
        fill
        sizes=""
        className="object-cover opacity-90 select-none"
      />
    </div>
  )
}

export default function Vote({Artworks}) {
  const artworks = Artworks().lists
  const [search, setSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isVoted, setIsVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [debugInfo, setDebugInfo] = useState(null);

  // Handle clicking on an image
  const handleItemClick = (index) => {
    if (selectedItems.includes(index)) {
      // If already selected, remove it
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      // If not selected, add it
      setSelectedItems([...selectedItems, index]);
    }
  };

  // Handle voting
  const handleVote = async () => {
    if (selectedItems.length === 0) {
      alert("Please select at least one item to vote!");
      return;
    }
  
    setIsLoading(true);
    setError("");
    setDebugInfo(null);
  
    try {
      console.log("Sending vote for items:", selectedItems);
      
      const response = await axios.post('/api/vote', {
        selectedItems
      });
  
      console.log("Vote submitted successfully:", response.data);
      setIsVoted(true);
    } catch (error) {
      console.error("Error submitting vote:", error);
      
      // Prepare debug info
      const debug = {
        message: error.message,
        status: error.response?.status,
        responseData: error.response?.data
      };
      setDebugInfo(debug);
      
      // Set user-friendly error message
      let errorMessage = "Failed to submit your vote. Please try again later.";
      if (error.response) {
        if (error.response.status === 500) {
          errorMessage = "Server error. Please check your Upstash configuration.";
        } else {
          errorMessage = `Error ${error.response.status}: ${error.response.data?.message || 'Unknown error'}`;
        }
      }
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="z-50 bg-[#FEF7DD] absolute w-full">
      <div className="w-full p-4 flex flex-col gap-2 overflow-auto">
        {/* Search Bar */}
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
            onChange={(e) => setSearch(e.target.value)}
            className="w-full placeholder:text-xl text-xl text-[#ABABAB] outline-none"
            placeholder="Cari judul karya..."
          />
        </div>

        {/* Grid of Images */}
        <div className="grid grid-cols-2 grid-rows-10 gap-4 grid-flow-row font-asal-usil text-center text-[#F9EF6C]">
          {Array.from({ length: 14 }).map((_, index) => (
            <div
              key={index}
              className={`aspect-square rounded-xl relative overflow-hidden cursor-pointer ${
                selectedItems.includes(index)
                  ? "border-4 border-[#F9EF6C]"
                  : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              <div className="absolute inset-0 bg-[#15358D] z-10 bg-opacity-70 flex justify-center items-center">
                <p className="text-2xl w-full">AKU SUKA<br></br>YANG INI!</p>
              </div>
              <Image
                src="/images/kine-FachriAlbar-Fadhal.jpg"
                alt="background"
                fill
                sizes=""
                className="object-cover opacity-90 select-none"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="text-red-500 text-center mt-2 mb-4 px-4">
          {error}
        </div>
      )}

      {/* Debug info (development only) */}
      {debugInfo && (
        <div className="bg-gray-100 text-xs p-3 m-4 rounded overflow-auto max-h-40">
          <h3 className="font-bold">Debug Info:</h3>
          <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
        </div>
      )}

      {/* Vote Now Button */}
      <div className="w-full fixed h-60 bottom-0 z-50 flex justify-center items-center font-blue-curve">
        <button
          onClick={handleVote}
          className={`text-[#FEF7DD] text-2xl px-8 py-2 z-50 rounded-3xl transition-colors ${
            isLoading ? "bg-gray-400" : 
            isVoted ? "bg-blue-500" : "bg-[#8E8E8E] hover:bg-[#6E6E6E]"
          }`}
          disabled={isVoted || isLoading}
        >
          {isLoading ? "SUBMITTING..." : isVoted ? "VOTED!" : "VOTE NOW"}
        </button>
        <div
          className="w-full h-full absolute"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,237,97,0), rgba(255,237,97,1))",
          }}
        ></div>
      </div>
    </div>
  );
}