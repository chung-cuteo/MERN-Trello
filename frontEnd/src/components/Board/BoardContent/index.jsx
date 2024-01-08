import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Tolltip from '@mui/material/Tooltip'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ArchiveIcon from '@mui/icons-material/Archive'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import AddCardIcon from '@mui/icons-material/AddCard'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'

const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '55px'

function index() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.appCustom.boardContentHeight,
        display: 'flex',
        padding: 2,
        gap: 2,
      }}
    >
      {/* column 1 */}
      <Box
        sx={{
          width: 300,
          border: '2px solid',
          borderColor: 'primary.main',
          borderRadius: 1,
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.appCustom.boardContentHeight} - ${theme.spacing(5)})`,
        }}
      >
        {/* header */}
        <Box
          sx={{
            height: COLUMN_HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            sx={{
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Tilte
          </Typography>
          <Box>
            <Tolltip title="More Options">
              <ExpandMoreIcon
                sx={{
                  cursor: 'pointer',
                  color: 'primary.main',
                }}
                id="basic-button-column-header-menu"
                aria-controls={open ? 'basic-button-column-header-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
            </Tolltip>

            <Menu
              id="basic-menu-board-column"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button-column-header-menu',
              }}
              sx={{
                '& .MuiList-root': {
                  paddingBottom: 0,
                },
              }}
            >
              <Paper>
                <MenuList>
                  <MenuItem>
                    <ListItemIcon>
                      <AddCardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Add new card</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCut fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Cut</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentCopy fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Copy</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ContentPaste fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Paste</ListItemText>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <DeleteOutlineIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Remove</ListItemText>
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <ArchiveIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Archive</ListItemText>
                  </MenuItem>
                </MenuList>
              </Paper>
            </Menu>
          </Box>
        </Box>

        {/* list */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            p: 1,
            overflowY: 'auto',
            overflowX: 'hidden',
            maxHeight: (theme) =>
              `calc(${theme.appCustom.boardContentHeight} - ${theme.spacing(
                5,
              )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`,
          }}
        >
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

          <Card
            elevation={4}
            sx={{
              cursor: 'pointer',
              overflow: 'unset',
            }}
          >
            <CardContent
              sx={{
                p: 1.5,
              }}
            >
              <Typography>card 2</Typography>
            </CardContent>
          </Card>
        </Box>

        {/* footer */}
        <Box
          sx={{
            height: COLUMN_FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button startIcon={<AddCardIcon />} size="small">
            Add new card
          </Button>
          <Tolltip title="Drag to move">
            <DragHandleIcon
              sx={{
                cursor: 'pointer',
                color: 'primary.main',
              }}
            />
          </Tolltip>
        </Box>
      </Box>
    </Box>
  )
}

export default index
