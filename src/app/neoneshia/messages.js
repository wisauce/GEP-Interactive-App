import { getUserName } from "@/utils/nameToStorage"
export default function Messages() {
  const name = getUserName()
  return (
    {
      "texts": [
        [
          {
            "type": "mascot",
            "text": "Hallo hallo! Welcome to Neoneshia!"
          },
          {
            "type": "mascot",
            "text": "Kali ini akan kutunjukkan tempat cukup berbeda tetapi tetap akan membuat kamu tercengang, wahai Underdog."
          },
          {
            "type": "user",
            "text1": "Loh, kenapa begitu?",
            "text2": "Affah iyah?"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Di tempat ini, para masterbuilder berupaya melakukan perkembangan secara menyeluruh."
          },
          {
            "type": "mascot",
            "text": "Perkembangan terjadi karena adanya inovasi, dan inovasi terjadi karena adanya insan-insan tergerak yang ingin mencoba."
          },
          {
            "type": "mascot",
            "text": "Warga di sini berhasil melihat potensi akan keusilan tersebut dan menjadikannya suatu roda penggerak dari peningkatan dan kemajuan."
          },
          {
            "type": "user",
            "text1": "Ohh, pantes, di tempat ini karyanya terlihat lebih Ludic! ya"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Betul sekali!"
          },
          {
            "type": "mascot",
            "text": "Karya-karya kolektif masterbuilder Neoneshia menjawab alasan perkembangan tadi dengan karya usil eksperimental untuk kemajuan kekaryaan."
          },
          {
            "type": "mascot",
            "text": "Konon, terdapat Mystery Box yang menyimpan arsip blueprint pengembangan kota ini loh. Apakah kamu lihat ada kotak di sana?"
          },
          {
            "type": "mascot",
            "text": "Ambil dan lihatlah apa yang kamu dapatkan!"
          },
          {
            "type": "user",
            "text1": "Aku sudah lihat!"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Tarik saja tetapi jangan lupa masukkan lagi ya agar yang lain bisa melihat juga!"
          },
          {
            "type": "mascot",
            "text": "Kabari aku yaa kalau kamu udah selesai berkeliling!"
          },
          {
            "type": "user",
            "text1": "Let’s goo~"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Setelah berkeliling di sini, karya mana yang paling membuatmu terkesan?"
          },
          {
            "type": "vote"
          },
        ],
        [
          {
            "type": "mascot",
            "text": "That’s cool! Aku jadi kepo bagaimana masterbuilder pilihanmu bisa berinovasi seperti itu~ Yuk, ikut aku ke tempat selanjutnya!"
          },
          {
            "type": "next"
          }
        ],
      ]
    }    
  )
}
