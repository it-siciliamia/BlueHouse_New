import React, { useEffect, useState } from 'react'
import useCalendarStore from '../../../stores/calendar'

const CapacityForm = () => {
  const [adults,setAdults] = useState(0);
  const [children,setChildren] = useState(0);
  const [rooms,setRooms] = useState(0);
  const {yTop,xLeft} = useCalendarStore();

  return (
    <div className={`calendar-popup fixed top-0 calendar-el left-0 right-0 pb-8 border-8 px-4 h-[40%] max-w-[325px] bg-white text-black pt-3`} style={{ top: `${yTop + 40}px`, left: `${xLeft}px` }}>
        <div className={`flex p-2 border-top align-middle`}>
            <div className="w-full p-2">Adults</div>
            <div className='flex border justify-content-around w-100'>
                <button onClick={()=>{if(adults>0) setAdults(adults-1)}} className='btn'>-</button>
                <div className='py-2'>{adults}</div>
                <button onClick={()=>{setAdults(adults+1)}} className='btn'>+</button>
            </div>
        </div>
        {/* <div className={`flex p-2 border-top align-middle`}>
            <div className="w-full p-2">Children</div>
            <div className='flex border justify-content-around w-100'>
                <button onClick={handleAdults(false)} className='btn'>-</button>
                <div className='py-2'>{children}</div>
                <button onClick={handleChildren(true)} className='btn'>+</button>
            </div>
        </div>
        <div className={`flex p-2 border-top align-middle`}>
            <div className="w-full p-2">Rooms</div>
            <div className='flex border justify-content-around w-100'>
                <button onClick={handleRooms(false)} className='btn'>-</button>
                <div className='py-2'>{rooms}</div>
                <button onClick={handleRooms(true)} className='btn'>+</button>
            </div>
        </div> */}
        <button className='btn btn-primary text-center w-full py-2 my-4'>Validate</button>
    </div>
  )
}

export default CapacityForm
