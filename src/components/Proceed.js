import React from 'react'

import { Button } from '@mui/material'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Proceed(props) {
  return (
    // <div className = 'next-button'>
        <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={props.checkPatient}
            endIcon={<ArrowDownwardIcon />}
            sx = {{
                width: '30%',
                margin: 'auto',
            }}
        >
            Proceed
        </Button>
    // </div>
  )
}

export default Proceed