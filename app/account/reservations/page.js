import Link from "next/link";
import ReservationCard from "../../_components/ReservationCard";
import { getBookings } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";

export const metadata = {
  title: "Reservations",
};

export default async function Page() {
  const session = await auth();
  const bookings = await getBookings(session.user.guestId);
  return (
    <div className="flex flex-col gap-2 md:gap-4">
      <h2 className="font-semibold lg:text-2xl sm:text-xl text-lg text-accent-400">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="sm:text-lg text-sm">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="xl:space-y-6 md:space-y-4 space-y-3">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
