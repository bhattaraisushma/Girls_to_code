import React from 'react'

const Footer = (props) => {
  return (
    <>
         <div className=' h-[9rem] w-max-screen bg-orange-500 flex items-center justify-center font-bold  text-white text-4xl mt-[1px]'>{props.title}</div>
    </>
  )
}

export default Footer
