import Link from "next/link";

export default function Page() {
    return (
      <div className="text-center space-y-4 md:space-y-6 mt-4">
        <h1 className="sm:text-2xl text-xl lg:text-3xl font-semibold">
          Thank you for your reservation!
        </h1>
        <Link
          href="/account/reservations"
          className="underline text-lg md:text-xl text-accent-500 inline-block"
        >
          Manage your reservations &rarr;
        </Link>
      </div>
    );
  }