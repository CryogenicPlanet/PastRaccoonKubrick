import {
  SortOrder,
  useNewReviewSubscription,
  useReviewsQuery
} from './generated/graphql'

/**
 * Wrapper hook around the review query and review subscription to return all reviews in one place nicely
 */
export const useReviews = () => {
  const { data, loading } = useReviewsQuery({
    variables: {
      where: {
        Project: {
          is: {
            name: {
              equals: 'dummyProject'
            }
          }
        }
      },
      orderBy: [
        {
          createdAt: SortOrder.Asc
        }
      ]
    }
  })

  const { data: subData, loading: subLoad } = useNewReviewSubscription()

  const reviews = data?.reviews || []

  console.log(subData, subLoad)

  const subReview = subData?.newReview
  if (subReview) {
    const subReviews = [...reviews, subData.newReview]
    return { reviews: subReviews, loading }
  }
  return { reviews: [...reviews], loading }
}
