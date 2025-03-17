"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter()
  const pathName = usePathname();
  const activeFilter = searchParams.get("capacity") || "all";
  
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter); // this sets the param but doesn't change it in the url
    router.replace(`${pathName}?${params.toString()}`,{scroll:false}) // this way we need to change the url
  }
  return (
    <div className="flex justify-end">
      <button
        onClick={() => handleFilter("all")}
        className={`lg:px-4 px-2 py-2 text-xs sm:text-sm lg:text-lg hover:bg-primary-700 cursor-pointer text-primary-100 border border-primary-50 ${activeFilter==="all"?"bg-primary-700":""}`}
      >
        All Cabins
      </button>
      <button
        onClick={() => handleFilter("small")}
        className={`lg:px-4 px-2 py-2 text-xs sm:text-sm lg:text-lg hover:bg-primary-700 cursor-pointer text-primary-100 border border-primary-50 ${activeFilter==="small"?"bg-primary-700":""}`}
      >
        1-3 guests
      </button>
      <button
        onClick={() => handleFilter("medium")}
        className={`lg:px-4 px-2 py-2 text-xs sm:text-sm lg:text-lg hover:bg-primary-700 cursor-pointer text-primary-100 border border-primary-50 ${activeFilter==="medium"?"bg-primary-700":""}`}
      >
        4-7 guests
      </button>
      <button
        onClick={() => handleFilter("large")}
        className={`lg:px-4 px-2 py-2 text-xs sm:text-sm lg:text-lg hover:bg-primary-700 cursor-pointer text-primary-100 border border-primary-50 ${activeFilter==="large"?"bg-primary-700":""}`}
      >
        8-12 guests
      </button>
    </div>
  );
}

export default Filter;
