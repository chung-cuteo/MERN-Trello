import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function CardItem({ card }) {

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: card._id, data: { ...card } })

  const dnsKitCardStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : null,
  }

  return (
    <Card
      ref={setNodeRef}
      style={dnsKitCardStyle}
      {...attributes}
      {...listeners}
      elevation={4}
      sx={{
        cursor: 'pointer',
        overflow: 'unset',
      }}
    >
      {card?.cover && (
        <CardMedia
          sx={{
            aspectRatio: '300/160',
          }}
          image={card?.cover}
          title=""
        />
      )}

      <CardContent
        sx={{
          p: 1.5,
        }}
      >
        <Typography>{card?.title}</Typography>
        <Typography
          sx={{
            fontSize: '0.8rem',
          }}
        >
          {card?.description}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          p: '0 4px 8px 4px',
        }}
      >
        <Button startIcon={<GroupIcon />} size="small">
          {card?.memberIds?.length || 0}
        </Button>
        <Button startIcon={<CommentIcon />} size="small">
          {card?.comments?.length || 0}
        </Button>
        <Button startIcon={<AttachmentIcon />} size="small">
          {card?.attachments?.length || 0}
        </Button>
      </CardActions>
    </Card>
  )
}

export default CardItem
