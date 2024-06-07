import React from 'react'
import ColorPicker from './components/color-picker/ColorPicker'
import { Typography } from '@mui/material'
import './App.css'

const ROOT_CLASS_NAME = 'color-picker-widget'
const App: React.FC = () => {
  return (
    <div className={ROOT_CLASS_NAME}>
      <Typography variant="h2" component="div" className={`${ROOT_CLASS_NAME}-title`}>
        Color Picker Widget
      </Typography>
      <ColorPicker />
    </div>
  )
}

export default App
