import React from 'react'

export default function Somecomponent(props) {
  const { someContent } = props
  // const { key } = props

  return <p className="inline-block px-4 py-1">{someContent.text}</p>
}
