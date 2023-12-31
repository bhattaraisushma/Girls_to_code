import React, { useState } from 'react'

const TO_DO = () => {
    const[list,setList]=useState(["a "])
    const [add ,setAdd]=useState()
    const[checkedlist, setCheckedlist]=useState(false);
    const[checkeditem, setCheckeditem]=useState()
    
  
    const addtolist=(x)=>{
setList([...list, x])
setAdd(" ")
    }

    const deletelist=(d)=>{
      const newlist= [...list]
      newlist.splice(d,1)
    setList(newlist)

    }

    const check=(e, index)=>{
       const value=e.target.checked

        
       setCheckedlist(value)
        setCheckeditem(index)
        
    }
  return (
    <div  className='mt-[2rem]'>
      <input  className='caret-orange-300 bg-slate-200 h-[2rem] w-[12rem]'  placeholder= "enter to add" type='text' value={add} onChange={(e)=>setAdd(e.target.value)}></input>
      <button onClick={()=>addtolist(add)}>Add to List</button>
      
     { list.map((i, index)=>(
        <div className=' flex flex-row justify-center gap-[2rem]'>
            <input   onChange={(e)=>check(e ,index)} type="checkbox" ></input>
        <p style={{textDecoration:  checkedlist && checkeditem == index ? "line-through": ""}}>
        <h1>{index} {i}</h1>
        </p>
         <button onClick={()=>deletelist( index)}>Delete </button>
       
     
        
        
        </div>
      ))}
    </div>
  )
}

export default TO_DO
