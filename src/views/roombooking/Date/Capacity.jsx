import React, { useEffect } from 'react'
import useCalendarStore from '../../../stores/calendar'
import CapacityForm from './CapacityForm'

const Capacity = () => {

  const { selectedCapacity, status, setNewXLeft, setNewYTop, setStatus, voidSelectedCapacity } = useCalendarStore()
  const handleVoidCapacity = (e) => { e.stopPropagation(); voidSelectedCapacity() }
  const handleCapacityClick = () => setStatus("capacity")
  useEffect(() => {
    const inputElement = document.querySelector('.inputCapacity')
    let animationFrameId

    const updatePosition = () => {
      if (inputElement) {
        const rect = inputElement.getBoundingClientRect()
        if (status === "capacity") {
          setNewXLeft(rect.left)
          setNewYTop(rect.top)
        }


        // Schedule the next frame
        animationFrameId = requestAnimationFrame(updatePosition)
      }
    }
    // Start the loop
    updatePosition()

    // Cleanup function to cancel animationFrameId
    return () => cancelAnimationFrame(animationFrameId)
  }, [setNewXLeft, setNewYTop, status])
  return (
    <>
      <div onClick={handleCapacityClick} className={`inputCapacity calendar-el w-full bg-white p-12px border border-black/30 flex items-center gap-3 cursor-pointer`}>
        {selectedCapacity
        ? <div className='flex w-full'><span className="whitespace w-full">{selectedCapacity[0]} adult(s), {selectedCapacity[1]} child(ren) and {selectedCapacity[2]} room(s).</span><img src="/assets/images/close.svg" onClick={handleVoidCapacity} className="ms-auto cursor-pointer" title="Clear the selected date" aria-label={`Clear the selected check-in date`} /></div>
        : <div className='flex w-full'><span className="text-black/70 capitalize whitespace-nowrap w-full">Pick capacity</span>{status!=='capacity'?<img src="/assets/images/arrow-down.svg" className="cursor-pointer" title="Pick capacity" aria-label="Calendar icon for picking a capacity" />:<img src="/assets/images/arrow-up.svg" className="cursor-pointer" title="Pick capacity" aria-label="Calendar icon for picking a capacity" />}</div>}

      </div>
      {status === 'capacity' && <CapacityForm />}
    </>

  )
}

export default Capacity
