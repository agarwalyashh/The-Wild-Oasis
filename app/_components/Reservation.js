import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
async function Reservation({cabinId,cabin}) {
    const [settings,bookedDates] = await Promise.all([
          getSettings(),
          getBookedDatesByCabinId(cabinId)
        ])
  return (
    <div className="md:flex-row flex flex-col gap-6 md:gap-0 border border-primary-800 mx-auto xl:mx-0 max-w-[900px] xl:max-w-none">
        <DateSelector settings={settings} bookedDates={bookedDates} cabin={cabin}/>
        <ReservationForm cabin={cabin}/>
      </div>
  )
}

export default Reservation
