import Link from "next/link";
import Logo from "./Logo";
function NavigationHeader() {
  return (
    <div className="justify-between mx-auto py-2 md:py-3 px-9 items-center relative z-10 flex">
      <Logo />
      <ul className="flex lg:gap-8 md:gap-6 gap-4 text-xs xs:text-sm lg:text-lg">
        <li className="cursor-pointer">
          <Link href="/cabins">Cabins</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="cursor-pointer hidden sm:block">
          <Link href="/account">Guest Area</Link>
        </li>
        <li className="cursor-pointer sm:hidden">
          <Link href="/account">Account</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationHeader
