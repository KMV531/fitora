import React from 'react'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

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

function MobileNav() {
  return (
    <Drawer className='relative'>
      <DrawerTrigger asChild>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className='bg-gray-600'>
        <DrawerHeader>
          <DrawerTitle>
            <div className='flex flex-col items-center gap-y-6'>
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
              <Button className='bg-red-600 py-2 px-3 text-white font-semibold cursor-pointer hover:bg-red-700'>
                Sign Up
              </Button>
            </div>
          </DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <Button className='absolute top-4 right-4'>
              <X />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileNav
