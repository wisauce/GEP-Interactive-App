import { getUserName } from "@/utils/nameToStorage"
export default function Messages() {
  const nama = getUserName()
  return (
    {
      "texts": [
        [
          {
            "type": "mascot",
            "text": "YEY! Welcome to Mexirelia!"
          },
          {
            "type": "user",
            "text1": "Let’s gooo!",
            "text2": "Yuhuuu~"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Waaaah! Para Masterbuilder terus melakukan pengembangan Kota Ludic! tanpa henti sampai-sampai Mexirelia ini telah mencapai batas keusilan tertinggi!"
          },
          {
            "type": "mascot",
            "text": `Inilah manifestasi yang telah lama kita coba gaungkan, namun baru terwujud pada saat kamu hadir, Underdog ${nama}! Aku rasanya seperti ada di mimpi!`
          },
          {
            "type": "user",
            "text1": "Whaat? Aku tidak menyangka, lohh"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Di sini semuanya dilakukan dengan gigih dan penuh kesungguhan. Aku sangat yakin para Masterbuilder di sini berhasil mendefinisikan keusilan sebagai suatu upaya dalam melakukan sesuatu tanpa adanya kekangan atas kepuasan berkarya."
          },
          {
            "type": "mascot",
            "text": "Aku begitu terinspirasi… Bagaimana denganmu? Karya mana yang paling membuatmu terinspirasi?"
          },
          {
            "type": "vote"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Waaah akupun setuju denganmu, karya itu begitu WOW sampai membuatku tercengang!"
          },
          {
            "type": "mascot",
            "text": "Loh, kok perjalanan kita sudah sampai di ujung?! Aku tidak ingin ini berakhir…"
          },
          {
            "type": "user",
            "text1": "OH NOOO",
            "text2": "Loh, loh…"
          }
        ],
        [
          {
            "type": "mascot",
            "text": `Mari bertemu lagi di lain waktu, Underdog ${nama}. Semoga pengalaman ini dapat menginspirasimu agar semakin Ludic!`
          },
          {
            "type": "user",
            "text1": "Noooo, aku masih mau main disini"
          }
        ],
        [
          {
            "type": "mascot",
            "text": "Harapanku, Masterbuilder Kota Ludic! dapat mengingatkanmu bahwa manusia pada dasarnya adalah makhluk yang bermain—bebas dari tuntutan produktivitas dan pakem baku dalam berkarya."
          },
          {
            "type": "mascot",
            "text": "Karya di kota ini bukanlah sekadar estetika, tetapi juga medium refleksi atas eksistensi manusia dalam masyarakat."
          },
          {
            "type": "mascot",
            "text": "Mari gaungkan suaramu, Underdog! Kota Ludic! membutuhkan lebih banyak Masterbuilder untuk membangun ruang interaksi dalam seni sebagai permainan yang membuka kemungkinan baru dalam kehidupan!"
          },
          {
            "type": "next"
          }
        ]
      ]
    }       
  )
}
