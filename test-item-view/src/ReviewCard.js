import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import CardMedia from '@material-ui/core/CardMedia'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const starImages = [
  require('./GradeStars/1-star.png'),
  require('./GradeStars/2-star.png'),
  require('./GradeStars/3-star.png'),
  require('./GradeStars/4-star.png'),
  require('./GradeStars/5-star.png')
]

const ReviewCard = ({ review }) => (
  <Link to={`/detailReviews/${review.itemId}`}>
    <Card>
      {/*프로필 사진, 유저 이름*/}
      <CardHeader
        title={review.author.name}
        avatar={
          <Avatar src={review.author.profileImgUrl}/>
        }
      />

      {/*제목*/}
      <Typography>{review.title}</Typography>

      {/*평가 항목, 별점*/}
      <CardContent>
        <List
          {
            ...review.grades.map((grade, index) => (
            <ListItem key={index}>
              <ListItemText>{grade.name}</ListItemText>
              <CardMedia image={starImages[grade.starNum - 1]}/>
            </ListItem>
            ))
          }
        />
        {review.text}
      </CardContent>

      {/* 좋아요 버튼, sns 공유 버튼 */}
      <CardActions>
        <IconButton aria-label='Add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='Share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  </Link>
)

export default ReviewCard