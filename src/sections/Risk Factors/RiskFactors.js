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
                        label="Overweight (Days)"
                        variant="outlined"
                        name='overweight(days)'
                        value={props.patientDetails['overweight(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Obesity (Days)"
                        variant="outlined"
                        name='obesity(days)'
                        value={props.patientDetails['obesity(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Type II Diabetes mellitus / Impaired fasting glucose (Days)"
                        variant="outlined"
                        name='diabetes(days)'
                        value={props.patientDetails['diabetes(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleFull}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Hypertension (Days)"
                        variant="outlined"
                        name='hypertension(days)'
                        value={props.patientDetails['hypertension(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id = "outlined-basic"
                        label = "increasedTG (Days)"
                        variant = "outlined"
                        name = "increasedTG(days)"
                        value = {props.patientDetails['increasedTG(days)']}
                        onChange = {props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Low HDL (Days)"
                        variant="outlined"
                        name='lowHDL(days)'
                        value={props.patientDetails['lowHDL(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="High LDL (Days)"
                        variant="outlined"
                        name='highLDL(days)'
                        value={props.patientDetails['highLDL(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Both Low HDL & Increased TG (Days)"
                        variant="outlined"
                        name='bothIncreasedTGAndLowHDL(days)'
                        value={props.patientDetails['bothIncreasedTGAndLowHDL(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleFull}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="CAD (Days)"
                        variant="outlined"
                        name='CAD(days)'
                        value={props.patientDetails['CAD(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="CVD (Days)"
                        variant="outlined"
                        name='CVD(days)'
                        value={props.patientDetails['CVD(days)']}
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
                        label="DM (Days)"
                        variant="outlined"
                        name='DM(days)'
                        value={props.patientDetails['DM(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="HT (Days)"
                        variant="outlined"
                        name='HT(days)'
                        value={props.patientDetails['HT(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="dyslipidaemia (Days)"
                        variant="outlined"
                        name='dyslipidaemia(days)'
                        value={props.patientDetails['dyslipidaemia(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfLeft}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="CAD (Days) (Family)"
                        variant="outlined"
                        name='familyCAD(days)'
                        value={props.patientDetails['familyCAD(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleHalfRight}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="CVD (Days) (Family)"
                        variant="outlined"
                        name='familyCVD(days)'
                        value={props.patientDetails['familyCVD(days)']}
                        onChange={props.addPatientDetails}
                        sx = {props.inputStyleFull}
                        type = 'number'
                    />
                    <TextField
                        id="outlined-basic"
                        label="Fatty Liver (Days)"
                        variant="outlined"
                        name='fattyLiver(days)'
                        value={props.patientDetails['fattyLiver(days)']}
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
