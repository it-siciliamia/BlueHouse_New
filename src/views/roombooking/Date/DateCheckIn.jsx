import { useEffect } from "react"
import useCalendarStore from "../../../stores/calendar"
import CalendarDays from "./CalendarDays"


const DateCheckIn = () => {
  const { status, selectedStart, voidSelectedStart, setStatus, setNewXLeft, setNewYTop, setDaysOfMonthsOfTheNewYear } = useCalendarStore()
  const handleStartClick = () => setStatus('start')
  const handleVoidStart = (e) => { e.stopPropagation(); voidSelectedStart() }

  useEffect(() => {
    const inputElement = document.querySelector('.inputLeft')
    let animationFrameId

    const updatePosition = () => {
      if (inputElement) {
        const rect = inputElement.getBoundingClientRect()
        if (status === 'start') {
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

  useEffect(() => {
    setDaysOfMonthsOfTheNewYear()
  }, [setDaysOfMonthsOfTheNewYear])

  useEffect(() => {
    return () => {
      voidSelectedStart()
    }
  }, [voidSelectedStart])

  useEffect(() => {
    const handleClickOutsideCalendar = (event) => {
      const calendarElements = document.querySelectorAll('.calendar-el')
      const target = event.target
      const isOutside = !Array.from(calendarElements).some(element => element.contains(target))
      if (isOutside) setStatus(null)
    }
    document.addEventListener('click', handleClickOutsideCalendar)
    return () => document.removeEventListener('click', handleClickOutsideCalendar)
  }, [setStatus])

  return (
    <>
      <div onClick={handleStartClick} className={`inputLeft calendar-el w-full bg-white py-2 px-2 border border-black/30 flex items-center gap-3 cursor-pointer`}>
        {selectedStart ? <span className="whitespace-nowrap">{selectedStart}</span> : <span className="text-black/70 capitalize whitespace-nowrap">check-in</span>}
        {!selectedStart
          ? <img src="/assets/images/calendar.svg" className="cursor-pointer max-w-5 ms-auto" title="Pick a date" aria-label="Calendar icon for picking a date" />
          : <img onClick={handleVoidStart} src="/assets/images/close.svg" className="ms-auto cursor-pointer max-w-5" title="Clear the selected date" aria-label={`Clear the selected check-in date`} />}
      </div>

      {status === 'start' && <CalendarDays />}
    </>
  )
}

export default DateCheckIn