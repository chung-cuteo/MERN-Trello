import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'


function CardItem() {
  return (
    <Card
      elevation={4}
      sx={{
        cursor: 'pointer',
        overflow: 'unset',
      }}
    >
      <CardMedia
        sx={{
          aspectRatio: '300/160',
        }}
        image="https://fastly.picsum.photos/id/15/200/200.jpg?hmac=8F3A7g2kO57xRlUcdio-9o4LDz0oEFZrYMldJkHMpVo"
        title=""
      />
      <CardContent
        sx={{
          p: 1.5,
        }}
      >
        <Typography>card 1</Typography>
      </CardContent>
      <CardActions
        sx={{
          p: '0 4px 8px 4px',
        }}
      >
        <Button startIcon={<GroupIcon />} size="small">
          20
        </Button>
        <Button startIcon={<CommentIcon />} size="small">
          12
        </Button>
        <Button startIcon={<AttachmentIcon />} size="small">
          11
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardItem