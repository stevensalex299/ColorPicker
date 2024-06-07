import React from 'react'
import { Alert, Stack, Typography } from '@mui/material'
import { Color } from '../ColorOptions'
import './ColorSelectionArea.css'

const ROOT_CLASS_NAME = 'color-selection-area'
const ColorSelectionArea: React.FC<{
  selectedColor: Color | null
  onCopySuccess: (success: Boolean | null) => void
  copySuccess: Boolean | null
}> = ({ selectedColor, onCopySuccess, copySuccess }) => {
  return (
    <Stack direction="column" className={ROOT_CLASS_NAME}>
      <Typography variant="h6" component="div" tabIndex={0} aria-label="Selected Color">
        Selected Color
      </Typography>
      <div className="selection-box">
        <Typography variant="body1" component="div" tabIndex={0} aria-live="polite" aria-atomic="true">
          {selectedColor ? `${selectedColor.name} : ${selectedColor.hex}` : 'No color selected'}
        </Typography>
      </div>

      {copySuccess != null && (
        <Alert
          severity={copySuccess ? 'success' : 'error'}
          className="copy-alert"
          onClose={() => onCopySuccess(null)}
          aria-label={copySuccess ? 'Copied to clipboard!' : 'Error copying to clipboard'}
          aria-live="assertive"
          role="alert"
        >
          {copySuccess ? 'Copied to clipboard!' : 'Error copying to clipboard'}
        </Alert>
      )}
    </Stack>
  )
}

export default ColorSelectionArea
