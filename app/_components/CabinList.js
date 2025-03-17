import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";
async function CabinList({filter}) {
  const cabins=await getCabins()
  if(!cabins.length)
    return null
  let displayedCabins;
  if(filter==="all")
    displayedCabins=cabins;
  else if(filter==="small")
    displayedCabins=cabins.filter((cabin)=>cabin.maxCapacity<=3);
  else if(filter==="medium")
    displayedCabins=cabins.filter((cabin)=>cabin.maxCapacity<=7&&cabin.maxCapacity>3);
  else if(filter==="large")
    displayedCabins=cabins.filter((cabin)=>cabin.maxCapacity>7);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
export default CabinList;