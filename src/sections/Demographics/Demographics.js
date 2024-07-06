import React from 'react'

import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';

import './Demographics.css'
import { Radio } from '@mui/material';

import Next from '../../components/Next';

function Demographics(props) {

    const goNext = () => {
        props.next('riskFactors')
    }
    

  return (
    <div className = 'section' id = 'demographics'>
        <div className = 'section-title'>
            <h1>Demographics</h1>
        </div>
        <TextField 
            id="outlined-basic" 
            label="Age"
            variant="outlined" 
            value={props.patientDetails.age}
            name="age"
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
        />
        <TextField
            id="outlined-basic"
            label='Gender (M/F/O)'
            variant="outlined"
            value={props.patientDetails.gender}
            name='gender'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfRight}
        />
        <TextField
            id="outlined-basic"
            label="Height(cm)"
            variant="outlined"
            value={props.patientDetails['height(cm)']}
            name='height(cm)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="Weight(kg)"
            variant="outlined"
            value={props.patientDetails['weight(kg)']}
            name='weight(kg)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfRight}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="BMI"
            variant="outlined"
            value={props.patientDetails['BMI']}
            name='BMI'
            sx = {props.inputStyleFull}
            disabled
        />
        <TextField
            id="outlined-basic"
            label="BP (mmHg)"
            variant="outlined"
            value={props.patientDetails['BP(mmHg)']}
            name='BP(mmHg)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleFull}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="Waist Circumference (cm)"
            variant="outlined"
            value={props.patientDetails['waistCircumference(cm)']}
            name='waistCircumference(cm)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfLeft}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="Hip Circumference (cm)"
            variant="outlined"
            value={props.patientDetails['hipCircumference(cm)']}
            name='hipCircumference(cm)'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleHalfRight}
            type = 'number'
        />
        <TextField
            id="outlined-basic"
            label="Waist-Hip Ratio"
            variant="outlined"
            value={props.patientDetails['waistHipRatio']}
            name='waistHipRatio'
            onChange={props.addPatientDetails}
            sx = {props.inputStyleFull}
            disabled
        />
        <Next next = {goNext}/>
    </div>
  )
}

export default Demographics
