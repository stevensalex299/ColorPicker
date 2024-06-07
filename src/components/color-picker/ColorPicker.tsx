import React, { useRef, useState } from 'react'
import { Card, CardContent, Divider, Typography } from '@mui/material'
import ColorOptions, { Color } from './ColorOptions'
import Stack from '@mui/material/Stack'
import './ColorPicker.css'

const ROOT_CLASS_NAME = 'color-picker'
const ColorPickerGrid: React.FC<{ onSelect: (color: Color) => void; selectedColor: Color | null }> = ({
  onSelect,
  selectedColor,
}) => {
  const colorRefs = useRef<(HTMLDivElement | null)[][]>([])

  const handleKeyDown = (event: React.KeyboardEvent, groupIndex: number, colorIndex: number, color: Color) => {
    switch (event.key) {
      case 'Enter':
      case ' ':
        onSelect(color)
        break
      case 'ArrowDown':
        if (colorRefs.current[groupIndex][colorIndex + 1]) {
          colorRefs.current[groupIndex][colorIndex + 1]?.focus()
        }
        break
      case 'ArrowUp':
        if (colorRefs.current[groupIndex][colorIndex - 1]) {
          colorRefs.current[groupIndex][colorIndex - 1]?.focus()
        }
        break
      case 'ArrowLeft':
        if (colorRefs.current[groupIndex - 1][colorIndex]) {
          colorRefs.current[groupIndex - 1][colorIndex]?.focus()
        }
        break
      case 'ArrowRight':
        if (colorRefs.current[groupIndex + 1][colorIndex]) {
          colorRefs.current[groupIndex + 1][colorIndex]?.focus()
        }
        break
      default:
        break
    }
  }

  return (
    <div className={`${ROOT_CLASS_NAME}-grid`}>
      {ColorOptions.map((group, groupIndex) => {
        colorRefs.current[groupIndex] = Array.from({ length: group.colors.length }, () => null) // Initialize array elements with null
        return (
          <Stack direction="column" spacing={2} key={group.name} className="color-group">
            {group.colors.map((color, colorIndex) => (
              <div
                ref={(el) => (colorRefs.current[groupIndex][colorIndex] = el)}
                role="button"
                tabIndex={0}
                aria-pressed={selectedColor?.name === color.name}
                className={`color-option ${selectedColor?.name === color.name ? 'selected' : ''}`}
                style={{ backgroundColor: color.hex }}
                key={color.name}
                onClick={() => onSelect(color)}
                onKeyDown={(e) => handleKeyDown(e, groupIndex, colorIndex, color)}
              />
            ))}
          </Stack>
        )
      })}
    </div>
  )
}

const ColorPickerSelectionArea: React.FC<{ selectedColor: Color | null }> = ({ selectedColor }) => {
  return (
    <Stack direction="column" className={`${ROOT_CLASS_NAME}-selection-area`}>
      <Typography variant="h6" component="div" tabIndex={0} aria-label="Selected Color">
        Selected Color
      </Typography>
      <div className="selection-box">
        <Typography variant="body1" component="div" tabIndex={0} aria-live="polite" aria-atomic="true">
          {selectedColor ? `${selectedColor.name} : ${selectedColor.hex}` : 'No color selected'}
        </Typography>
      </div>
    </Stack>
  )
}

const ColorPicker: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null)
  const handleSelectColor = (color: Color) => {
    setSelectedColor(color)
  }

  return (
    <Card className={ROOT_CLASS_NAME}>
      <CardContent className={`${ROOT_CLASS_NAME}-content`}>
        <Typography variant="h6" component="div" tabIndex={0} aria-label="Default Colors">
          Default Colors
        </Typography>
        <ColorPickerGrid onSelect={handleSelectColor} selectedColor={selectedColor} />
        <Divider orientation="horizontal" aria-hidden="true" />
        <ColorPickerSelectionArea selectedColor={selectedColor} />
      </CardContent>
    </Card>
  )
}

export default ColorPicker
