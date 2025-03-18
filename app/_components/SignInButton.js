import Image from "next/image";
import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form
      action={signInAction}
    >
      <button
        type="submit"
        className="flex cursor-pointer items-center gap-6 text-lg md:text-xl border border-primary-300 px-4 py-2 md:px-10 md:py-4 font-medium"
      >
        <Image
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
