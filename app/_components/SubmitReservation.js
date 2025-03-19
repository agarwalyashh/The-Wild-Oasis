"use client";

import { useFormStatus } from "react-dom";

function SubmitReservation() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="cursor-pointer bg-accent-500 text-primary-800 text-xs sm:text-sm md:text-lg p-2 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
      {pending?"Reserving...":"Reserve now"}
    </button>
  );
}

export default SubmitReservation;
