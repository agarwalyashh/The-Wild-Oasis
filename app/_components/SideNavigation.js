"use client";
import {
    CalendarDaysIcon,
    HomeIcon,
    UserIcon,
  } from '@heroicons/react/24/solid';
  import SignOutButton from './SignOutButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
  
  const navLinks = [
    {
      name: 'Home',
      href: '/account',
      icon: <HomeIcon className='md:h-5 md:w-5 h-3 w-3 text-primary-600' />,
    },
    {
      name: 'Reservations',
      href: '/account/reservations',
      icon: <CalendarDaysIcon className='md:h-5 md:w-5 h-3 w-3 text-primary-600' />,
    },
    {
      name: 'Profile',
      href: '/account/profile',
      icon: <UserIcon className='md:h-5 md:w-5 h-3 w-3 text-primary-600' />,
    },
  ];
  
  function SideNavigation() {
    const pathName=usePathname() // like active class inside NavLink in react-router
    return (
      <nav className='border-r border-primary-900 min-h-[calc(100vh-64px)]'>
        <ul className='flex flex-col gap-2 h-full text-[10px] xs:text-xs sm:text-sm lg:text-lg mx-auto px-1 md:px-2'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`py-2 px-1 xl:px-5 lg:px-3 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-1 xs:gap-2 md:gap-4 xl:font-semibold text-primary-200 ${pathName===link.href && 'bg-primary-900'}`}
                href={link.href}
              >
                <span>{link.icon}</span>
                <span className="mt-1">{link.name}</span>
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