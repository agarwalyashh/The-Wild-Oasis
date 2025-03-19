"use client";
import { differenceInDays, isSameDay, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { useReservation } from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, bookedDates, cabin }) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const today = new Date().getDate();
  const {range,setRange,resetRange} = useReservation()

  const displayRange = isAlreadyBooked(range,bookedDates)?{}:range;

  const {regularPrice,discount} = cabin

  const numNights = differenceInDays(displayRange.to, displayRange.from);
  const cabinPrice = numNights*(regularPrice-discount);

  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className="flex flex-col justify-between">
      <div className="flex items-center justify-center">
        <DayPicker
          classNames={{ selected: `bg-accent-400 rounded-full` }}
          className="my-2 xs:px-8 sm:px-0 md:px-4 scale-85 xs:scale-105 sm:scale-85 md:scale-100 md:place-self-center w-full h-full"
          mode="range"
          animate
          hideNavigation
          selected={displayRange}
          onSelect={(range) => setRange(range)}
          min={minBookingLength}
          max={maxBookingLength}
          startMonth={new Date(currentYear, currentMonth)}
          endMonth={new Date(currentYear + 5, 11)}
          hidden={[
            { before: new Date(currentYear, currentMonth, today) },
            { after: new Date(currentYear + 5, 11, 0) },
          ]}
          captionLayout="dropdown"
          numberOfMonths={1}
          disabled={(currDate)=>bookedDates.some((day)=>isSameDay(day,currDate))}
        />
        <DayPicker
          classNames={{ selected: `bg-accent-400 rounded-full` }}
          className="hidden xs:px-8 sm:px-0 xl:flex sm:flex md:hidden my-2 md:px-4 scale-85 xs:scale-105 sm:scale-85 md:scale-100 md:place-self-center w-full h-full"
          mode="range"
          animate
          hideNavigation
          selected={displayRange}
          onSelect={(range) => setRange(range)}
          min={minBookingLength}
          max={maxBookingLength}
          startMonth={new Date(currentYear, currentMonth + 1)}
          hidden={[
            { before: new Date(currentYear, currentMonth, today) },
            { after: new Date(currentYear + 5, 11, 0) },
          ]}
          endMonth={new Date(currentYear + 5, 11)}
          captionLayout="dropdown"
          numberOfMonths={1}
          disabled={(currDate)=>bookedDates.some((day)=>isSameDay(day,currDate))}
        />
      </div>

      <div className="flex items-center justify-between px-2 md:px-4 bg-accent-500 text-primary-800 min-h-[50px]">
        <div className="flex items-center gap-2 w-full">
          <p className="flex gap-1 items-center whitespace-nowrap">
            {discount > 0 ? (
              <>
                <span className="text-sm md:text-lg lg:text-xl">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-sm md:text-lg lg:text-xl">
                ${regularPrice}
              </span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <div className="flex items-center gap-2">
              <p className="bg-accent-600 text-sm md:text-lg lg:text-xl w-fit p-2">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p className="w-fit">
                <span className="text-sm md:text-lg font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-sm md:text-lg lg:text-xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </div>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className="border border-primary-800 md:p-2 p-4 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
