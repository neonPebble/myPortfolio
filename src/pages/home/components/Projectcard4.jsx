import React from 'react'

import schedImg from './project-pics/scheduleimage.png'

export default function ProjectCard4() {
  const codeUrl =
    'https://github.com/neonPebble/schedule'
  const liveUrl = 'https://schedule-kappa.vercel.app'

  function handleCodeClick(e) {
    e.target.classList.add('btnAnimate')
    setTimeout(() => {
      e.target.classList.remove('btnAnimate')
      window.open(codeUrl, '_blank')
    }, 500)
  }

  function handleLiveClick(e) {
    e.target.classList.add('btnAnimate')
    setTimeout(() => {
      e.target.classList.remove('btnAnimate')
      window.open(liveUrl, '_blank')
    }, 500)
  }

  return (
    <div className=" bg-[#ffffff30] p-[20px] rounded-xl seeThroughCard shadow-xl grid grid-rows-[auto,auto,auto,auto] projectCard">
      <img
        alt="Project Name"
        src={schedImg}
        className="w-full h-auto rounded-xl"
      />
      <h2 className="text-[#e5e6ae] text-center p-[10px] font-semibold tracking-wider py-2">
        Schedule
      </h2>
      <p className="py-2 text-center">
        A fullstack app to schedule meetings.
      </p>
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          className="px-4 py-1 text-center rounded-full fiveGradBtn"
          onClick={handleCodeClick}
        >
          Code
        </button>
        <button
          type="button"
          className="px-4 py-1 text-center rounded-full fiveGradBtn"
          onClick={handleLiveClick}
        >
          Live
        </button>
      </div>
    </div>
  )
}
