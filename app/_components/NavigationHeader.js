/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Logo from "./Logo";
import { auth } from "../_lib/auth";
async function NavigationHeader() {
  const session = await auth(); // Note that since authentication uses cookies, it makes this component dynamic and since NavigationHeader is present in app layout, entire app is dynamic
  return (
    <div className="justify-between mx-auto py-2 md:py-3 px-9 items-center relative z-10 flex">
      <Logo />
      <ul className="flex items-center lg:gap-8 md:gap-6 gap-4 text-xs xs:text-sm lg:text-lg">
        <li className="cursor-pointer hover:text-accent-400">
          <Link href="/cabins">Cabins</Link>
        </li>
        <li className="cursor-pointer hover:text-accent-400">
          <Link href="/about">About</Link>
        </li>
        <li className="cursor-pointer hover:text-accent-400">
          {session?.user?.image ? (
            <Link href="/account">
              <img
                className="rounded-full w-6 md:h-8 md:w-8"
                src={session.user.image}
                alt="User"
                referrerPolicy="no-referrer"
              />
            </Link>
          ) : (
            <Link href="/account">Account</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavigationHeader;
