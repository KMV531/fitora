import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

function About() {
  return (
    <section className='bg-[#30393D] py-28' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col space-y-5 lg:flex-row lg:space-x-10 lg:items-center lg:justify-center px-5 lg:px-0'>
          <div className='pb-1'>
            <Image
              src={'/assets/about.jpg'}
              alt='a fitness enthusiasts'
              width={500}
              height={500}
              className='object-cover rounded-lg'
            />
          </div>
          <div className='flex flex-col items-left space-y-8 max-w-3xl'>
            <h1 className='text-3xl lg:text-4xl font-bold capitalize max-w-xl'>
              get ready to reach your fitness goals
            </h1>
            <p className='text-lg text-gray-300 lg:max-w-2xl'>
              At FITORA, we are committed to helping you acheive your fitness
              goals with expert guidance, personalized workouts and a motivating
              environment. Whether you aim to build strength, improve endurance,
              or stay active, we provide the right support and training to keep
              you on track.
            </p>
            <p className='text-lg text-gray-300 lg:max-w-xl'>
              Start your journey today and transform your health with the
              perfect exercise routine.
            </p>
            <Button className='bg-red-600 py-7 px-4 text-white text-lg cursor-pointer hover:bg-red-700 w-max'>
              Free Trial Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
