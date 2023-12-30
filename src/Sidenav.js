import React from 'react'

const Sidenav = (props) => {
  return (
    <>
      <div className=' h-[27rem] w-[29rem] bg-orange-400 text-white flex items-center justify-center font-bold text-4xl mr-[1px]'>{props.title}</div>
    </>
  )
}

export default Sidenav
