import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useCreateReviewMutation } from 'src/generated/graphql'

import { RatingInput } from './RatingInput'

export const NewReview = () => {
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')

  const [createReviewMutation] = useCreateReviewMutation({
    variables: {
      //    Dummy Project is the name dummy product page
      projectName: 'dummyProject',
      rating,
      description
    },
    refetchQueries: ['Reviews']
  })

  return (
    <div className="mt-4 lg:mt-0 lg:row-span-3">
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl text-gray-900">Submit Review</p>
      <div className="py-1">
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-b sm:border-gray-200 sm:py-5">
          <div className="mt-1 sm:mt-0 sm:col-span-3">
            <p className="mb-2 text-sm text-gray-500">Your Review</p>
            <textarea
              id="reviewBody"
              rows={3}
              value={description}
              onChange={e => {
                setDescription(e.target.value)
              }}
              className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              defaultValue={''}
            />
          </div>
        </div>
      </div>
      <div className="pt-5 py-2">
        <div className="flex items-center">
          <p className="text-lg pr-4">Your Rating</p>
          <RatingInput rating={rating} setRating={setRating}></RatingInput>
        </div>
      </div>
      <div className="flex py-3">
        <div>
          <button
            onClick={() => {
              const ratingOutOfFive = (rating + 1) / 2
              console.log('Submitting', {
                ratingOutOfFive,
                rating,
                description
              })

              toast.promise(
                createReviewMutation({
                  variables: {
                    projectName: 'dummyProject',
                    rating: ratingOutOfFive,
                    description
                  }
                }),
                {
                  loading: 'Adding review',
                  success: 'Added review!',
                  error: err => {
                    console.log(err)
                    return 'Failed to add review'
                  }
                }
              )
            }}
            className="w-full bg-indigo-600 border border-transparent rounded-md py-1 px-3 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ">
            Submit review
          </button>
        </div>
      </div>
    </div>
  )
}
