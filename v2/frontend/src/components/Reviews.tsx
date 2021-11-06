import React from 'react'
import { useReviews } from 'src/useReviews'

import StarRatings from './StarRatings'

export const Reviews = () => {
  const { reviews } = useReviews()

  return (
    <div className="flex flex-col py-5 space-y-3">
      {reviews &&
        reviews.map((review, id) => {
          return (
            <div
              key={`review-${id}`}
              className="flex items-center w-full space-x-4">
              <div className="flex items-center">
                <StarRatings rating={review.rating}></StarRatings>
              </div>
              <div className="flex items-center text-md">
                {review.description}
              </div>
            </div>
          )
        })}
    </div>
  )
}
