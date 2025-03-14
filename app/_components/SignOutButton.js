import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

function SignOutButton() {
  return (
    <button className='py-3 xl:px-5 lg:px-3 cursor-pointer hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center md:gap-4 gap-1 xs:gap-2 xl:font-semibold text-primary-200 w-full'>
      <ArrowRightOnRectangleIcon className='lg:h-5 lg:w-5 sm:h-3 sm:w-3 h-2 w-2 text-primary-600' />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;