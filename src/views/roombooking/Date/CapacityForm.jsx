import React from 'react'
import useCalendarStore from '../../../stores/calendar'

const CapacityForm = () => {
    const {yTop,xLeft} = useCalendarStore();
  return (
    <div className={`fixed top-0 left-0 right-0 pb-8 border-8 px-4 h-[40%] max-w-[325px] bg-white text-black pt-3`} style={{ top: `${yTop + 40}px`, left: `${xLeft}px` }}>
        <div className={`flex p-2 border-top align-middle`}>
            <div className="w-full p-2">Adults</div>
            <div className='flex border justify-content-around w-100'>
                <button className='btn'>-</button>
                <div className='py-2'>1</div>
                <button className='btn'>+</button>
            </div>
        </div>
        <div className={`flex p-2 border-top align-middle`}>
            <div className="w-full p-2">Children</div>
            <div className='flex border justify-content-around w-100'>
                <button className='btn'>-</button>
                <div className='py-2'>1</div>
                <button className='btn'>+</button>
            </div>
        </div>
        <div className={`flex p-2 border-top align-middle`}>
            <div className="w-full p-2">Rooms</div>
            <div className='flex border justify-content-around w-100'>
                <button className='btn'>-</button>
                <div className='py-2'>1</div>
                <button className='btn'>+</button>
            </div>
        </div>
        <button className='btn btn-primary text-center w-full py-2 my-4'>Validate</button>
    </div>
  )
}

export default CapacityForm
