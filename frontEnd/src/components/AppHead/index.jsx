import React from 'react'
import Box from '@mui/material/Box'
import AppearanceMode from '~/components/AppHead/AppearanceMode'
import AppsIcon from '@mui/icons-material/Apps'
import TrelloIcon from '~/assets/trello.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Badge from '@mui/material/Badge'
import Profiles from './Menus/Profiles'
import AddIcon from '@mui/icons-material/Add';

function index() {
  return (
    <Box
      sx={{
        height: (theme) => theme.appCustom.headerHeight,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem 0 1rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <AppsIcon
          sx={{
            color: 'primary.main',
          }}
        />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{
              color: 'primary.main',
            }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.main',
              lineHeight: 1,
            }}
          >
            Trello
          </Typography>
        </Box>


        <Workspaces />
        <Recent />
        <Starred />
        <Templates />
        <Button startIcon={<AddIcon />} variant="outlined">Create</Button>

      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          marginLeft: '2rem',
        }}
      >
        <TextField id="outlined-search" label="Search..." type="search" size="small" />
        <Badge
          badgeContent={4}
          color="primary"
          sx={{
            cursor: 'pointer',
          }}
        >
          <NotificationsNoneIcon color="action" />
        </Badge>

        <AppearanceMode />
        <Profiles />
      </Box>
    </Box>
  )
}

export default index
