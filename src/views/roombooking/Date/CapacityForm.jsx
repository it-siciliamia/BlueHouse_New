import React, { useEffect, useState } from 'react'
import useCalendarStore from '../../../stores/calendar'
import '../index.css'

const CapacityForm = () => {
  const [adults,setAdults] = useState(0);
  const [children,setChildren] = useState(0);
  const [rooms,setRooms] = useState(1);
  const {yTop,xLeft,selectedCapacity,setSelectedCapacity} = useCalendarStore();

  const handleCapacity = () =>{
    if((adults>0 || children>0) && rooms>0 ){
        setSelectedCapacity(adults,children,rooms)
    }
  }

  return (
    <div className={`calendar-popup fixed top-0 calendar-el left-0 right-0 pb-8 border-8 px-4 mt-3 h-[40%] max-w-[325px] bg-white text-black pt-3`} style={{ top: `${yTop + 40}px`, left: `${xLeft}px` }}>
        <div className={`flex p-2 border-top align-middle`}>
            <div className="w-full p-2">Adults</div>
            <div className='flex border justify-content-around w-100'>
                <button onClick={()=>{if(adults>0) setAdults(adults-1)}} className='btn'>-</button>
                <div className='py-2'>{adults}</div>
                <button onClick={()=>{setAdults(adults+1)}} className='btn'>+</button>
            </div>
        </div>
        <div className={`flex p-2 border-top align-middle`}>
            <div className="w-full p-2">Children</div>
            <div className='flex border justify-content-around w-100'>
                <button onClick={()=>{if(children>0) setChildren(children-1)}} className='btn'>-</button>
                <div className='py-2'>{children}</div>
                <button onClick={()=>{setChildren(children+1)}} className='btn'>+</button>
            </div>
        </div>
        <div className={`flex p-2 border-top align-middle`}>
            <div className="w-full p-2">Rooms</div>
            <div className='flex border justify-content-around w-100'>
                <button onClick={()=>{if(rooms>1) setRooms(rooms-1)}} className='btn'>-</button>
                <div className='py-2'>{rooms}</div>
                <button onClick={()=>{setRooms(rooms+1)}} className='btn'>+</button>
            </div>
        </div>
        <button className='btn btn-primary text-center w-full py-2 my-4' onClick={handleCapacity}>Validate</button>
    </div>
  )
}

export default CapacityForm
