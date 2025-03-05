"use client"

import {artworks} from "./artworks";
import Messages from "./messages.js";
import Messaging from "@/components/messaging";

export default function City() {
  return (
    <div>
      <Messaging
        Messages={Messages}
        artworks={artworks}
        section={3}
      />
    </div>
  );
}