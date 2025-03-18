import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";
async function Reservation({cabinId,cabin}) {
    const session = await auth()
    const [settings,bookedDates] = await Promise.all([
          getSettings(),
          getBookedDatesByCabinId(cabinId)
        ])
  return (
    <div className="md:flex-row flex flex-col gap-6 md:gap-0 border border-primary-800 mx-auto xl:mx-0 max-w-[900px] xl:max-w-none">
        <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin}/>
        {session?.user ?<ReservationForm cabin={cabin} name={session.user.name}/>:<LoginMessage/>}
      </div>
  )
}

export default Reservation
