import Spinner from "../_components/Spinner";

export default function Loading(){
    return(
       <div className="h-screen flex flex-col gap-2 justify-center items-center">
         <Spinner/>
         <h1 className="text-primary-300 text-lg sm:text-xl lg:text-2xl">Loading Cabin Data...</h1>
       </div>
    )
}