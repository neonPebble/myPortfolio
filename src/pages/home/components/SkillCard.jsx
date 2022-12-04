import React from 'react'
import Tilt from 'react-parallax-tilt'

export default function SkillCard(props) {
  const { sType } = props
  switch (sType) {
    case 'front':
      return (
        <Tilt
          glareEnable
          perspective={1000}
          glareBorderRadius="12px"
          tiltReverse
          glareReverse
          scale={1.15}
        >
          <div className=" bg-gradient-to-b from-[#97179b] to-[#97179b50] px-[20px] rounded-xl card py-[20px] shadow-5xl ">
            <h2 className="text-[#f551f5] text-center p-[10px]">
              FrontEnd Skills
            </h2>
            <ul className="flex flex-col items-center justify-center text-white list-none p-[20px] text-center gap-1">
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </Tilt>
      )
    case 'back':
      return (
        <Tilt
          glareEnable
          perspective={1000}
          glareBorderRadius="12px"
          tiltReverse
          glareReverse
          scale={1.15}
        >
          <div className=" bg-gradient-to-b from-[#97179b] to-[#97179b50] px-[20px] rounded-xl card py-[20px] shadow-5xl ">
            <h2 className="text-[#f551f5] text-center p-[10px]">
              BackEnd Skills
            </h2>
            <ul className="flex flex-col items-center justify-center text-white list-none p-[20px] text-center gap-1">
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node</li>
              <li>Next.js</li>
            </ul>
          </div>
        </Tilt>
      )
    default:
      return (
        <Tilt
          glareEnable
          perspective={1000}
          glareBorderRadius="12px"
          tiltReverse
          glareReverse
          scale={1.15}
        >
          <div className=" bg-gradient-to-b from-[#97179b] to-[#97179b50] px-[20px] rounded-xl card py-[20px] shadow-5xl ">
            <h2 className="text-[#f551f5] text-center p-[10px]">Tools</h2>
            <ul className="flex flex-col items-center justify-center text-white list-none p-[20px] text-center gap-1">
              <li>Vs Code</li>
              <li>Git</li>
              <li>Figma</li>
            </ul>
          </div>
        </Tilt>
      )
  }
}
