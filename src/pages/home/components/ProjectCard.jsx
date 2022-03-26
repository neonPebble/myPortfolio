import React from 'react'
import Tilt from 'react-parallax-tilt'

export default function ProjectCard() {
  return (
    <Tilt glareEnable perspective={1000} glareBorderRadius="12px" tiltReverse>
      <div className=" bg-[#ffffff30] p-[20px] rounded-xl seeThroughCard shadow-xl ">
        <img alt="Project Name" />
        <h2 className="text-[#e5e6ae] text-center p-[10px] ">Project Name</h2>
      </div>
    </Tilt>
  )
}
