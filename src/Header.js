import React from 'react'

const Header = (props) => {
  return (
    <>
      <div className=' h-[10rem] w-max-screen bg-orange-500 flex items-center text-yellow-50 justify-center font-bold text-4xl mb-[1px]'>{props.title}</div>
    </>
  )
}

export default Header
