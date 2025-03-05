import { getUserName } from "@/utils/nameToStorage"
export default function Messages() {
  const nama = getUserName()
  return (
    {
      "texts": [
        [
          {
            "type": "mascot",
            "text": "Waduh… Kenapa tempat ini amat sangat keos… Apakah kamu masih ingin kesini?"
          },
          {
            "type": "user",
            "text1": "Mauuu",
            "text2": "Gasss"
          }
        ],
        [
          {
            "type": "mascot",
            "text": `Selamat datang di Kreoskaura, ${nama}, sebuah daerah di mana tidak ada istilah normal atau tertata!`
          },
          {
            "type": "mascot",
            "text": "Semua yang ada di sini adalah hasil dari keusilan warga setempat yang membuat kondisi semakin ‘parah’."
          },
          {
            "type": "user",
            "text1": "Siapakah ‘warga setempat’ itu?"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Warga setempat tersebut adalah para Masterbuilder yang menciptakan karya yang sangat usil tanpa aturan serta menunjukan sisi pemberontakan akan suatu yang normatif dan terkotak-kotakan!"
          },
          {
            "type": "mascot",
            "text": `${nama}, apakah kamu tau apa yang membuat daerah ini tetap hidup?`
          },
          {
            "type": "user",
            "text1": "Tidak",
            "text2": "Apa tuh boi"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Jawabannya adalah karya dari para Masterbuilder tersebut!"
          },
          {
            "type": "mascot",
            "text": "Karya-karya kolektif ini disusun untuk menjawab dan menghancurkan ekspektasi para \"orang-yang-tidak-bisa-disebutkan-namanya\" akan hal-hal normatif terhadap keusilan dan kekacauan."
          },
          {
            "type": "mascot",
            "text": "Bak suatu kontradiksi yang berjalan, tak disangka, keusilan inilah yang mampu menghidupkan lampu kreativitas penduduk Kreoskaura! Kekeosan dan absurditas inilah yang membangkitkan jiwa tempat ini!"
          },
          {
            "type": "user",
            "text1": "Pantas aja.., karya di sini sangat kesana kemari ya~"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Apakah kamu lihat di tempat ini ada hal yang menarik? Coba dekati dinding itu deh, setahuku disitulah para warga menyimpan tulisan rahasia yang menjadi kunci keusilan mereka!"
          },
          {
            "type": "user",
            "text1": "Ya, aku melihatnya!"
          }
        ],
        [
          {
            "type": "media",
            "text": "Insert gif instruksi tarik (tunggu dari dokum)"
          },
          {
            "type": "mascot",
            "text": "Tarik ‘Aku’ dan jangan lupa kembalikan!"
          },
          {
            "type": "mascot",
            "text": "Nah, apakah kamu sudah selesai kah berkeliling di Kreoskaura?"
          },
          {
            "type": "user",
            "text1": "Sudah donggg"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Dari semua keusilan karya penghuni di sini, manakah yang paling kamu sukai?"
          },
          {
            "type": "vote"
          },
        ],
        [
          {
            "type": "mascot",
            "text": "Hahaha, baiklah! Aku suka seleramu, Underdog! Yuk, ikut aku ke tempat selanjutnya!"
          },
          {
            "type": "next"
          }
        ]
      ]
    }    
  )
}
