import React from 'react'
import { useReviews } from 'src/useReviews'

import StarRatings from './StarRatings'

const TotalReviews = () => {
  const { reviews, loading } = useReviews()

  const avgRating = reviews
    ? reviews.reduce((total, { rating }) => total + rating, 0) / reviews.length
    : 0

  //  Will give us a rounded rating to the nearest 0.5
  const roundedRating = Math.round(avgRating * 2) / 2

  return (
    <div className="flex w-full items-center space-x-4">
      {reviews && reviews?.length > 0 ? (
        <div className="flex items-center">
          <StarRatings rating={roundedRating}></StarRatings>
        </div>
      ) : null}
      <span
        id="noOfReviews"
        className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
        {(!loading && reviews?.length) || 0} reviews
      </span>
    </div>
  )
}

export default TotalReviews
