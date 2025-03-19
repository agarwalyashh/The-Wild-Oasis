import Submit from "@/app/_components/Submit";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";

async function page({ params }) {
  const { bookingId } = await params;
  const { cabinId, observations, numGuests } = await getBooking(bookingId);
  const { maxCapacity } = await getCabin(cabinId);
  return (
    <div className="space-y-2 md:space-y-4">
      <h2 className="font-semibold text-lg md:text-xl lg:text-2xl text-accent-400 whitespace-nowrap">
        Edit Reservation #{bookingId}
      </h2>

      <form
        className="bg-primary-900 p-4 md:px-8 md:py-6 xl:py-8 xl:px-12 text-lg flex gap-4 md:gap-6 flex-col"
        action={updateReservation}
      >
        <input defaultValue={bookingId} name="bookingId" hidden />
        <div className="space-y-2">
          <label htmlFor="numGuests" className="text-xs sm:text-lg">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="h-6 sm:h-10 md:h-14 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm text-xs sm:text-lg"
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

        <div className="space-y-2">
          <label htmlFor="observations" className="text-xs sm:text-lg whitespace-nowrap">
            Anything we should know?
          </label>
          <textarea
            defaultValue={observations}
            name="observations"
            type="text"
            className="text-xs sm:text-lg px-2 py-1 h-18 sm:h-26 md:h-40 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>
        <Submit />
      </form>
    </div>
  );
}
export default page;
