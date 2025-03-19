"use client"

import { useFormStatus } from "react-dom";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <div className="flex justify-end items-center">
      <button
        type="submit"
        disabled={pending}
        className="bg-accent-500 text-sm sm:text-lg p-2 sm:px-4 sm:py-2 lg:px-6 lg:py-4 cursor-pointer text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      >
        {pending ? "Updating..." : "Update reservation"}
      </button>
    </div>
  );
}
export default Submit;
