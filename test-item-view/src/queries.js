// 설명 : query 들을 한 번에 모아두는 파일

import gql from 'graphql-tag'

// export const ITEM_REVIEWS_VIEW = gql`
//   {
//     query ($itemId: ID!) {
//     reviews(itemId: $itemId, filter: RECENT) {
//       id,
//       title,
//       author {
//         id,
//         profileImgUrl,
//         name
//       },
//       imgUrls,
//       text,
//       grades {
//         id,
//         name,
//         starNum
//       },
//       likeNum,
//       dislikeNum
//     }
//   }
// `

export const ITEM_REVIEWS_VIEW = gql`
 query{
  reviews(itemId: "cjny40w8gexf80995vnexcbsg", filter: RECENT) {
    id,
      title,
      author {
        id,
        profileImgUrl,
        name
      },
      imgUrls,
      text,
      grades {
        id,
        name,
        starNum
      },
      likeNum,
      dislikeNum
    }
}
`
