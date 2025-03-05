"use client"

import {artworks} from "./artworks.js";
import Messages from "./messages";
import Messaging from "@/components/messaging";

export default function City() {
  return (
    <div>
      <Messaging
        Messages={Messages}
        section={1}
        artworks={artworks}
      />
    </div>
  );
}