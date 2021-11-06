import React, { useState } from 'react'

/**
 * Custom Star Input
 *
 * Normally it would be an anti pattern to pass a state setter down to child like this, however for just setting one properly it is is much more convenient
 * to do over setting up a state management library or react context api
 */
export const RatingInput = ({
  rating,
  setRating
}: {
  rating: number
  setRating: (_val: number) => void
}) => {
  const [tempRating, setTempRating] = useState(rating)

  //   const handleMouseover = (rating: number) => {
  //     setRating(rating)
  //     setTempRating(rating)
  //   }

  //   const handleMouseout = () => {
  //     setRating(tempRating)
  //   }

  const rate = (rating: number) => {
    setRating(rating)
    setTempRating(rating)
  }

  const stars = []
  for (let i = 0; i < 10; i++) {
    let className = 'text-gray-200'
    if (rating >= i && rating !== null) {
      className = 'text-gray-900'
    }
    stars.push(
      // So this is where the trick exists to make the half stars work
      // The outer dive has a maxWidth of 10px and overflow hidden, and we keep changing the overflow direction
      // The width of the svg itself is 20px so we get a nice half star
      <div
        key={`inputStar-${i}`}
        style={{
          display: 'inline-block',
          maxWidth: 10,
          overflow: 'hidden',
          direction: i % 2 === 0 ? 'ltr' : 'rtl'
        }}>
        <svg
          className={`${className} w-5`}
          //   onMouseOver={() => handleMouseover(i)}
          onClick={() => rate(i)}
          //   onMouseOut={() => handleMouseout()}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    )
  }
  return <div>{stars}</div>
}
