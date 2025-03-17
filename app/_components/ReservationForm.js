"use client"
function ReservationForm({cabin}) {
    const {maxCapacity} = cabin;
    return (
      <div className='flex flex-col w-full'>
        <div className='bg-primary-800 text-primary-300 flex items-center p-2 md:p-4'>
          <p>Logged in as</p>
  
          {/* <div className='flex gap-4 items-center'>
            <img
              // Important to display google profile images
              referrerPolicy='no-referrer'
              className='h-8 rounded-full'
              src={user.image}
              alt={user.name}
            />
            <p>{user.name}</p>
          </div> */}
        </div>
  
        <form className='bg-primary-900 text-sm sm:text-lg flex-1 flex flex-col p-2 md:p-4 gap-4'>
          <div className='flex flex-col gap-2'>
            <label htmlFor='numGuests'>How many guests?</label>
            <select
              name='numGuests'
              id='numGuests'
              className='bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm p-3'
              required
            >
              <option value='' key=''>
                Select number of guests...
              </option>
              {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                <option value={x} key={x}>
                  {x} {x === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </div>
  
          <div className='flex flex-col gap-2'>
            <label htmlFor='observations'>
              Anything we should know about your stay?
            </label>
            <textarea
              name='observations'
              id='observations'
              className='bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm px-2 min-h-[70px]'
              placeholder='Any pets, allergies, special requirements, etc.?'
            />
          </div>
  
          <div className='flex justify-end items-center gap-2 sm:gap-4 md:gap-6'>
            <p className='text-primary-300 text-xs sm:text-sm md:text-base'>Start by selecting dates</p>
            <button className='curspor-pointer bg-accent-500 text-primary-800 text-xs sm:text-sm md:text-lg p-2 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300'>
              Reserve now
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default ReservationForm;