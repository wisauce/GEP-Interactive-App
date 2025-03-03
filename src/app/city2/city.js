import { getUserName } from "@/utils/nameToStorage"
export default function Messages() {
  const name = getUserName()
  return (
    {
      "texts": [
        [
          {
            "type": "mascot",
            "text": `Halo perkenalkan nama saya ${name}`
          },
          {
            "type": "user",
            "text1": "Selamat datang di gep btw",
            "text2": "Yang bener lah anjing"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Halo perkenalkan nama saya rizzler"
          },
          {
            "type": "media",
            "imagesrc": "/images/artworks/BestBarbieBeats.jpg"
          },
          {
            "type": "next"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Halo perkenalkan nama saya anjg"
          },
          {
            "type": "user",
            "text1": "Selamat datang di gep btw",
            "text2": "Yang bener lah anjing"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Halo perkenalkan nama saya wisa"
          },
          {
            "type": "user",
            "text1": "Selamat datang di gep btw",
            "text2": "Yang bener lah anjing"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Halo perkenalkan nama saya wisa"
          },
          {
            "type": "user",
            "text1": "gep g nya gila",
            "text2": "Yang bener lah anjing"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Halo perkenalkan nama saya wisa"
          },
          {
            "type": "user",
            "text1": "gep g nya gila",
            "text2": "Yang bener lah anjing"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Halo perkenalkan nama saya wisa"
          },
          {
            "type": "user",
            "text1": "gep g nya gila",
            "text2": "Yang bener lah anjing"
          }
        ]
      ]  
    }
  )
}
