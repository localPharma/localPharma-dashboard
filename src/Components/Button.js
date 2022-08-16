import React from 'react'

function Button({ children, click, style }) {
  return (
    <button
      className={style}
      onClick={click}
    >
      {children}
    </button>
  )
}

export default Button