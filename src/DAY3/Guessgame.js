import React, { useEffect, useState } from 'react'



const Guessgame = () => {
    
   
    const[inputnum, setInputnum]=useState()
    const[randomnum, setRandomnum]=useState()
    const[msg, setMsg]=useState(" ")


useEffect(()=>{
    const num = Math.round(Math.random(100) * 20);
   setRandomnum(num)
},[])


useEffect(()=>{
    checknum()
},[inputnum])

const checknum=()=>{
    if(inputnum>randomnum)
    {
       setMsg("oh noo!!! Greater Guess")
    }
    else if(inputnum==randomnum)
    {
        setMsg("Woah!!!Congratulations")
    }
    else{
        setMsg("oh noo!!! Lower Guess")
    }
}



  return (
    <div className=' mt-[2rem]'>
      <input type='number'  className='bg-slate-200 w-[15rem]' value={inputnum}   min={0}
        max={20} onChange={(e)=>setInputnum(e.target.value)}   placeholder='Guess a number'></input>
      {/* <button>Submit</button> */}
      <p>
        {/* { isequal? (<p>WOAH!!!CONGRATULATIONS</p>):(  greater ? (<p> OH NO!! GREATER GUESS</p>) :(<p>LOWER GUess</p>))} */}
       Your Guess: {msg}
     </p>
    </div>
  )
}

export default Guessgame
