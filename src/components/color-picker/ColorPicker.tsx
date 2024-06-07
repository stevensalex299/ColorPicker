import React from 'react'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import ColorOptions from './ColorOptions'
import Stack from '@mui/material/Stack'
import './ColorPicker.css'

const ROOT_CLASS_NAME = 'color-picker'
const ColorPickerGrid: React.FC = () => {
  return (
    <div className={`${ROOT_CLASS_NAME}-grid`}>
      {ColorOptions.map((group) => (
        <Stack direction="column" spacing={2} key={group.name} className="color-group">
          {group.colors.map((color) => (
            <div className="color-option" style={{ backgroundColor: color.hex }} key={color.name} />
          ))}
        </Stack>
      ))}
    </div>
  )
}

const ColorPickerSelectionArea: React.FC = () => {
  return (
    <Stack direction="column" className={`${ROOT_CLASS_NAME}-selection-area`}>
      <Typography variant="h6" component="div">
        Selected Color
      </Typography>
      <div className="selection-box">
        <Typography variant="body1" component="div">
          Color Name : Hex Code
        </Typography>
      </div>
    </Stack>
  )
}

const ColorPicker: React.FC = () => {
  return (
    <Card className={ROOT_CLASS_NAME}>
      <CardContent className={`${ROOT_CLASS_NAME}-content`}>
        <Typography variant="h6" component="div">
          Default Colors
        </Typography>
        <ColorPickerGrid />
        <Divider orientation="horizontal" />
        <ColorPickerSelectionArea />
      </CardContent>
    </Card>
  )
}

export default ColorPicker
