import React, { useState } from 'react'

const TO_DO = () => {
    const[list,setList]=useState(["a "])
    const [add ,setAdd]=useState()
    const[checked, setChecked]=useState(false)
    
  
    const addtolist=(x)=>{
setList([...list, x])
    }

    const deletelist=(d)=>{
      const newlist= [...list]
      newlist.splice(d,1)
    setList(newlist)

    }

    const check=(s)=>{
        
       setChecked(true)
    }
  return (
    <div  className='mt-[2rem]'>
      <input  className='caret-orange-300 bg-slate-200 h-[2rem] w-[12rem]'  placeholder= "enter to add" type='text' value={add} onChange={(e)=>setAdd(e.target.value)}></input>
      <button onClick={()=>addtolist(add)}>Add to List</button>
      
     { list.map((i, index)=>(
        <div className=' flex flex-row justify-center gap-[2rem]'>
            <input   onClick={()=>check()} type="checkbox" ></input>
        <h1>{index} {i}</h1>
        {checked[i] ? (null):(   <button onClick={()=>deletelist(index)}>Delete </button>)
       
     
        }
        
        </div>
      ))}
    </div>
  )
}

export default TO_DO
