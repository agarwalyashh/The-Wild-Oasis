"use client";
export default function Error({ error, reset }) {
  return (
    <main className="h-screen flex justify-center items-center flex-col gap-4 md:gap-6">
      <h1 className=" text-xl sm:text-2xl lg:text-3xl font-semibold">
        Something went wrong!
      </h1>
      <p className="text-sm sm:text-lg">{error}</p>

      <button className="inline-block bg-accent-500 text-primary-800 md:p-4 p-3 text-sm sm:text-lg" onClick={reset}>
        Try again
      </button>
    </main>
  );
}
// This only renders when there is an error while re-rendering a component (with the exception of root layout, for which we would need global-error.js which needs its own html and body tags)