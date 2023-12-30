import React, { useState } from 'react'

const ClickCounter = () => {
//   const[count,setCount]=useState(0);
  

//   const increase=()=>{
//     setCount(count +1)

//   }
//   const decrease=(x)=>{
//     if(count>0)
//     {
//       setCount(count-x)
//     }
  
    
  // }
  const[arr, setArr]=useState([{first:" ", last:" "}])
  
  return (
    <>
{/* <h1>Count:{count}</h1>

      <button  className='h-9 w-[8rem] rounded-md mr-[2rem] bg-slate-400' onClick={increase}>Increase</button>
      <button className='h-9 w-[8rem] rounded-md mr-[2rem] bg-slate-400' onClick={()=>decrease(2)}>Decrease</button> */}


      <input   type ="text" value={arr.first} onChange={(e)=>setArr({...arr, first:e.target.value })} placeholder='Enter the name to add'  ></input>
     
      <input   type ="text" value={arr.two} onChange={(e)=>setArr({...arr, last:e.target.value})} placeholder='Enter the name to add'  ></input>
      <button >ADD</button>
      <h1>{arr.first}</h1>
      <h1>{arr.last}</h1>
    </>
  )
}

export default ClickCounter
