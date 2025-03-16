import CabinList from "@/app/_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";

export const revalidate=3600; // for making it dynamic, to overcome data cache

export const metadata = {
  title: "Cabins",
};

export default function Page() {
  return (
    <div className="flex flex-col gap-3 md:gap-5 px-6">
      <h1 className="lg:text-4xl mdLtext-3xl text-xl text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 md:text-lg text-sm">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <Suspense fallback={<Spinner/>}>
        <CabinList />
      </Suspense>
    </div>
  );
}
