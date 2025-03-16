import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";
async function CabinList() {
  const cabins=await getCabins()
  if(!cabins.length)
    return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-14">
      {cabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
export default CabinList;