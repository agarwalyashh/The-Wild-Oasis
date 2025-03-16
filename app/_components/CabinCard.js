import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border-primary-800 border">
      <div className="relative w-1/3">
        <Image
          src={image}
          fill // position absolute, top,b,l,r=0
          alt={`Cabin ${name}`}
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className="w-2/3 md:p-4 p-2">
        <div className="bg-primary-950">
          <h3 className="text-accent-500 font-semibold sm:text-xl text-lg lg:text-2xl">
            Cabin {name}
          </h3>

          <div className="flex gap-2 sm:gap-3 items-center">
            <UsersIcon className="md:h-5 md:w-5 w-3 h-3 text-primary-600" />
            <p className="sm:text-lg text-sm text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-1 sm:gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="sm:text-2xl text-xl lg:text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="sm:text-2xl text-xl lg:text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t border-t-primary-800 text-right p-2">
          <Link
            href={`/cabins/${id}`}
            className="border-l px-2 whitespace-nowrap text-xs sm:text-lg border-primary-800 inline-block hover:bg-accent-600 transition-all hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
