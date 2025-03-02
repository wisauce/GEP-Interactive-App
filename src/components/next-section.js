import { useState, useEffect } from "react"
import Image from "next/image"

export default function MascotInlineConversation({ onComplete, section }) {
  const [messages, setMessages] = useState([]);
  const [completed, setCompleted] = useState(false);
  
  // Define the color based on section
  const color = section == 1 ? "#214CBB" : 
                section == 2 ? "#a22306" : 
                section == 3 ? "#347562" : "#ab166a";
  
  // Initialize conversation
  useEffect(() => {
    // Start with the first mascot message and options
    setMessages([
      {
        id: 1,
        sender: 'mascot',
        text: 'Tell me if you want to leave',
        options: [
          { text: 'Yes, I want to leave now', nextStep: 'confirm-leave' },
          { text: 'No, I want to stay', nextStep: 'restart' }
        ]
      }
    ]);
  }, []);
  
  // Complete the conversation when finished
  useEffect(() => {
    if (completed) {
      onComplete();
    }
  }, [completed, onComplete]);
  
  // Handle user selection
  const handleSelection = (messageId, option) => {
    // Update messages to replace options with user selection
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, options: null } // Remove options
        : msg
    ));
    
    // Add user response
    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: option.text,
      options: null
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Determine next step
    setTimeout(() => {
      if (option.nextStep === 'confirm-leave') {
        addMascotMessageWithOptions(
          'Are you sure?',
          [
            { text: "Yes, I'm sure", nextStep: 'complete' },
            { text: "No, I changed my mind", nextStep: 'restart' }
          ]
        );
      } else if (option.nextStep === 'restart') {
        addMascotMessageWithOptions(
          'Tell me if you want to leave',
          [
            { text: 'Yes, I want to leave now', nextStep: 'confirm-leave' },
            { text: 'No, I want to stay', nextStep: 'restart' }
          ]
        );
      } else if (option.nextStep === 'complete') {
        addMascotMessage('Alright, moving to the next page...');
        setTimeout(() => setCompleted(true), 1000);
      }
    }, 500);
  };
  
  // Add a mascot message with options
  const addMascotMessageWithOptions = (text, options) => {
    const newMessage = {
      id: Date.now(),
      sender: 'mascot',
      text: text,
      options: options
    };
    
    setMessages(prev => [...prev, newMessage]);
  };
  
  // Add a mascot message without options
  const addMascotMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      sender: 'mascot',
      text: text,
      options: null
    };
    
    setMessages(prev => [...prev, newMessage]);
  };
  
  return (
      <div className="flex flex-col gap-3 font-blue-curve">
        {messages.map((message) => (
          <div key={message.id} className="flex flex-col gap-2">
            {/* Message bubble */}
            {message.sender === 'mascot' ? (
              // Mascot message with your exact styling
              <div className={`self-start rounded-3xl px-6 py-3 max-w-[80vw] relative ${
                section == 1 ? "text-[#25368D] bg-[#DFF6FF]" : 
                section == 2 ? "text-[#a22306] bg-[#fbdc4c]" : 
                section == 3 ? "text-[#347562] bg-[#ff9178]" : 
                "text-[#ab166a] bg-[#f3b9d2]"
              }`}>
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
                  {message.text}
                </p>
              </div>
            ) : (
              // User message
              <div 
                className="self-end max-w-[80vw] rounded-3xl px-6 py-3 text-white"
                style={{ backgroundColor: color }}
              >
                <p>{message.text}</p>
              </div>
            )}
            
            {/* Options - only shown for mascot messages with options */}
            {message.sender === 'mascot' && message.options && (
              <div className="flex font-blue-curve flex-col items-end gap-2 mb-3">
                {message.options.map((option, index) => (
                  <div 
                    key={index}
                    onClick={() => handleSelection(message.id, option)}
                    style={{
                      backgroundColor: "transparent",
                      borderColor: color,
                      color: color,
                      cursor: "pointer"
                    }}
                    className="max-w-[80vw] rounded-3xl px-6 py-3 border-2 hover:bg-gray-50 transition-colors self-end"
                  >
                    <p>{option.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
  );
}