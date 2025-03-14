import Image from "next/image";
import bg from "../public/bg.png";
import Link from "next/link";
export default function Page() {
  return (
    <main className="flex flex-1 justify-center items-center min-h-[calc(100vh-100px)]">
      <Image src={bg} alt="background-image" fill placeholder="blur" quality={100} className="object-cover object-top"/>
      <div className="relative z-10 flex flex-col gap-4">
        <h1 className="xl:text-8xl md:text-6xl text-4xl text-primary-50 font-normal tracking-wide text-center">
          Welcome to paradise
        </h1>
        <Link href="/cabins" className="flex justify-center">
          <h1 className="md:py-3 py-2 lg:px-5 md:px-4 px-3 bg-accent-500 text-primary-800 text-lg hover:bg-accent-600 transition-all duration-75">
            Explore luxury cabins
          </h1>
        </Link>
      </div>
    </main>
  );
}
