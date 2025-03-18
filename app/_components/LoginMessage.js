import Link from "next/link"

function LoginMessage() {
  return (
    <section className="bg-primary-800 text-primary-300 flex items-center justify-center min-h-[50px] w-full tracking-wide text-sm sm:text-lg lg:text-xl">
      Please  <Link href="/login" className="text-accent-500 underline mx-2">login</Link> to reserve this cabin now.
    </section>
  )
}

export default LoginMessage
