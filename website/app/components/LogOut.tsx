import React from 'react'


interface LogOutButton {
    onClick: () => void
}

const LogOut = ({onClick}: LogOutButton) => {
  return (
    <button onClick={onClick}>Log out</button>
  )
}

export default LogOut;