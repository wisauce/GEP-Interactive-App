"use client"

import Artworks from "./artworks";
import Messages from "./messages.js";
import Messaging from "@/components/messaging";

export default function City() {
  return (
    <div>
      <Messaging
        Messages={Messages}
        Artworks={Artworks}
        section={2}
      />
    </div>
  );
}