"use client";
import Image from "next/image";
import { updateGuestData } from "../_lib/actions";
import { useFormStatus } from "react-dom";
function UpdateProfileForm({ guest, children }) {
  const { email, fullName, nationality, nationalId } = guest;
  return (
    <form
      action={updateGuestData}
      className="bg-primary-900 xl:p-8 md:p-6 xs:p-4 p-3 lg:text-lg md:text-sm text-xs flex lg:gap-6 md:gap-4 gap-3 flex-col"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          name="fullName"
          disabled
          type="text"
          defaultValue={fullName}
          className="lg:h-10 md:h-8 h-6 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 px-2"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          name="email"
          defaultValue={email}
          disabled
          type="email"
          className="lg:h-10 md:h-8 h-6 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 px-2"
        />
      </div>

      <div className="space-y-2">
        <div className="flex flex-col justify-between">
          <label htmlFor="nationality">Where are you from?</label>
          {children}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalId}
          name="nationalId"
          type="number"
          className="lg:h-10 md:h-8 h-6 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm px-2"
        />
      </div>
      <Submit />
    </form>
  );
}

function Submit() {
  const {pending} = useFormStatus(); // This hook can only be used inside a component being rendered by a form
  return (
    <div className="flex justify-end items-center">
      <button
        type="submit"
        disabled={pending}
        className="bg-accent-500 cursor-pointer lg:p-3 p-2 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      >
        {pending?"Updating...":"Update profile"}
      </button>
    </div>
  );
}
export default UpdateProfileForm;
