import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col border border-primary-800">
      <div className="flex">
        <div className="relative h-28 aspect-square hidden sm:block">
          <Image
            src={image}
            alt={`Cabin ${name}`}
            fill
            className="object-cover border-r border-primary-800"
          />
        </div>

        <div className="flex-grow px-4 md:px-6 py-3 flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-sm sm:text-lg md:text-xl font-semibold md:hidden whitespace-nowrap tracking-tight">
              {numNights} nights <br />
              in {name}
            </h3>
            <h3 className="text-lg md:text-xl font-semibold hidden md:block">
              {numNights} nights in {name}
            </h3>
            {isPast(new Date(startDate)) ? (
              <span className="bg-yellow-800 text-yellow-200 h-4 md:h-7 px-1 md:px-3 uppercase text-xs sm:font-bold flex items-center justify-center rounded-sm">
                past
              </span>
            ) : (
              <span className="bg-green-800 text-green-200 h-4 md:h-7 px-1 md:px-3 uppercase text-xs sm:font-bold flex items-center justify-center rounded-sm">
                upcoming
              </span>
            )}
          </div>

          <p className="text-sm md:text-lg text-primary-300">
            {format(new Date(startDate), "EEE, MMM dd yyyy")} (
            {isToday(new Date(startDate))
              ? "Today"
              : formatDistanceFromNow(startDate)}
            ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
          </p>

          <div className="md:flex gap-3 md:gap-5 items-baseline hidden">
            <p className="text-lg md:text-xl font-semibold text-accent-400">
              ${totalPrice}
            </p>
            <p className="text-primary-300">&bull;</p>
            <p className="text-sm md:text-lg text-primary-300 whitespace-nowrap">
              {numGuests} guest{numGuests > 1 && "s"}
            </p>
            <p className="text-xs sm:text-sm text-primary-400 sm:inline">
              Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
            </p>
          </div>
        </div>

        <div className="hidden md:flex md:flex-col border-l border-primary-800 ">
          {!isPast(startDate) ? (
            <>
              <Link
                href={`/account/reservations/edit/${id}`}
                className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 border-b border-primary-800 flex-grow px-2 hover:bg-accent-600 transition-colors hover:text-primary-900"
              >
                <PencilSquareIcon className="h-3 w-3 md:h-5 md:w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
                <span className="mt-1">Edit</span>
              </Link>
              <DeleteReservation bookingId={id} />
            </>
          ) : null}
        </div>
      </div>
      <div className="flex gap-2 md:gap-5 items-baseline md:hidden px-2 border-b md:border-0 border-primary-800">
        <p className="text-sm md:text-lg font-semibold text-accent-400">
          ${totalPrice}
        </p>
        <p className="text-primary-300">&bull;</p>
        <p className="text-sm md:text-lg text-primary-300 whitespace-nowrap">
          {numGuests} guest{numGuests > 1 && "s"}
        </p>
        <p className="text-xs sm:text-sm text-primary-400 hidden sm:inline">
          Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
        </p>
      </div>
      <div className="flex md:hidden md:border-l border-primary-800 min-h-[40px]">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservations/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 md:border-b border-primary-800 flex-grow px-2 md:px-3 hover:bg-accent-600 transition-colors hover:text-primary-900"
            >
              <PencilSquareIcon className="h-3 w-3 md:h-5 md:w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteReservation bookingId={id} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default ReservationCard;
