"use client"

import Messages from "./city";
import Messaging from "@/components/messaging";

export default function City() {
  return (
    <div>
      <Messaging
        Messages={Messages}
        section={1}
      />
    </div>
  );
}