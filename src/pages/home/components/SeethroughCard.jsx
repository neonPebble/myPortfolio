import React from 'react'
import Tilt from 'react-parallax-tilt'

export default function SeethroughCard() {
  return (
    <Tilt glareEnable perspective={1000} glareBorderRadius="12px" tiltReverse>
      <div className=" bg-[#ffffff30] p-[20px] rounded-xl seeThroughCard shadow-xl ">
        <h2 className="text-[#e5e6ae] text-center p-[10px] ">
          FrontEnd Skills
        </h2>
        <ul className="flex flex-col items-center justify-center text-white list-none p-[20px] text-center gap-1">
          <li>Html</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </Tilt>
  )
}
