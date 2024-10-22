"use client"

import React, { useState } from 'react'

const Home = () => {
  const [valueinput,setValueInput]=useState<string>("")
  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValueInput(e.target.value);
  }
  
  const handleClick = (a: string | number) => {
    setValueInput(valueinput + a);
  }
  
const handlebutton=()=>{
 
  const add=eval(valueinput).toString();
  setValueInput(add);

}
const handleclear=()=>{
  setValueInput("")
}
  return (
    <div className='p-3 flex justify-center mt-6'>
      <div className="overflow-hidden bg-slate-900 shadow-2xl rounded-2xl p-5 ">
           <input type="text"   value={valueinput} onChange={handlechange} className='w-full py-8 px-3 p-2 border border-x-black border-y-black' placeholder='value...' />
           <div className='mt-2 p-3 gap-1 cursor-pointer items-center grid grid-cols-3'>
           {
             ['1','2','3','4','5','6','7','9','0','/','*','-','+'].map((item)=>{
                return (
                  <>
                     <div onClick={()=>handleClick(item)} className='bg-blue-500 text-white p-4 rounded-full items-center flex justify-center'>
                     {item}
                      </div>
                      
                  </>
                  
                )
             })
           }
           <button onClick={handlebutton} className='bg-pink-600 p-4 rounded-full'>=</button>
           <button onClick={handleclear} className='bg-red-600 p-4 rounded-full'>clear</button>
          
         
         </div>
           
      </div>
    </div>
  )
}

export default Home
