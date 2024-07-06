import React from 'react'

import { Button } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Next(props) {
  return (
    // <div className = 'next-button'>
        <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={props.next}
            endIcon={<ArrowDownwardIcon />}
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
        >
            Next
        </Button>
    // </div>
  )
}

export default Next
