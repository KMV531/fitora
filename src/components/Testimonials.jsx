import React from 'react'
import { TestimonialCarousel } from './TestimonialCarousel'

function Testimonials() {
  return (
    <section className='bg-[#34353A] py-24' id='testimonials'>
      <div className='container mx-auto'>
        <div className='flex flex-col space-y-5 lg:flex-row lg:items-center lg:justify-center lg:gap-x-10 px-5 lg:px-0'>
          <div className='flex flex-col items-left space-y-8 max-w-2xl'>
            <h1 className='text-2xl lg:text-5xl font-bold max-w-xl'>
              What Our Happy Clients Say About Us
            </h1>

            <p className='text-lg text-gray-400 lg:max-w-xl'>
              Hear from our satisfied members who have transformed their fitness
              journey with FITORA! Their success and experiences showcase the
              effectiveness of our programs, expert guidances and supportive
              environment.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
