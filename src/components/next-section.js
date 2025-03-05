import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function MascotInlineConversation({ onComplete, section }) {
  const [messages, setMessages] = useState([]);
  const [completed, setCompleted] = useState(false);
  const lastMessageRef = useRef(null);
  
  const color = section == 1 ? "#214CBB" : 
                section == 2 ? "#a22306" : 
                section == 3 ? "#347562" : "#ab166a";
  
  const scrollToBottom = () => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: 'auto', block: 'end' });
      }
    }, 100);
  };
  
  useEffect(() => {
    setMessages([
      {
        id: 1,
        sender: 'mascot',
        text: `${section == 4 ? 'Maukah kamu ikut memberi dampak?' : 'Kabari aku kalau misalnya kamu sudah siap untuk melanjutkan perjalanan ini'}`,
        options: [
          { text: `${section == 4 ? 'MAUUU!' : 'Aku sudah selesai lihat-lihat, ayo kita lanjut!'}`, nextStep: `${section == 4 ? 'complete' : 'confirm-leave'}`},
          { text: `${section == 4 ? 'YESSIR!' : 'Aku masih mau di sini'}`, nextStep: `${section == 4 ? 'complete' : 'confirm-leave'}`},
        ]
      }
    ]);
  }, []);
  
  useEffect(() => {
    if (completed) {
      onComplete();
    }
  }, [completed, onComplete]);
  
  const handleSelection = (messageId, option) => {
    setMessages(prev => prev.map(msg => 
      msg.id === messageId 
        ? { ...msg, options: null } // Remove options
        : msg
    ));
    
    const newUserMessage = {
      id: Date.now(),
      sender: 'user',
      text: option.text,
      options: null
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    scrollToBottom();
    
    setTimeout(() => {
      if (option.nextStep === 'confirm-leave') {
        addMascotMessageWithOptions(
          'Apakah kamu yakin?',
          [
            { text: "Iya, ayo kita berangkat!", nextStep: 'complete' },
            { text: "Eh gajadi deh, tunggu dulu bentar", nextStep: 'restart' }
          ]
        );
      } else if (option.nextStep === 'restart') {
        addMascotMessageWithOptions(
          'Oke, bilang aja ya',
          [
            { text: 'Oke sip sudah selesai, ayo berangkat!', nextStep: 'confirm-leave' },
            { text: 'Tunggu bentarrr', nextStep: 'restart' }
          ]
        );
      } else if (option.nextStep === 'complete') {
        addMascotMessage('Oke lanjuttt');
        setTimeout(() => setCompleted(true), 1000);
      }
    }, 500);
  };
  
  const addMascotMessageWithOptions = (text, options) => {
    const newMessage = {
      id: Date.now(),
      sender: 'mascot',
      text: text,
      options: options
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    scrollToBottom();
  };
  
  const addMascotMessage = (text) => {
    const newMessage = {
      id: Date.now(),
      sender: 'mascot',
      text: text,
      options: null
    };
    
    setMessages(prev => [...prev, newMessage]);
    
    scrollToBottom();
  };
  
  return (
      <div className="flex flex-col gap-3 font-blue-curve">
        {messages.map((message, index) => (
          <div 
            key={message.id} 
            className="flex flex-col gap-2"
            ref={index === messages.length - 1 ? lastMessageRef : null}
          >
            {message.sender === 'mascot' ? (
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
              <div 
                className="self-end max-w-[80vw] rounded-3xl px-6 py-3 text-white"
                style={{ backgroundColor: color }}
              >
                <p>{message.text}</p>
              </div>
            )}
            
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