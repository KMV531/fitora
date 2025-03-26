import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const services = [
  {
    title: 'Personal Training',
    description:
      'Get customized workout plans tailored to your fitness goals with one-on-one guidance from our professional trainers.',
  },
  {
    title: 'Expert Trainer',
    description:
      'Train with highly qualified and experienced fitness experts who will motivate and support you every step of the way.',
  },
  {
    title: 'Flexible Timing',
    description:
      'Enjoy the convinience of workout sessions that fit your schedule, making it easier to stay committed to your fitness journey.',
  },
]

function Services() {
  return (
    <section className='bg-[#2C2E32] pt-20' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col space-y-5 lg:flex-row lg:items-center lg:justify-center px-5 lg:px-0'>
          <div className='flex flex-col items-left space-y-8 max-w-2xl order-2 lg:order-none'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold'>
              Why Should People Choose FITORA Services
            </h1>
            {services.map((service, index) => {
              return (
                <div key={index} className='space-y-4'>
                  <div className='flex items-center gap-2'>
                    <CheckCircle2 fill='red' />
                    <h1 className='font-semibold'>{service.title}</h1>
                  </div>
                  <p className='text-lg text-gray-300 lg:max-w-2xl'>
                    {service.description}
                  </p>
                </div>
              )
            })}
            <Button className='bg-red-600 py-7 px-4 text-white text-lg cursor-pointer hover:bg-red-700 w-max'>
              Join Today
            </Button>
          </div>
          <div className='order-1 pb-3 lg:p-0'>
            <Image
              src={'/assets/service.png'}
              alt='our expert trainers'
              width={500}
              height={500}
              className='object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
