import React from 'react'

import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { Radio, FormControl, FormControlLabel, RadioGroup, FormLabel} from '@mui/material';
import Next from '../../components/Next';

import './RiskFactors.css'

function RiskFactors(props) {

    const [historyOfRiskFactors, setHistoryOfRiskFactors] = useState(false)

    useEffect(() => {
        if (props.patientDetails.historyOfRiskFactors === true || props.patientDetails.historyOfRiskFactors === 'true') {
            setHistoryOfRiskFactors(true)
        } else {
            setHistoryOfRiskFactors(false)
        }
    }
    , [props.patientDetails])

    const goNext = () => {
        props.next('investigations')
    }

  return (
    <div className = 'section' id = 'riskFactors'>
        <div className='section-title'>
            <h1>Risk Factors</h1>
        </div>
        {/* use radio group to set historyOfRiskFactors to true or false */}
        <FormControl
            sx={{
                gridColumn: '2 / 6',
                height: '100px',
                marginBottom: '20px',
            }}
        >
            <FormLabel>History of Risk Factors</FormLabel>
            <RadioGroup
                row
                aria-label="historyOfRiskFactors"
                name="historyOfRiskFactors"
                value={historyOfRiskFactors}
                onChange={props.addPatientDetails}
            >
                <FormControlLabel value={true} control={<Radio />} label='Yes'/>
                <FormControlLabel value={false} control={<Radio />} label='No'/>
            </RadioGroup>
        </FormControl>

            {historyOfRiskFactors ?
                    <div
                        className='riskFactors'
                    >
                    <TextField
                        id="outlined-basic"
                        label="Overweight (Months)"
                        variant="outlined"
                        name='overweight(months)'
                        value={props.patientDetails['overweight(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Obesity (Months)"
                        variant="outlined"
                        name='obesity(months)'
                        value={props.patientDetails['obesity(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Type II Diabetes mellitus / Impaired fasting glucose (Months)"
                        variant="outlined"
                        name='diabetes(months)'
                        value={props.patientDetails['diabetes(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleFull}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Hypertension (Months)"
                        variant="outlined"
                        name='hypertension(months)'
                        value={props.patientDetails['hypertension(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id = "outlined-basic"
                        label = "increasedTG (Months)"
                        variant = "outlined"
                        name = "increasedTG(months)"
                        value = {props.patientDetails['increasedTG(months)']}
                        onChange = {props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Low HDL (Months)"
                        variant="outlined"
                        name='lowHDL(months)'
                        value={props.patientDetails['lowHDL(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="High LDL (Months)"
                        variant="outlined"
                        name='highLDL(months)'
                        value={props.patientDetails['highLDL(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Both Low HDL & Increased TG (Months)"
                        variant="outlined"
                        name='bothIncreasedTGAndLowHDL(months)'
                        value={props.patientDetails['bothIncreasedTGAndLowHDL(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleFull}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="CAD (Months)"
                        variant="outlined"
                        name='CAD(months)'
                        value={props.patientDetails['CAD(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="CVD (Months)"
                        variant="outlined"
                        name='CVD(months)'
                        value={props.patientDetails['CVD(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <div id = 'familyHistoryTitle'>
                        <h2>
                            Family History
                        </h2>
                    </div>
                    <TextField
                        id="outlined-basic"
                        label="DM (Months)"
                        variant="outlined"
                        name='DM(months)'
                        value={props.patientDetails['DM(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="HT (Months)"
                        variant="outlined"
                        name='HT(months)'
                        value={props.patientDetails['HT(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="dyslipidaemia (Months)"
                        variant="outlined"
                        name='dyslipidaemia(months)'
                        value={props.patientDetails['dyslipidaemia(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="CAD (Months) (Family)"
                        variant="outlined"
                        name='familyCAD(months)'
                        value={props.patientDetails['familyCAD(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="CVD (Months) (Family)"
                        variant="outlined"
                        name='familyCVD(months)'
                        value={props.patientDetails['familyCVD(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleFull}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Fatty Liver (Months)"
                        variant="outlined"
                        name='fattyLiver(months)'
                        value={props.patientDetails['fattyLiver(months)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleFull}
                    /> 
                    <Next next = {goNext}/>
                    </div>
                :
                <></>
            }
    </div>
  )
}

export default RiskFactors
