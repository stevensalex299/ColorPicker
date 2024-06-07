import { useRef } from 'react'
import { Stack } from '@mui/material'
import ColorOptions, { Color } from '../ColorOptions'
import './ColorGrid.css'

const ROOT_CLASS_NAME = 'color-grid'
const ColorGrid: React.FC<{ onSelect: (color: Color) => void; selectedColor: Color | null }> = ({
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
    <div className={ROOT_CLASS_NAME}>
      {ColorOptions.map((group, groupIndex) => {
        colorRefs.current[groupIndex] = Array.from({ length: group.colors.length }, () => null)
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

export default ColorGrid
