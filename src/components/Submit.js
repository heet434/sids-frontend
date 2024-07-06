import React from 'react'

import { Button } from '@mui/material'
import PublishIcon from '@mui/icons-material/Publish';

function Submit(props) {
  return (
    <Button
        variant="contained"
        color="primary"
        size="large"
        endIcon={<PublishIcon />}
        sx = {{
            gridColumnStart: 6,
            gridColumnEnd: 8,
            '@media (max-width: 1024px)': {
                gridColumn: '3 / 7',
            },
            '@media (max-width: 768px)': {
                gridColumn: '3 / 5',
            },
        }}
        onClick={props.submit}
    >
        Submit
    </Button>
  )
}

export default Submit
