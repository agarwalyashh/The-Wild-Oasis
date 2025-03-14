import Image from "next/image";
import about1 from "../../public/about-1.jpg";
import about2 from "../../public/about-2.jpg";
import Link from "next/link";
export const metadata = {
  title: "About",
};
export default function Page() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-5 text-sm items-center gap-10 space-y-10">
        <div className="lg:col-span-3">
          <h1 className="xl:text-4xl md:text-3xl sm:text-2xl text-lg text-accent-400 font-medium">
            Welcome to The Wild Oasis
          </h1>

          <div className="lg:space-y-8 md:space-y-6 space-y-4 sm:text-lg">
            <p>
              Where nature&apos;s beauty and comfortable living blend
              seamlessly. Hidden away in the heart of the Italian Dolomites,
              this is your paradise away from home. But it&apos;s not just about
              the luxury cabins. It&apos;s about the experience of reconnecting
              with nature and enjoying simple pleasures with family.
            </p>
            <p>
              Our 8 luxury cabins provide a cozy base, but the real freedom and
              peace you&apos;ll find in the surrounding mountains. Wander
              through lush forests, breathe in the fresh air, and watch the
              stars twinkle above from the warmth of a campfire or your hot tub.
            </p>
            <p className="md:block hidden">
              This is where memorable moments are made, surrounded by
              nature&apos;s splendor. It&apos;s a place to slow down, relax, and
              feel the joy of being together in a beautiful setting.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Image
            src={about1}
            alt="Family sitting around a fire pit in front of cabin"
          />
        </div>

        <div className="lg:col-span-2 lg:block hidden">
          <Image src={about2} alt="Family that manages The Wild Oasis" />
        </div>

        <div className="lg:col-span-3">
          <h1 className="xl:text-4xl md:text-3xl sm:text-2xl text-lg text-accent-400 font-medium">
            Managed by our family since 1962
          </h1>

          <div className="space-y-8 sm:text-lg">
            <p>
              Since 1962, The Wild Oasis has been a cherished family-run
              retreat. Started by our grandparents, this haven has been nurtured
              with love and care, passing down through our family as a testament
              to our dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we&apos;ve maintained the essence of The Wild
              Oasis, blending the timeless beauty of the mountains with the
              personal touch only a family business can offer. Here, you&apos;re
              not just a guest; you&apos;re part of our extended family. So join
              us at The Wild Oasis soon, where tradition meets tranquility, and
              every visit is like coming home.
            </p>
          </div>
        </div>
        <div className="lg:hidden">
          <Image src={about2} alt="Family that manages The Wild Oasis" />
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <Link
          href="/cabins"
          className="inline-block bg-accent-500 xl:px-8 xl:py-5 text-primary-800 sm:text-lg text-sm p-4 font-semibold hover:bg-accent-600 transition-all"
        >
          Explore our luxury cabins
        </Link>
      </div>
    </>
  );
}
