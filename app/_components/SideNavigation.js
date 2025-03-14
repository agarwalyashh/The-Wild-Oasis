import {
    CalendarDaysIcon,
    HomeIcon,
    UserIcon,
  } from '@heroicons/react/24/solid';
  import SignOutButton from './SignOutButton';
import Link from 'next/link';
  
  const navLinks = [
    {
      name: 'Home',
      href: '/account',
      icon: <HomeIcon className='lg:h-5 lg:w-5 sm:h-3 sm:w-3 h-2 w-2 text-primary-600' />,
    },
    {
      name: 'Reservations',
      href: '/account/reservations',
      icon: <CalendarDaysIcon className='lg:h-5 lg:w-5 sm:h-3 sm:w-3 h-2 w-2 text-primary-600' />,
    },
    {
      name: 'Guest profile',
      href: '/account/profile',
      icon: <UserIcon className='lg:h-5 lg:w-5 sm:h-3 sm:w-3 h-2 w-2 text-primary-600' />,
    },
  ];
  
  function SideNavigation() {
    return (
      <nav className='border-r border-primary-900 min-h-[calc(100vh-64px)]'>
        <ul className='flex flex-col gap-2 h-full text-[10px] xs:text-xs sm:text-sm lg:text-lg mx-auto'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`py-3 xl:px-5 lg:px-3 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-1 xs:gap-2 md:gap-4 xl:font-semibold text-primary-200`}
                href={link.href}
              >
                <span>{link.icon}</span>
                <span className='mt-1'>{link.name}</span>
              </Link>
            </li>
          ))}
  
          <li>
            <SignOutButton />
          </li>
        </ul>
      </nav>
    );
  }
  
  export default SideNavigation;