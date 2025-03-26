import { Star } from 'lucide-react'

function RatingStars() {
  return (
    <div className='flex space-x-2'>
      <Star fill='gold' size={20} />
      <Star fill='gold' size={20} />
      <Star fill='gold' size={20} />
      <Star fill='gold' size={20} />
      <Star fill='gold' size={20} />
    </div>
  )
}

export default RatingStars
