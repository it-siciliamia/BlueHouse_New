import { eachDayOfInterval, endOfMonth, format, getDay, parse, startOfMonth, startOfToday } from "date-fns";
import { create } from "zustand";

const handleFormattedDate = (day, month, year) => {
    // const parsedDate = parse(`${day} ${month} ${year}`, 'd MMMM yyyy', new Date())
    // return format(parsedDate, 'MMM d, yyyy')
    console.log(day, month, year)

    // Ensure the month is a full month name or short month name
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // Ensure day is a two-digit number, month is in short format (e.g., 'Jan'), and year is a four-digit number
    const formattedMonth = monthNames[month]; // Assuming `month` is a 0-based index (0 = Jan, 1 = Feb, etc.)
    const formattedDay = String(day).padStart(2, '0'); // Ensure the day is 2 digits (e.g., '01' instead of '1')

    // Create the formatted date string and parse it
    const dateString = `${formattedDay} ${formattedMonth} ${year}`;
    const parsedDate = parse(dateString, 'd MMM yyyy', new Date());

    // Ensure the parsed date is valid before formatting
    if (isNaN(parsedDate)) {
        console.error("Invalid date:", dateString);
        return null; // Return null or handle error as needed
    }

    // Return the formatted date
    return format(parsedDate, 'MMM d, yyyy');
}

const useCalendarStore = create((set, get) => {
    // setter to update the year
    // const setNewYear = (newYear: number) => {
    const setNewYear = () => {
        const currentYear = parseInt(format(startOfToday(), 'yyyy'));
        if (get().year !== currentYear) {
            set({ year: currentYear });
            setDaysOfMonthsOfTheNewYear(); // Update days of each month for the new year
        }
    }
    // setter to update the daysOfMonthsOfTheYear
    const setDaysOfMonthsOfTheNewYear = () => {
        const months = Array.from({ length: 12 }, (_, i) => i + parseInt(format(startOfToday(), 'dd MM yyyy').split(' ')[1]) - 1) // [0, 1, ..., 11]
        const daysOfEachMonth = {}
        months.forEach((month) => {
            const start = startOfMonth(new Date(get().year, month)) //=> Mon Sep 01 2014
            const end = endOfMonth(start) //=> Mon Sep 03 2014
            const days = eachDayOfInterval({ start, end }).map((date) => format(date, 'dd')) // array of days (numbers)
            const monthName = format(new Date(get().year, month), 'MMMM')
            const firstDayOfWeek = getDay(start) - 1 === -1 ? 6 : getDay(start) - 1
            const alignedDays = Array(firstDayOfWeek).fill('').concat(days)
            daysOfEachMonth[monthName] = alignedDays
        })
        set({ daysOfMonthsOfTheYear: daysOfEachMonth })
    }
    // setter to update the selectedStart
    const setSelectedStart = (day, month, year) => {
        const formattedDate = handleFormattedDate(day, month, year)
        // Ensure end date is after the start date
        set({ selectedStart: formattedDate })
    }
    // setter to update the selectedEnd 
    const setSelectedEnd = (day, month, year) => {
        const formattedDate = handleFormattedDate(day, month, year)
        set({ selectedEnd: formattedDate })
    }

    //set selectedStart to null
    const voidSelectedStart = () => set({ selectedStart: null })

    //set selectedStart to null
    const voidSelectedEnd = () => set({ selectedEnd: null })

    //set status to a new value
    const setStatus = (newStatus) => set({ status: newStatus })

    // change the value of xLeft
    const setNewXLeft = (value) => {
        set({ xLeft: value })
    }

    // change the value of xLeft
    const setNewYTop = (value) => {
        set({ yTop: value })
    }

    return {
        year: parseInt(format(startOfToday(), 'dd MM yyyy').split(' ')[2]), // get the actuel year, 2024
        daysOfMonthsOfTheYear: {}, // get all month & their days, { [junuary]: [1, 2, ..., 31], ... }
        selectedStart: null, // this is for check-in, Jun 2, 2024
        selectedEnd: null, // this is for check-out, Jun 10, 2024
        setDaysOfMonthsOfTheNewYear,
        setSelectedStart,
        setSelectedEnd,
        voidSelectedStart,
        voidSelectedEnd,
        setNewYear,
        status: null,
        setStatus,
        xLeft: 0, // position from left in px
        yTop: 0, //position from the top of the viewport in px
        setNewXLeft,
        setNewYTop
    }
})

export default useCalendarStore