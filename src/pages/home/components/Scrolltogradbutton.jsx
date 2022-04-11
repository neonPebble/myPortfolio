import React from 'react'

export default function Scrolltogradbutton(props) {
  const { scrollRef, buttonText, scrollPosition = 'center' } = props

  // scrollPosition should be one of 'start', 'center', 'end', or 'nearest'

  async function handleScrollClick(e) {
    e.target.classList.add('btnAnimate')
    setTimeout(() => {
      e.target.classList.remove('btnAnimate')
      scrollRef.current.scrollIntoView({
        behavior: 'smooth',
        block: scrollPosition,
        inline: 'nearest'
      })
    }, 500)
    // console.log(scrollPosition)
    // console.log(scrollRef.current)
  }

  return (
    <button
      type="button"
      className="px-4 py-2 text-center rounded-full fiveGradBtn mt-5 scrollbtns"
      onClick={handleScrollClick}
    >
      {buttonText}
    </button>
  )
}
