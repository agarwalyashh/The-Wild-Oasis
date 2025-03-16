import Link from 'next/link'
function NotFound() {
  return (
    <main className='text-center space-y-4 md:space-y-6 mt-4'>
      <h1 className='sm:text-2xl text-xl lg:text-3xl font-semibold'>
        This page could not be found :(
      </h1>
      <Link
        href='/'
        className='inline-block bg-accent-500 text-primary-800 md:px-6 md:py-3 p-3 text-sm sm:text-lg'
      >
        Go back home
      </Link>
    </main>
  )
}

export default NotFound
