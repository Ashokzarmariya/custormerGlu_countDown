import React, { useEffect, useState } from 'react'

const CountDown = ({ status, timeLimit, time, setTime }) => {
 
 
 
 
 var timer;
 useEffect(() => {
  timer = setInterval(handleCount, 1000)
  return ()=>clearInterval(timer)
 },)
 
 const handleCount = () => {
  if (time && status==="PLAY") {
   setTime(time - 1);
  }
 }

 
 


  return (
   <div className='mx-20 py-20'>
    
    <div className='flex space-x-1 items-end'>
     <p className='text-7xl font-semibold'> {time}</p>
    <p className='text-3xl'>s</p>
    </div>
    
      
    </div>
  )
}

export default CountDown
