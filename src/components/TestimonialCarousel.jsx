'use client'

import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import RatingStars from './RatingStars'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  {
    profile: '/assets/user-1.jpg',
    name: 'Alex Carter',
    profession: 'Software Enginneer',
    ratings: <RatingStars />,
    testimony:
      'FITORA has completely changed my approach to fitness. The personal training sessions are amazing and I have seen incredible progress in my strength and endurance.',
  },
  {
    profile: '/assets/user-2.jpg',
    name: 'Sophia Martinez',
    profession: 'Yoga instructor',
    ratings: <RatingStars />,
    testimony:
      'The basic yoga program at FITORA is exactly what I needed! The trainings are knowledgeable and the sessions have greatly improved my flexibility and metal well-being.',
  },
  {
    profile: '/assets/user-3.jpg',
    name: 'Daniel Roberts',
    profession: 'Business Analyst',
    ratings: <RatingStars />,
    testimony:
      "I joined FITORA for bodybuilding and I couldn't be happier with the results. The expert trainers provide the best guidance and the workout environment is super motivating!",
  },
]

export function TestimonialCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 7000, stopOnInteraction: false })
  )
  return (
    <Carousel
      className='w-full max-w-xl border-2 border-[#464646] rounded-lg p-7 bg-[#464646]'
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className='flex flex-col space-y-4'>
              <div className='flex items-center space-x-3'>
                <Image
                  src={testimonial.profile}
                  alt={testimonial.name}
                  width={70}
                  height={70}
                  className='object-cover rounded-full'
                />
                <div className='flex flex-col'>
                  <p className='font-semibold'>{testimonial.name}</p>
                  <p className='text-gray-400'>{testimonial.profession}</p>
                </div>
              </div>
              <div>{testimonial.ratings}</div>
              <p className='text-gray-400 text-sm'>{testimonial.testimony}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
