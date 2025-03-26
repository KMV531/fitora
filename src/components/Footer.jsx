import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CompanyLinks = [
  {
    title: 'About Us',
    href: '#about',
  },
  {
    title: 'Why Us',
    href: '#services',
  },
  {
    title: 'Security',
    href: '#home',
  },
  {
    title: 'Partnership',
    href: '#home',
  },
]

const CategoryLinks = [
  {
    title: 'Basic Yoga',
    href: '#home',
  },
  {
    title: 'Strength Traning',
    href: '#home',
  },
  {
    title: 'Body Building',
    href: '#home',
  },
  {
    title: 'Weight Loss',
    href: '#home',
  },
]

const ContactLinks = [
  {
    icon: <Phone size={20} fill='red' />,
    title: '+6 90 85 71 80',
  },
  {
    icon: <Mail size={20} fill='red' />,
    title: 'yukiarnold56@gmail.com',
  },
  {
    icon: <MapPin size={20} fill='red' />,
    title: 'Cameroon',
  },
]

function Footer() {
  return (
    <footer className='bg-[#30393D] pt-20'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-0 gap-10 px-10'>
          <div className='flex flex-col space-y-2 w-max'>
            <h1 className='font-semibold'>Company</h1>
            {CompanyLinks.map((CompanyLink, index) => {
              return (
                <Link
                  href={CompanyLink.href}
                  key={index}
                  className='text-gray-400 text-sm hover:text-red-700 transition-colors duration-300'
                >
                  {CompanyLink.title}
                </Link>
              )
            })}
          </div>
          <div className='flex flex-col space-y-2 w-max'>
            <h1 className='font-semibold'>Categories</h1>
            {CategoryLinks.map((CategoryLink, index) => {
              return (
                <Link
                  href={CategoryLink.href}
                  key={index}
                  className='text-gray-400 text-sm hover:text-red-700 transition-colors duration-300'
                >
                  {CategoryLink.title}
                </Link>
              )
            })}
          </div>
          <div className='flex flex-col space-y-2 w-max'>
            <h1 className='font-semibold'>Contact Us</h1>
            {ContactLinks.map((ContactLink, index) => {
              return (
                <div className='flex items-center gap-2' key={index}>
                  <p>{ContactLink.icon}</p>
                  <p
                    key={index}
                    className='text-gray-400 text-sm hover:text-red-700 transition-colors duration-300'
                  >
                    {ContactLink.title}
                  </p>
                </div>
              )
            })}
          </div>
          <div className='flex flex-col space-y-2 w-max'>
            <h1 className='font-semibold'>Subscribe Our Newsletter</h1>
            <div className='flex items-center relative'>
              <input
                type='email'
                className='border-none outline-none rounded-full p-4 bg-white text-gray-800'
                placeholder='Enter your email'
              />
              <button type='submit'>
                <ArrowUpRight
                  className='rounded-full bg-red-600 text-white absolute  top-1 right-5'
                  size={45}
                />
              </button>
            </div>
            <p className='text-gray-400'>
              Never miss an update & news to <br /> your email
            </p>
          </div>
        </div>
        <hr className='w-full text-gray-400 my-8' />
        <div className='flex flex-col space-y-5 lg:flex-row items-center justify-between'>
          <div className='flex items-center'>
            <Link href={'#home'} r>
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
          <p>
            Copyright &copy; {new Date(Date.now()).getFullYear()} KMV Design.
            All right reserved.
          </p>
          <div className='flex gap-2 items-center pb-2 lg:p-0'>
            <FaFacebook size={25} />
            <FaTwitter size={25} />
            <FaInstagram size={25} />
            <FaLinkedin size={25} />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
