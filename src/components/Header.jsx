import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import MobileNav from './MobileNav'

const NavLinks = [
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'About Us',
    href: '#about',
  },
  {
    title: 'Programs',
    href: '#programs',
  },
  {
    title: 'Testimonials',
    href: '#testimonials',
  },
]

const Header = () => {
  return (
    <header className='container mx-auto flex items-center justify-between px-4'>
      <div className='flex items-center'>
        <Link href={'/'}>
          <Image
            src={'/assets/logo.png'}
            alt='logo image'
            width={70}
            height={70}
            className='p-0'
          />
        </Link>
        <Link className='font-bold text-2xl md:text-3xl p-0' href={'/'}>
          FITORA
        </Link>
      </div>
      <div className='hidden lg:flex lg:items-center lg:gap-6'>
        <div className='flex items-center gap-4'>
          {NavLinks.map((navLink, index) => {
            return (
              <Link
                href={navLink.href}
                key={index}
                className='hover:text-red-700 transition-colors duration-300 font-semibold'
              >
                {navLink.title}
              </Link>
            )
          })}
        </div>
        <Button className='bg-red-600 py-2 px-3 text-white font-semibold cursor-pointer hover:bg-red-700'>
          Sign Up
        </Button>
      </div>
      <div className='block lg:hidden'>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
