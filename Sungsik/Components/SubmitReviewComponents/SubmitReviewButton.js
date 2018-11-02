import React from 'react'
import gql from 'graphql-tag'
import { Button } from 'react-native'
import { graphql } from 'react-apollo'

const containerStyle = {
  width: 350,
  height: 20
}

function Submit ({ mutate, author, name, text, grades, finishSubmit }) {
  return (
    <Button
      title={'제출하기'}
      containerStyle={containerStyle}
      onPress={() => {
        mutate({ variables: { author, name, text, grades } })
        finishSubmit()
      }}
    />
  )
}

export default graphql(gql`
  mutation CreateReview($author: ID!, $name: String!, $text: String!, $grades: [GradeInput!]) {
    createReview(author: $author, name: $name, text: $text, grades: $grades)
    {
      id
    }
  }
`)(Submit)
