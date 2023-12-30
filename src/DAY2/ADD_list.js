import React from 'react'
import { useState } from 'react'

const ADD_list = () => {
    const[arr, setArr]=useState(["sush"])
    const [add ,setAdd]=useState()
    // const[two, setTwo]=useState()
    const addto=(data)=>{
  
  setArr([...arr, data])
}
  return (
    
    <>
    
   
      <input   type ="text" value={add} onChange={(e)=>setAdd(e.target.value)} placeholder='Enter the name to add'  ></input>
     
      {/* <input   type ="text" value={two} onChange={(e)=>setTwo(e.target.value)} placeholder='Enter the name to add'  ></input> */}
      <button onClick={()=>addto(add)}>ADD</button>
     { arr.map((i)=>(
      <h1>{i}</h1>
      ))}
    </>
   
  )
}

export default ADD_list
