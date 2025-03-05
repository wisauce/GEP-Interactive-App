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
            "text": `Halo ${nama}, aku maskot kuda PS4 yang akan memandumu!`
          },
          {
            "type": "mascot",
            "text": "SELAMAT DATANG di Ganesha Exhibition Programme 2025! Aku akan membawa kamu berjalan-jalan di Kota Ludic!"
          },
          {
            "type": "mascot",
            "text": "Ngomong-ngomong, teman rahasiaku menitipkan selebaran Catatan Kuratorial ini untuk kamu lihat kembali sepanjang perjalanan!"
          },
          {
            "type": "mascot",
            "text": "Mungkin ini dapat membantumu untuk mengingat kembali penjelajahan ke depan! Mau tahu?"
          },
          {
            "type": "user",
            "text1": "Mauuu",
            "text2": "Gasss"
          }
        ],
        [
          {
            "type": "media",
            "text": "[INSERT IMAGE CATATAN KURATORIAL]"
          },
          {
            "type": "mascot",
            "text": "Now, let’s take a look around!"
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
            "text": "Aku jadi kepo, coba pilih karya ter-ludic menurut kamu!"
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