import Image from "next/image";
import bg from "../public/bg.png";
import Link from "next/link";
export default function Page() {
  return (
    <main className="mt-24">
      <Image src={bg} alt="background-image" fill placeholder="blur" quality={80} className="object-cover object-top"/>
      <div className="relative z-10 flex flex-col gap-4">
        <h1 className="text-8xl text-primary-50 font-normal tracking-wide text-center">
          Welcome to paradise
        </h1>
        <Link href="/cabins" className="flex justify-center">
          <h1 className="py-3 px-5 bg-accent-500 text-primary-800 text-lg hover:bg-accent-600 transition-all duration-75">
            Explore luxury cabins
          </h1>
        </Link>
      </div>
    </main>
  );
}
