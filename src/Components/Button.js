import React from 'react'
import './Styles/Button.css'

function Button(props) {



  return (
    <>
      <button onClick={() => props.onClick(props.children)}>{props.children}</button>
    </>
  )
}

export default Button
