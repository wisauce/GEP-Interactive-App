"use client"

// import Messages from "/city";
import Image from "next/image";
import BubbleChatLeft from "@/components/bubble-text-left";
import { useState, useEffect } from "react";
import ReplyOption from "@/components/reply-option";
import Password from "@/components/password";
import BubbleMedia from "./bubble-media";
import NextSection from "./next-section";
import { useRouter } from "next/navigation";
import Poll from "./poll";
import Vote from "./Vote";

export default function Messaging({Messages, section}) {
  const [activeGroups, setActiveGroups] = useState([0]);
  const [counter, setCounter] = useState(0)
  const routes = ["city1", "city2", "city3", "city4"]
  const router = useRouter()
  const [show, setShow] = useState(true);

  const texts = Messages().texts
  const [visibleItems, setVisibleItems] = useState(texts.map(() => []));
  

  useEffect(() => {
    if (!show) {
      activeGroups.forEach(async (groupIndex) => {
        const group = texts[groupIndex];
        
  
        if (visibleItems[groupIndex].length === 0) {
          for (let i = 0; i < group.length; i++) {
     
            await new Promise(resolve => setTimeout(resolve, 800)); 
            
  
            setVisibleItems(prev => {
              const newVisibleItems = [...prev];
              newVisibleItems[groupIndex] = [...(newVisibleItems[groupIndex] || []), i];
              return newVisibleItems;
            });
          }
        }
      });

    }
  
  }, [activeGroups, show]);
  const showNextGroup = (groupIndex) => {
    if (!activeGroups.includes(groupIndex)) {
      setActiveGroups(prev => [...prev, groupIndex]);
    }
  };
  return (
    <div>
      <Vote/>
      <Password
        show={show}
        setShow={setShow}
      />
      <div className="fixed w-[100vw] h-[100vh] -z-50">
          <Image 
            src={section == 1 ? "/images/bg-chat-1.webp" : section == 2 ? "/images/bg-chat-2.webp" : section == 3 ? "/images/bg-chat-3.webp" : "/images/bg-chat-4.webp"}
            alt="background" 
            fill
            sizes=""
            className="object-cover opacity-90"
          />
        </div>
        <div className="flex flex-col-reverse max-h-[100vh]">
          <div className="w-full flex flex-col p-4 justify-end gap-4">
          {texts.map((group, groupIndex) => (
          activeGroups.includes(groupIndex) && (
            <div key={`group-${groupIndex}`} className="w-full flex flex-col gap-4 justify-end chat-group">
              {group.map((item, itemIndex) => (
                visibleItems[groupIndex].includes(itemIndex) && (
                  item.type == "mascot" ? (
                    <BubbleChatLeft
                      key={`item-${groupIndex}-${itemIndex}`}
                      text={item.text}
                      section={section}
                    />
                  ) : item.type == "user" ? (
                    <ReplyOption
                      key={`item-${groupIndex}-${itemIndex}`}
                      text1={item.text1}
                      text2={item.text2}
                      next={() => setCounter(prevCounter => {
                        const newCounter = prevCounter + 1;
                        showNextGroup(newCounter);
                        return newCounter;
                      })}
                      section={section}
                    />)
                    : item.type == "media" ? (
                    <BubbleMedia
                      imgsrc={item.imagesrc}
                      section={section}                      
                    />)
                    : item.type == "next" ? (
                      <NextSection
                        onComplete={() => {
                          router.push(routes[section]);
                        }}
                        section={section}
                      />
                    )
                    : (
                      <Poll
                        section={section}
                      />
                    )
                )
              ))}
            </div>
          )
        ))}
          </div>

        </div>
    </div>
  );
}