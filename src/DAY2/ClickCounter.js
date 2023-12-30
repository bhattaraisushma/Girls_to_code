import React, { useState } from 'react'

const ClickCounter = () => {
  const[count,setCount]=useState(0);
  

  const increase=()=>{
    setCount(count +1)

  }
  const decrease=(x)=>{
    setCount(count-x)
  }
  return (
    <>
<h1>Count:{count}</h1>

      <button  className='h-9 w-[8rem] rounded-md mr-[2rem] bg-slate-400' onClick={increase}>Increase</button>
      <button className='h-9 w-[8rem] rounded-md mr-[2rem] bg-slate-400' onClick={()=>decrease(2)}>Decrease</button>
    </>
  )
}

export default ClickCounter
