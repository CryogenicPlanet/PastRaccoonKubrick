import React from 'react'

import Star from './Star'

const StarRatings = ({ rating }: { rating: number }) => {
  const wholeFilled = Math.floor(rating)
  // Will create a dummy array of length wholeFilled
  const wholeFilledArr = wholeFilled > 0 ? [...Array(wholeFilled)] : []
  const wholeUnfilled = Math.floor(5 - rating)
  const wholeUnfilledArr = wholeUnfilled > 0 ? [...Array(wholeUnfilled)] : []

  // This can either be 0 or 0.5
  // We will always have only one half
  const halfFilled = rating - wholeFilled !== 0

  if (rating === 0) {
    return null
  }

  return (
    <div className="flex items-center">
      {wholeFilledArr.map((_, id) => (
        // Index keys are normally a bad idea but here we don't have any other unique identifier
        <Star key={id} checked={true}></Star>
      ))}
      {halfFilled && <Star halfStar={halfFilled}></Star>}
      {wholeUnfilledArr.map((_, id) => (
        <Star key={id}></Star>
      ))}
    </div>
  )
}

export default StarRatings
