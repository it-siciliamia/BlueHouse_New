import { useCallback } from "react";
import {
  format,
  isAfter,
  isBefore,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { AiOutlineLine } from "react-icons/ai";
import { daysNames } from "../../../components/helpers/constants/days";
import useCalendarStore from "../../../stores/calendar";

// get the list of all days
const CalendarDays = () => {
  const {
    status,
    year,
    daysOfMonthsOfTheYear: months,
    selectedStart,
    selectedEnd,
    voidSelectedEnd,
    setSelectedStart,
    setStatus,
    setSelectedEnd,
    setNewYear,
    xLeft,
    yTop,
  } = useCalendarStore();
  let selectedYear = year;

  const monthIndex = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const handleDateClick = useCallback(
    (actualDate) => {
      if (status === "start") {
        // const formattedDate = format(actualDate, 'MMM d, yyyy')
        // // Check if the new start date is after the current end date
        // if (selectedEnd && isAfter(parse(formattedDate, 'MMM d, yyyy', new Date()), parse(selectedEnd, 'MMM d, yyyy', new Date()))) {
        //     // console.log(check)
        //     voidSelectedEnd() // Clear end date if start date is newer
        // }
        // setSelectedStart(actualDate.split(' ')[0], actualDate.split(' ')[1], Number(actualDate.split(' ')[2]))
        // setStatus(null)

        const formattedDate = format(actualDate, "MMM d, yyyy");

        // Check if the new start date is after the current end date
        if (
          selectedEnd &&
          isAfter(
            parse(formattedDate, "MMM d, yyyy", new Date()),
            parse(selectedEnd, "MMM d, yyyy", new Date())
          )
        ) {
          voidSelectedEnd(); // Clear end date if start date is newer
        }

        // Extract day, month, and year from the `Date` object using `.getDate()`, `.getMonth()`, and `.getFullYear()`
        const day = actualDate.getDate();
        const month = actualDate.getMonth(); // Month is 0-based (0 = January, 11 = December)
        const year = actualDate.getFullYear();

        // Set the selected start using the extracted values
        setSelectedStart(day, month, year);

        // Reset status
        setStatus(null);
      }
      if (status === "end") {
        // const formattedDate = format(actualDate, 'MMM d, yyyy')
        // // Check if end date is after start date
        // if (selectedStart && isBefore(parse(formattedDate, 'MMM d, yyyy', new Date()), parse(selectedStart, 'MMM d, yyyy', new Date()))) {
        //     return
        // }
        // setSelectedEnd(actualDate.split(' ')[0], actualDate.split(' ')[1], Number(actualDate.split(' ')[2]))
        // setStatus(null)

        const formattedDate = format(actualDate, "MMM d, yyyy");

        // Check if end date is after start date
        if (
          selectedStart &&
          isBefore(
            parse(formattedDate, "MMM d, yyyy", new Date()),
            parse(selectedStart, "MMM d, yyyy", new Date())
          )
        ) {
          return;
        }

        // Extract day, month, and year from the `Date` object using `.getDate()`, `.getMonth()`, and `.getFullYear()`
        const day = actualDate.getDate();
        const month = actualDate.getMonth(); // Month is 0-based (0 = January, 11 = December)
        const year = actualDate.getFullYear();

        // Set the selected start using the extracted values
        setSelectedEnd(day, month, year);

        setStatus(null);
      }
    },
    [
      status,
      selectedStart,
      selectedEnd,
      setSelectedEnd,
      setSelectedStart,
      voidSelectedEnd,
      setStatus,
    ]
  );

  const getDateStatuses = useCallback(
    (date) => {
      const isStart = selectedStart === date;
      const isEnd = selectedEnd === date;
      const isBetween =
        selectedStart &&
        selectedEnd &&
        isAfter(
          parse(date, "MMM d, yyyy", new Date()),
          parse(selectedStart, "MMM d, yyyy", new Date())
        ) &&
        isBefore(
          parse(date, "MMM d, yyyy", new Date()),
          parse(selectedEnd, "MMM d, yyyy", new Date())
        );

      return { isStart, isEnd, isBetween };
    },
    [selectedStart, selectedEnd]
  );

  if (!status) return null;

  return (
    <div
      className={`calendar-popup fixed top-0 left-0 right-0 calendar-el pb-8 border-8 px-4 h-[40%] w-full max-w-[325px] overflow-y-scroll overflow-x-hidden bg-white text-black`}
      style={{ top: `${yTop + 40}px`, left: `${xLeft}px` }}
    >
      {Object.entries(months).map(([month, days]) => {
        if (
          month === "January" &&
          format(startOfToday(), "d MMMM yyyy").split(" ")[1] !== "January"
        ) {
          selectedYear += 1;
          setNewYear(selectedYear);
        }
        return (
          <div key={month}>
            <h2 className="font-semibold my-5 text-center">
              {month} {selectedYear}
            </h2>
            <div className="grid grid-cols-7 gap-1">
              {daysNames.map((day) => (
                <div key={day} className="font-thin text-sm text-center mb-2">
                  {day}
                </div>
              ))}
            </div>
            <ul className="grid grid-cols-7 gap-1 list-none">
              {days.map((day, index) => {
                if (!day) return <li key={index + day} />;
                // const passedDate = format(new Date(selectedYear, monthIndex[month], Number(day)), 'dd MMMM yyyy')
                const actualDate = new Date(
                  selectedYear,
                  monthIndex[month],
                  Number(day)
                );
                const dateee = format(actualDate, "MMM d, yyyy");
                const { isStart, isEnd, isBetween } = getDateStatuses(dateee);
                return (
                  <li
                    key={index}
                    onClick={() => handleDateClick(actualDate)}
                    className={`py-0.5 px-1 cursor-pointer text-center
                                                    ${
                                                      isBefore(
                                                        new Date(
                                                          selectedYear,
                                                          monthIndex[month],
                                                          Number(day)
                                                        ),
                                                        startOfToday()
                                                      )
                                                        ? "pointer-events-none"
                                                        : ""
                                                    }
                                                    ${
                                                      isStart
                                                        ? "bg-marine text-white"
                                                        : ""
                                                    }
                                                    ${
                                                      isEnd
                                                        ? "bg-marine text-white"
                                                        : ""
                                                    }
                                                    ${
                                                      isBetween
                                                        ? "bg-gray-200"
                                                        : ""
                                                    }
                                                `}
                  >
                    <div
                      className="flex justify-center items-center h-[100%]"
                      id={actualDate}
                    >
                      {isBefore(
                        new Date(selectedYear, monthIndex[month], Number(day)),
                        startOfToday()
                      ) && (
                        <div>
                          <AiOutlineLine />
                        </div>
                      )}
                      {isToday(
                        new Date(selectedYear, monthIndex[month], Number(day))
                      ) && (
                        <div className="border-2 p-1 border-[#d8e2dc]">
                          {day}
                        </div>
                      )}
                      {isAfter(
                        new Date(selectedYear, monthIndex[month], Number(day)),
                        startOfToday()
                      ) && <>{day}</>}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default CalendarDays;
