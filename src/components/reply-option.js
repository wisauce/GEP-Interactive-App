import { useState, useEffect } from "react"

export default function ReplyOption({text1, text2, next, section}) {
  const [op1, set1] = useState(true)
  const [op2, set2] = useState(true)
  const [clicked, setClicked] = useState(false)
  const color = section == 1 ? "#214CBB" : section == 2 ? "#a22306" : section == 3 ? "#347562" : "#ab166a"
  useEffect(() => {
    if (clicked) {
      next();
    }
  }, [clicked]); 
  return(
    <div className="flex font-blue-curve flex-col items-end gap-1">
        {
          op1 &&
          <div onClick={() => {set2(false); setClicked(true)}} 
          style={{
            backgroundColor: clicked ? color : "transparent",
            borderColor: color,
            color: clicked ? "#FEF7DD" : color,
          }}
          className="max-w-[80vw] rounded-3xl px-6 py-3 border-2">
            <p>
              {text1}
            </p>
          </div>
        }
        {
          op2 &&
          <div onClick={() => {set1(false); setClicked(true);}} 
          style={{
            backgroundColor: clicked ? color : "transparent",
            borderColor: color,
            color: clicked ? "#FEF7DD" : color,
          }}
          className="max-w-[80vw] rounded-3xl px-6 py-3 border-2">
            <p>
              {text2}
            </p>
          </div>
        }
      </div>
  )
}