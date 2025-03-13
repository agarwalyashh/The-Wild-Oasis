import Link from "next/link";
import Logo from "./Logo";

function Navigation() {
  return (
    <div className="flex justify-between mx-auto max-w-7xl py-3 items-center relative z-10">
      <Logo />
      <ul className="flex gap-8">
        <li className="cursor-pointer">
          <Link href="/cabins">Cabins</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="cursor-pointer">
          <Link href="/account">Guest Area</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
