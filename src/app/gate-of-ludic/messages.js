import { getUserName } from "@/utils/nameToStorage"

export default function Messages() {
  const nama = getUserName()
  return (
    {
      "texts": [
        [
          {
            "type": "mascot",
            "text": "Wah, Underdog?! Sudah lama kita tidak berjumpa!"
          },
          {
            "type": "mascot",
            "text": "Mari berkenalan, siapa namamu?"
          },
          {
            "type": "user",
            "text1": `Nama aku ${nama}`,
            "text2": `Panggil aku ${nama}!`
          }
        ],
        [
          {
            "type": "mascot",
            "text": `Halo ${nama}, aku Pirous, unicorn dari dunia ludic yang akan memandumu!`
          },
          {
            "type": "mascot",
            "text": "Selamat datang di Ganesha Exhibition Programme 2025!"
          },
          {
            "type": "user",
            "text1": "Haiii pirous!",
            "text2": "Woah"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Now, let’s take a look around!"
          },
          {
            "type": "mascot",
            "text": "Saat ini kita berada tepat di luar kota Ludic."
          },
          {
            "type": "mascot",
            "text": `${nama}, coba lihatlah pekarangan penuh karya ini! Kita sebentar lagi akan sampai pada gerbang masuk kota, let’s go!`
          },
          {
            "type": "user",
            "text1": "Okee~ Tunggu aku berkeliling ya"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Apakah kamu sudah sampai ujung?"
          },
          {
            "type": "user",
            "text1": "Sudah!"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Aku jadi kepo, sebelum kita masuk ke kota, coba pilih karya ter-ludic menurut kamu!"
          },
          {
            "type": "vote"
          },
        ],
        [
          {
            "type": "mascot",
            "text": "Nice choice! Aku yakin kamu bakal nggak sabar buat explore kota ini!"
          },
          {
            "type": "next"
          }
        ]
      ]
    }
  )    
}