import React, { useState } from 'react'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Color } from './ColorOptions'
import ColorGrid from './color-grid/ColorGrid'
import ColorSelectionArea from './color-selection-area/ColorSelectionArea'
import './ColorPicker.css'

const ROOT_CLASS_NAME = 'color-picker'
const ColorPicker: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null)
  const [copySuccess, setCopySuccess] = useState<Boolean | null>(null)

  const handleSelectColor = (color: Color) => {
    setSelectedColor(color)
    handleCopyToClipboard(color.hex)
  }

  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(null), 5000)
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error)
        setCopySuccess(false)
        setTimeout(() => setCopySuccess(null), 5000)
      })
  }

  return (
    <Card className={ROOT_CLASS_NAME}>
      <CardContent className={`${ROOT_CLASS_NAME}-content`}>
        <Typography variant="h6" component="div" tabIndex={0} aria-label="Default Colors">
          Default Colors
        </Typography>
        <ColorGrid onSelect={handleSelectColor} selectedColor={selectedColor} />
        <Divider orientation="horizontal" aria-hidden="true" />
        <ColorSelectionArea selectedColor={selectedColor} onCopySuccess={setCopySuccess} copySuccess={copySuccess} />
      </CardContent>
    </Card>
  )
}

export default ColorPicker
