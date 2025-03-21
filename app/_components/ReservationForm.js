"use client";
import { useReservation } from "./ReservationContext";
import { differenceInDays } from "date-fns";
import { createBooking } from "../_lib/actions";
import SubmitReservation from "./SubmitReservation";

function ReservationForm({ cabin, name }) {
  const { range, resetRange } = useReservation();
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(endDate, startDate);
  const cabinPrice = numNights * (regularPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  };

  const createBookingWithData = createBooking.bind(null, bookingData); // becomes a function
  return (
    <div className="flex flex-col w-full">
      <div className="bg-primary-800 text-primary-300 flex items-center p-2 md:p-4">
        <p>Logged in as {name}</p>
      </div>

      <form
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
        className="bg-primary-900 text-sm sm:text-lg flex-1 flex flex-col p-2 md:p-4 gap-4"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm p-3"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm px-2 min-h-[70px]"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex justify-end items-center gap-2 sm:gap-4 md:gap-6">
          <p className="text-primary-300 text-xs sm:text-sm md:text-base">
            Start by selecting dates
          </p>
          <SubmitReservation/>
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
