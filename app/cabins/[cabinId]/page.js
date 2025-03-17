import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

// export const metadata={
//     title:"Cabin"
// }

export async function generateMetadata({ params }) {
  const {cabinId} = await params
  const { name } = await getCabin(cabinId);
  return {
    title: `Cabin ${name}`,
  };
}

export async function generateStaticParams() {
  // to explicitely tell nextjs which routes should be generated at build time (static rendering)
  const cabins = await getCabins();
  const ids = cabins.map((cabin) => ({ cabinId: cabin.id.toString() }));
  return ids;
}

export default async function Page({ params }) {
  const {cabinId} = await params
  const cabin = await getCabin(cabinId);
  const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin

  // const settings = await getSettings();
  // const bookedDates = await getBookedDatesByCabinId(cabinId) // this way it will take a lot of time as next call happens only after previous one is resolved
  // const [cabins,settings,bookedDates] = await Promise.all([
  //   getCabin(cabinId),
  //   getSettings(),
  //   getBookedDatesByCabinId(cabinId)
  // ])
  // const { id, name, maxCapacity, regularPrice, discount, image, description } = cabins

  // But still this way, we are blocking the cabinData code which can be fetched earlier separately. Therefore we use another Reservation Component
  return (
    <div className="mx-auto w-[90%] my-4 md:my-8 space-y-6 md:space-y-8">
      <div className="md:grid md:grid-cols-[3fr_4fr] flex flex-col md:gap-15 gap-4 lg:gap-20 border border-primary-800">
        <div className="relative h-[300px] md:h-auto">
          <Image
            fill
            src={image}
            alt={`Cabin ${name}`}
            className="object-cover"
          />
        </div>

        <div className="p-6">
          <h3 className="text-accent-100 font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-primary-950">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary-300">{description}</p>

          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 items-center">
              <UsersIcon className="md:h-5 md:w-5 h-3 w-3 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="md:h-5 md:w-5 h-3 w-3 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="md:h-5 md:w-5 h-3 w-3 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl mt-10 lg:text-5xl font-semibold text-center text-accent-400">
          Reserve today. Pay on arrival.
        </h2>
      </div>
      <Suspense fallback={<Spinner/>}>
        <Reservation cabinId={cabinId} cabin={cabin}/>
      </Suspense>
    </div>
  );
}
