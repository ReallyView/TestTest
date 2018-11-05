import React from 'react'
import { Query } from 'react-apollo' // react 에 연결하는 방법
import { ITEM_REVIEWS_VIEW } from './queries'
import ReviewCard from './ReviewCard'

const ItemReviewsView = (props) =>
  <Query
    query={ITEM_REVIEWS_VIEW}
    variables={{
      itemId: props.itemId
    }}>
  {({loading, data, error}) => {
    if (loading) return 'loading'
    if (error) return 'error'
    return data.reviews.map((review, index) =>
      <ReviewCard
        key={index}
        review={review}
      />
    )
    }
  }
</Query>

export default ItemReviewsView