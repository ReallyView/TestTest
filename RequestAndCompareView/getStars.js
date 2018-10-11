import gql from 'graphql-tag'

export const getStars = gql`
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
      
    }
  }
}`

export default reviewDataArrayQuery