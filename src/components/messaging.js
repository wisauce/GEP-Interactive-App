"use client"

import Image from "next/image";
import BubbleChatLeft from "@/components/bubble-text-left";
import { useState, useEffect, useRef } from "react";
import ReplyOption from "@/components/reply-option";
import Password from "@/components/password";
import BubbleMedia from "./bubble-media";
import NextSection from "./next-section";
import { useRouter } from "next/navigation";
import Poll from "./poll";
import Vote from "./vote";

export default function Messaging({Messages, artworks, section}) {
  const [hasPollingBeenOpened, setHasPollingBeenOpened] = useState(false);
  const [activeGroups, setActiveGroups] = useState([0]);
  const [counter, setCounter] = useState(0)
  const routes = ["gate-of-ludic", "kreoskaura", "neoneshia", "mexirelia", "gift"]
  const router = useRouter()
  const [show, setShow] = useState(true);
  const [Polling, openPolling] = useState(false);

  const texts = Messages().texts
  const [visibleItems, setVisibleItems] = useState(texts.map(() => []));
  
  // Add a ref to the scrollable container
  const messagesEndRef = useRef(null);

  // Function to scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Effect for handling new message rendering and scrolling
  useEffect(() => {
    if (!show) {
      activeGroups.forEach(async (groupIndex) => {
        const group = texts[groupIndex];
  
        if (visibleItems[groupIndex].length === 0) {
          for (let i = 0; i < group.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 1000)); 
            setVisibleItems(prev => {
              const newVisibleItems = [...prev];
              newVisibleItems[groupIndex] = [...(newVisibleItems[groupIndex] || []), i];
              return newVisibleItems;
            });            
            scrollToBottom();
          }
        }
      });
    }
  }, [activeGroups, show]);

  // Additional effect to scroll when visible items change
  useEffect(() => {
    scrollToBottom();
  }, [visibleItems]);

  const showNextGroup = (groupIndex) => {
    if (!activeGroups.includes(groupIndex)) {
      setActiveGroups(prev => [...prev, groupIndex]);
    }
  };

  return (
    <div className="overflow-hidden">
      {Polling && !hasPollingBeenOpened &&
      <Vote
        artworks={artworks}
        next={() => setCounter(prevCounter => {
          const newCounter = prevCounter + 1;
          showNextGroup(newCounter);
          setHasPollingBeenOpened(true);
          return newCounter;
        })}
        show={openPolling}
      />
      }
      <Password
        show={show}
        setShow={setShow}
        section={section}
      />
      <div className="fixed w-[100vw] h-full -z-50 overflow-hidden">
        <Image 
          src={section == 1 ? "/images/bg-chat-1.webp" : section == 2 ? "/images/bg-chat-2.webp" : section == 3 ? "/images/bg-chat-3.webp" : "/images/bg-chat-4.webp"}
          alt="background" 
          fill
          sizes=""
          className="object-cover opacity-90"
        />
      </div>
      <div className="absolute inset-0 overflow-y-auto overscroll-contain h-full">
        <div className="flex flex-col min-h-[100dvh] overflow-y-auto justify-end">
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
                            open={() => openPolling(true)}
                            state={hasPollingBeenOpened}
                          />
                        )
                    )
                  ))}
                </div>
              )
            ))}
            {/* This is the ref element that we'll scroll to */}
            <div ref={messagesEndRef} className="h-[0.5px]" />
          </div>
        </div>
      </div>
    </div>
  );
}