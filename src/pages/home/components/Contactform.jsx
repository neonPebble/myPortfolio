import React, { useState } from 'react'

export default function Contactform() {
  const [emailInput, setEmailInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [messageInput, setMessageInput] = useState('')

  const mailapiUrl =
    'https://send-grid-contact-me-node-neonpebble.vercel.app/sendmail'

  async function sendMail(e) {
    e.target.classList.add('btnAnimate')

    const userMailData = {
      senderEmail: emailInput,
      message: messageInput,
      senderName: nameInput
    }

    setTimeout(async () => {
      e.target.classList.remove('btnAnimate')

      console.log('the seyTimeout callback is working')

      const resObj = await fetch(mailapiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify(userMailData)
      })

      const resJson = await resObj.json()
      if (resJson.successful) {
        console.log('success')
      } else {
        console.log('failed to send')
      }
    }, 500)
  }

  function clearIput(e) {
    e.target.classList.add('btnAnimate')
    setEmailInput('')
    setNameInput('')
    setMessageInput('')
    setTimeout(() => {
      e.target.classList.remove('btnAnimate')
    }, 500)
  }
  return (
    <div className="p-2 w-min">
      <div className="flex w-full gap-2 contactInputContainer">
        <input
          type="text"
          placeholder="name"
          className="bg-[#5d064f] my-1 tracking-wider"
          value={nameInput}
          onChange={e => setNameInput(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={emailInput}
          onChange={e => setEmailInput(e.target.value)}
          className="bg-[#5d064f] my-1 tracking-wider"
        />
      </div>
      <div>
        <textarea
          className="message bg-[#5d064f] my-2 w-full tracking-wider"
          placeholder="message"
          value={messageInput}
          rows="5"
          onChange={e => setMessageInput(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center gap-2 ">
        <button
          type="button"
          className="px-4 py-1 text-center rounded-full fiveGradBtn"
          onClick={sendMail}
        >
          Send
        </button>
        <button
          type="button"
          className="px-4 py-1 text-center rounded-full fiveGradBtn"
          onClick={clearIput}
        >
          clear
        </button>
      </div>
    </div>
  )
}
