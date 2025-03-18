import { ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { signoutAction } from "../_lib/actions";
function SignOutButton() {
  return (
    <form action={signoutAction} className="mt-5">
      <button
        type="submit"
        className="py-2 px-1 xl:px-5 lg:px-3 gap-1 xs:gap-2 md:gap-4 cursor-pointer hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center font-semibold text-primary-200 w-full"
      >
        <ArrowLeftStartOnRectangleIcon className="md:h-5 md:w-5 h-3 w-3 text-primary-600" />
        <span className="mt-1">Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
