import React from 'react'

import { TextField, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel } from '@mui/material';

import {useState, useEffect} from 'react';
import Next from '../../components/Next';

import './Investigations.css'

function Investigations(props) {

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

    const [viralMarkers, setViralMarkers] = useState(false)
    const [allMarkers, setAllMarkers] = useState(false)

    useEffect(() => {
        if(props.patientDetails.viralMarkers === true || props.patientDetails.viralMarkers ==='true'){
            setViralMarkers(true)
        } else {
            setViralMarkers(false)
        }
        if(props.patientDetails.allMarkers === true || props.patientDetails.allMarkers ==='true'){
            setAllMarkers(true)
        } else {
            setAllMarkers(false)
        }
    }, [props.patientDetails])

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
        props.next('imaging')
    }

  return (
    <div className = 'section' id = 'investigations'>
        <div className = 'section-title'>
            <h1>Investigations</h1>
        </div>
        <div className='investigations-subtitle'>
            <h2>Hemogram</h2>
        </div>
        <TextField
            id="outlined-basic"
            label="HB (gm/dl)"
            variant="outlined"
            value={props.patientDetails['HB(gm/dl)']}
            name='HB(gm/dl)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="TLC (cells/mm3)"
            variant="outlined"
            value={props.patientDetails['TLC(cells/mm3)']}
            name='TLC(cells/mm3)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfRight}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="Platelet Count (1000/mm3)"
            variant="outlined"
            value={props.patientDetails['plateletCount(1000/mm3)']}
            name='plateletCount(1000/mm3)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
            type = 'number'
        />
        <div className='investigations-subtitle'>
            <h2>Coagulogram</h2>
        </div>
        <TextField
            id="outlined-basic"
            label="PT (sec)"
            variant="outlined"
            value={props.patientDetails['PT(sec)']}
            name='PT(sec)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="PTI (sec)"
            variant="outlined"
            value={props.patientDetails['PTI(sec)']}
            name='PTI(sec)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfRight}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="INR (sec)"
            variant="outlined"
            value={props.patientDetails['INR(sec)']}
            name='INR(sec)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
            type = 'number'
        />
        <div className='investigations-subtitle'>
            <h2>LFT</h2>
        </div>
        <TextField
            id="outlined-basic"
            label="Bili (mg/dl)"
            variant="outlined"
            value={props.patientDetails['bilirubin(mg/dl)']}
            name='bilirubin(mg/dl)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleFull}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="Direct Bilirubin (mg/dl)"
            variant="outlined"
            value={props.patientDetails['directBilirubin(mg/dl)']}
            name='directBilirubin(mg/dl)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="Indirect Bilirubin (mg/dl)"
            variant="outlined"
            value={props.patientDetails['indirectBilirubin(mg/dl)']}
            name='indirectBilirubin(mg/dl)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfRight}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="AST(U/L)"
            variant="outlined"
            value={props.patientDetails['AST(U/L)']}
            name='AST(U/L)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="ALT(U/L)"
            variant="outlined"
            value={props.patientDetails['ALT(U/L)']}
            name='ALT(U/L)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfRight}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="Alkaline Phosphatase (U/L)"
            variant="outlined"
            value={props.patientDetails['alkalinePhosphatase(U/L)']}
            name='alkalinePhosphatase(U/L)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="Albumin (gm/dl)"
            variant="outlined"
            value={props.patientDetails['albumin(gm/dl)']}
            name='albumin(gm/dl)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfRight}
            type = 'number'
        />
        <div className='investigations-subtitle'>
            <h2>RFT</h2>
        </div>
        <TextField
            id="outlined-basic"
            label="Urea (mg/dl)"
            variant="outlined"
            value={props.patientDetails['urea(mg/dl)']}
            name='urea(mg/dl)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="Creatinine (mg/dl)"
            variant="outlined"
            value={props.patientDetails['creatinine(mg/dl)']}
            name='creatinine(mg/dl)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfRight}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="FIB-4"
            variant='outlined'
            value={props.patientDetails['FIB4']}
            name='FIB4'
            sx = {props.inputStyleFull}
            disabled
        />

        <div className='investigations-subtitle'>
            <h2>Other Investigations</h2>
        </div>

        {createFormControl('Viral Markers', 'viralMarkers', fullStyle)}
        {viralMarkers && createFormControl('HBsAg', 'HBsAg', leftStyle)}
        {viralMarkers && createFormControl('AntiHCV', 'antiHCV', rightStyle)}
        {viralMarkers && createFormControl('HIV', 'HIV', leftStyle)}
        {createFormControl('All Markers', 'allMarkers', fullStyle)}
        {allMarkers && createFormControl('ANA', 'ANA', leftStyle)}
        {allMarkers && createFormControl('SMA', 'SMA', rightStyle)}
        {allMarkers && createFormControl('LKM', 'LKM', leftStyle)}
        {allMarkers && createFormControl('AMA', 'AMA', rightStyle)}

        <Next next={goNext} />
    </div>
  )
}

export default Investigations
