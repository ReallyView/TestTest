import gql from 'graphql-tag'

export const reviewDataArrayQuery = gql`
{
  item(id: 0) {
    id
    name
    reviews {
      id
      author {
        id
        name
        profileImgUrl
      }
      imgUrls
      text
      grades {
        id
        name
        starNum
      }
      likeNum
      dislikeNum
    }
  }
  
  compareItems(id: 0, id: 1) {
    name
    starNumAvg1
    starNumAvg2
  }
}`

export default reviewDataArrayQuery