import React from 'react'

import './Management.css'

import {useState, useEffect} from 'react';
import { TextField, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel } from '@mui/material';

import Submit from '../../components/Submit';

function Management(props) {

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
                    <FormControlLabel value={true} control={<Radio />} label='Yes'/>
                    <FormControlLabel value={false} control={<Radio />} label='No'/>
                </RadioGroup>
            </FormControl>
        )
    }

  return (
    <div className = 'section' id = 'management'>
        <div className = 'section-title'>
            <h1>Management</h1>
        </div>
        {createFormControl('Life style modification', 'lifestyleModifications', fullStyle)}
        {createFormControl('Life style modification & Vitamin E', 'lifestyleModificationsAndVitaminE', fullStyle)}
        {createFormControl('Life style modification & pioglitazone', 'lifestyleModificationsAndPioglitazone', fullStyle)}
        <TextField
            id="outlined-basic"
            label="Life style modifications & other drug"
            variant="outlined"
            value={props.patientDetails['lifestyleModificationsAndOtherDrugs']}
            name='lifestyleModificationsAndOtherDrugs'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleFull}
        />
        <Submit submit = {props.submit}/>
    </div>
  )
}

export default Management
