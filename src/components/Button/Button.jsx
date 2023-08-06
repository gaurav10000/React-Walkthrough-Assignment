import React from 'react'
import './Button.css'
function Button({text, onClick}) {
  return (
    <button id='btn' onClick={onClick} >{text}</button>
  )
}

export default Button