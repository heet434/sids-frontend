import React from 'react'

import {useState, useEffect} from 'react';

import TextField from '@mui/material/TextField';

import { Radio, FormControl, FormControlLabel, RadioGroup, FormLabel} from '@mui/material';

import './Imaging.css'
import Next from '../../components/Next';

function Imaging(props) {

    const [fibroscan, setFibroscan] = useState(false)
    const [other, setOther] = useState(false)

    useEffect(() => {
        if(props.patientDetails['fibroscan/transientElastography'] === true || props.patientDetails['fibroscan/transientElastography'] === 'true'){
            setFibroscan(true)
        }else {
            setFibroscan(false)
        }
        if(props.patientDetails['otherElastography'] === true || props.patientDetails['otherElastography'] === 'true'){
            setOther(true)
        }else {
            setOther(false)
        }
    }
    , [props.patientDetails])

    const leftStyle = {
        gridColumnStart: 2,
        gridColumnEnd: 7,
        '@media (max-width: 1024px)': {
            gridColumnStart: 2,
            gridColumnEnd: 8,
        },
        '@media (max-width: 768px)': {
            gridColumnStart: 2,
            gridColumnEnd: 6,
        },
    }
    const rightStyle = {
        gridColumnStart: 7,
        gridColumnEnd: 12,
        '@media (max-width: 1024px)': {
            gridColumnStart: 2,
            gridColumnEnd: 8,
        },
        '@media (max-width: 768px)': {
            gridColumnStart: 2,
            gridColumnEnd: 6,
        },
    }
    const fullStyle = {
        gridColumnStart: 2,
        gridColumnEnd: 12,
        '@media (max-width: 1024px)': {
            gridColumnStart: 2,
            gridColumnEnd: 8,
        },
        '@media (max-width: 768px)': {
            gridColumnStart: 2,
            gridColumnEnd: 6,
        },
    }


    const createFormControl = (label, name, style) => {
        return (
            <FormControl sx={style}>
                <FormLabel>{label}</FormLabel>
                <RadioGroup row aria-label={name} name={name} value={props.patientDetails[name]} onChange={props.addPatientDetails}>
                    <FormControlLabel value={true} control={<Radio />} label="Positive" />
                    <FormControlLabel value={false} control={<Radio />} label="Negative" />
                </RadioGroup>
            </FormControl>
        )
    }

    const goNext = () => {
        props.next('management')
    }

  return (
    <div className = 'section' id = 'imaging'>
        <div className = 'section-title'>
            <h1>Imaging</h1>
        </div>
        {createFormControl('Fibroscan / Transient Elastography', 'fibroscan/transientElastography', fullStyle)}
        {fibroscan &&
            <TextField
                id="outlined-basic"
                label="LSM (kPA)"
                variant="outlined"
                name = 'fibroscan/transientLSM(kPA)'
                value={props.patientDetails['fibroscan/transientLSM(kPA)']}
                onChange={props.addPatientDetails}
                sx = {fullStyle}
                type = 'number'
            />  
        }
        {fibroscan &&
            <TextField
                id="outlined-basic"
                label="CAP (dB/m)"
                variant="outlined"
                name='fibroscan/transientCAP(dB/m)'
                value={props.patientDetails['fibroscan/transientCAP(dB/m)']}
                onChange={props.addPatientDetails}
                sx = {fullStyle}
                type = 'number'
            />
        }
        {createFormControl('Other Elastography', 'otherElastography', fullStyle)}
        {other &&
            <TextField
                id="outlined-basic"
                label="LSM (kPA)"
                variant="outlined"
                name='otherElastographyLSM(kPA)'
                value={props.patientDetails['otherElastographyLSM(kPA)']}
                onChange={props.addPatientDetails}
                sx = {fullStyle}
                type = 'number'
            />
        }
        {other &&
            <TextField
                id="outlined-basic"
                label="CAP (dB/m)"
                variant="outlined"
                name='otherElastographyCAP(dB/m)'
                value={props.patientDetails['otherElastographyCAP(dB/m)']}
                onChange={props.addPatientDetails}
                sx = {fullStyle}
                type = 'number'
            />
        }
        <Next next = {goNext}/>


    </div>
  )
}

export default Imaging
