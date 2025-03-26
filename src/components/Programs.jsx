import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const programs = [
  {
    image: '/assets/program-1.png',
    title: 'Strength Training',
    description:
      'Build muscle, increase endurance and enhance overall strength with our expert-led resistance and weight training sessions.',
    button: 'Learn More',
    icon: <ArrowRight />,
  },
  {
    image: '/assets/program-2.png',
    title: 'Basic Yoga',
    description:
      'Improve flexibility, balance and mental well-being with guided yoga sessions designed for relaxation and inner peace.',
    button: 'Learn More',
    icon: <ArrowRight />,
  },
  {
    image: '/assets/program-3.png',
    title: 'Body Building',
    description:
      'Sculpt and define your physique with targeted workouts, expert coaching and personalized training plans.',
    button: 'Learn More',
    icon: <ArrowRight />,
  },
  {
    image: '/assets/program-4.png',
    title: 'Weight Loss',
    description:
      'Burn calories, boost metabolism and acheive your ideal weight with our effective fat-burning and cardio-based programs.',
    button: 'Learn More',
    icon: <ArrowRight />,
  },
]

function Programs() {
  return (
    <section className='bg-[#34353A] py-24' id='programs'>
      <div className='container mx-auto'>
        <div className='flex flex-col px-4 space-y-6 lg:flex-row lg:items-center lg:justify-center lg:space-x-10'>
          <h1 className='text-3xl lg:text-4xl font-bold capitalize max-w-xl'>
            The best programs we offer for you
          </h1>
          <p className='text-lg text-gray-300 lg:max-w-2xl'>
            From strength and yoga to cardio and weight loss programs. <br /> We
            offer a variety of workouts to keep you motivated and on track.{' '}
            <br /> Join use and find the perfect program for you.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 px-5 lg:px-0'>
          {programs.map((program, index) => {
            return (
              <div
                key={index}
                className='flex flex-col space-y-6 border-2 border-[#464646] rounded-lg p-7 bg-[#464646] hover:bg-[#FE552C] transition-colors duration-300'
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  width={60}
                  height={60}
                  className='object-cover'
                />
                <h1 className='font-bold text-xl'>{program.title}</h1>
                <p className='text-gray-400 max-w-2xs'>{program.description}</p>
                <Link href={'/'} className='flex items-center gap-3'>
                  <p className='text-gray-400'>{program.button}</p>
                  <p className='text-gray-400'>{program.icon}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Programs
