"use client";
import Image from "next/image";
function UpdateProfileForm({ children }) {
  return (
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
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          name="nationalID"
          className="lg:h-10 md:h-8 h-6 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
        />
      </div>
      {children}
      <div className="flex justify-end items-center">
        <button className="bg-accent-500 lg:p-3 p-2 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
          Update profile
        </button>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
