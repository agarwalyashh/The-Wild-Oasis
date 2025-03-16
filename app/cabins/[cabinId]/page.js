import { getCabin, getCabins } from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// export const metadata={
//     title:"Cabin"
// }

export async function generateMetadata({params})
{
    const {name}=await getCabin(params.cabinId);
    return{
        title:`Cabin ${name}`
    }
}

export async function generateStaticParams(){ // to explicitely tell nextjs which routes should be generated at build time (static rendering)
  const cabins=await getCabins()
  const ids=cabins.map((cabin)=>({cabinId:cabin.id.toString()}))
  return ids; 
}

export default async function Page({params}) {
  const { id, name, maxCapacity, regularPrice, discount, image, description } = await getCabin(params.cabinId);

  return (
    <div className="mx-auto w-[90%] my-10 md:my-20">
      <div className="md:grid md:grid-cols-[3fr_4fr] flex flex-col md:gap-15 gap-4 lg:gap-20 border border-primary-800">
        <div className="relative h-[300px] md:h-auto">
          <Image fill src={image} alt={`Cabin ${name}`} className="object-cover"/>
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
        <h2 className="text-3xl md:text-4xl mt-10 lg:text-5xl font-semibold text-center">
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}