import React from 'react'

import home1 from './project-pics/home1.png'

export default function ProjectCard3() {
  const codeUrl = ''
  const liveUrl = ''

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
    <div className=" bg-[#ffffff30] p-[20px] rounded-xl seeThroughCard shadow-xl grid grid-rows-[auto,auto,auto auto] projectCard">
      <img
        alt="Project Name"
        src={home1}
        className="w-full h-auto rounded-xl"
      />
      <h2 className="text-[#e5e6ae] text-center p-[10px] font-semibold tracking-wider py-2">
        AnimeList
      </h2>
      <p className="py-2 text-center">
        A fullstack app to lookup and save animes and notes
      </p>
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          className="px-4 py-1 text-center rounded-full"
          onClick={handleCodeClick}
        >
          Code
        </button>
        <button
          type="button"
          className="px-4 py-1 text-center rounded-full"
          onClick={handleLiveClick}
        >
          Live
        </button>
      </div>
    </div>
  )
}
