import React, { useState, useEffect } from 'react'

export default function Contactform() {
  const [emailInput, setEmailInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [messageInput, setMessageInput] = useState('')

  return (
    <div>
      <div>
        <input type="text" placeholder="name" value={nameInput} />
        <input type="email" placeholder="email" value={emailInput} />
      </div>
      <textarea
        className="message"
        placeholder="message"
        rows="5"
        cols="36"
        value={messageInput}
      />
    </div>
  )
}
