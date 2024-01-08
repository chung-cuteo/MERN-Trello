import React from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import { useColorScheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

function index() {
  const { _, setMode } = useColorScheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const setSystemMode = () => {
    if (prefersDarkMode) {
      setMode('dark')
      return
    }
    setMode('light')
  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Tooltip title="Light">
        <IconButton size='small' onClick={() => { setMode('light') }}>
          <LightModeIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="Dark">
        <IconButton size='small' onClick={() => { setMode('dark') }}>
          <DarkModeOutlinedIcon fontSize="small" />
        </IconButton>
      </Tooltip>
      <Tooltip title="System">
        <IconButton size='small' onClick={setSystemMode}>
          <SettingsBrightnessIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  )
}

export default index