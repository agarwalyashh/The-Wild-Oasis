"use client"
import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteReservation } from '../_lib/actions';

function DeleteReservation({ bookingId }) {
  return (
    <button onClick={()=>deleteReservation(bookingId)} className='cursor-pointer group flex items-center gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-2 hover:bg-accent-600 transition-colors hover:text-primary-900'>
      <TrashIcon className='md:h-5 md:w-5 h-3 w-3 text-primary-600 group-hover:text-primary-800 transition-colors' />
      <span className='mt-1'>Delete</span>
    </button>
  );
}

export default DeleteReservation;