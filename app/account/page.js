import Link from "next/link";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Account",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ")[0];
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-accent-400 text-lg md:text-xl xl:text-2xl">
        Welcome,<span className="font-semibold mx-1">{firstName}</span>
      </h1>
      <h2 className="text-primary-300 text-sm md:text-lg xl:text-xl">Check out your Reservations <Link href="/account/reservations" className="mx-1 text-accent-500 underline italic">here</Link></h2>
      <h2 className="text-primary-300 text-sm md:text-lg xl:text-xl">To update your profile,<Link href="/account/profile" className="mx-2 text-accent-500 underline italic">Click here</Link></h2>
    </div>
  );
}
