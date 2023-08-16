import React from 'react'


interface LogOutButton {
    onClick: () => void
}

const LogOut = ({onClick}: LogOutButton) => {
  return (
    <button onClick={onClick} className='rounded-full border-2 bg-[#23424c] text-white ml-3 p-4 text-xl font-bold hover:bg-[#1c343d]'>Log out</button>
  )
}

export default LogOut;