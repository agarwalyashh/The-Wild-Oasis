import SelectCountry from "@/app/_components/SelectCountry";
import Image from "next/image";

export const metadata={
  title:"Update Profile"
}

export default function Page() {
  // const countryFlag = "";
  const nationality = "portugal";

  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold lg:text-2xl sm:text-xl text-lg text-accent-400">
        Update your guest profile
      </h2>

      <p className="lg:text-lg sm:text-sm text-xs text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <form className="bg-primary-900 xl:p-8 md:p-6 xs:p-4 p-3 lg:text-lg md:text-sm text-xs flex lg:gap-6 md:gap-4 gap-3 flex-col">
        <div className="space-y-2">
          <label>Full name</label>
          <input
            disabled
            className="lg:h-10 md:h-8 h-6 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            disabled
            className="lg:h-10 md:h-8 h-6 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            {/* <Image
              src={countryFlag}
              width="60"
              height="60"
              alt="Country flag"
              className="h-5 rounded-sm"
            /> */}
          </div>

          <SelectCountry
            name="nationality"
            id="nationality"
            className="lg:h-10 md:h-8 h-6 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultCountry={nationality}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            className="lg:h-10 md:h-8 h-6 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center">
          <button className="bg-accent-500 lg:p-3 p-2 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}