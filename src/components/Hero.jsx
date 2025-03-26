import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const acheivements = [
  {
    total: '105+',
    title: 'Expert Trainers',
  },
  {
    total: '970+',
    title: 'Members Joined',
  },
  {
    total: '135+',
    title: 'Fitness Programs',
  },
]

function Hero() {
  return (
    <section className='container mx-auto pt-10 lg:pt-20' id='home'>
      <div className='flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-center px-5 lg:px-0'>
        <div className='flex flex-col items-left space-y-8 max-w-2xl order-2 lg:order-none'>
          <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold uppercase'>
            get healthy body with the perfect exercises
          </h1>
          <p className='text-lg text-gray-300 lg:max-w-xl'>
            Acheive your dream body with expertly designed exercises tailored
            for strength, endurance and overall well-being. Whether you're a
            beginner or a fitness enthusiast, our workouts are crafted to help
            you stay active, build muscle and improve flexibility.
          </p>
          <Button className='bg-red-600 py-7 px-4 text-white text-lg cursor-pointer hover:bg-red-700 w-max'>
            Get Started
          </Button>
          <div className='flex space-x-4'>
            {acheivements.map((acheivement, index) => {
              return (
                <div key={index}>
                  <h1 className='text-xl font-bold'>{acheivement.total}</h1>
                  <p className='text-gray-300'>{acheivement.title}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className='order-1 pb-3 lg:p-0'>
          <Image
            src={'/assets/header.png'}
            alt='our expert trainers'
            width={750}
            height={750}
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
