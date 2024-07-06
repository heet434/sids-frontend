import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
import {BACKEND_URL} from '../config';

import {Element, scroller} from 'react-scroll';

import TextField from '@mui/material/TextField';

import './Add.css'
import titleBG from '../assets/images/sids.png'

import Demographics from '../sections/Demographics/Demographics';
import RiskFactors from '../sections/Risk Factors/RiskFactors';
import Investigations from '../sections/Investigations/Investigations';
import Imaging from '../sections/Imaging/Imaging';
import Management from '../sections/Management/Management';
import Next from '../components/Next';
import Submit from '../components/Submit';
import Proceed from '../components/Proceed';

import { initialPatientState, inputStyleFull, inputStyleHalfLeft, inputStyleHalfRight, TextFieldStyle } from './constants';



function Add() {

    const [patientDetails, setPatientDetails] = useState(initialPatientState);

    const [newPatient, setNewPatient] = useState(true);

    const submitPatientDetails = () => {
        const token = localStorage.getItem('token');
        const headers = {
            'Authorization': `Bearer ${token}`
        };
    
        const userRole = localStorage.getItem('role');
    
        if (newPatient) {
            const patientDetailsWithRole = { ...patientDetails, userRole: userRole };
    
            axios.post(`${BACKEND_URL}/patients`, patientDetailsWithRole, { headers })
                .then((res) => {
                    alert('Patient details added successfully');
                    setPatientDetails(initialPatientState);
                })
                .catch((err) => {
                    console.error('Error adding patient details:', err);
                    if (err.response && err.response.status === 401 && err.response.data.error === 'Token expired') {
                        alert('Session expired. Please log in again.');
                        localStorage.removeItem('token');
                        localStorage.removeItem('role');
                        window.location.href = '/';
                    } else {
                        alert('Error adding patient details');
                    }
                });
        } else {
            // Assuming `patientDetails` contains `subjectNo` and `initials` for the update request
            const { subjectNo, initials, ...updateData } = patientDetails;
    
            // Filter out empty fields from updateData
            const filteredUpdateData = {};
            for (const key in updateData) {
                if (updateData[key] !== '') {
                    filteredUpdateData[key] = updateData[key];
                }
            }
    
            axios.put(`${BACKEND_URL}/patients/${subjectNo}/${initials}`, filteredUpdateData, { headers })
                .then((res) => {
                    alert('Patient details updated successfully');
                    setPatientDetails(initialPatientState);
                })
                .catch((err) => {
                    console.error('Error updating patient details:', err);
                    if (err.response && err.response.status === 401 && err.response.data.error === 'Token expired') {
                        alert('Session expired. Please log in again.');
                        localStorage.removeItem('token');
                        localStorage.removeItem('role');
                        window.location.href = '/';
                    } else {
                        alert('Error updating patient details');
                    }
                });
        }
    };    

    const addPatientDetails = (e) => {
        const { name, value } = e.target;
        // if val of height and weight is not empty, calculate BMI
            if(name === 'height(cm)'){
                const height = value;
                if(patientDetails['weight(kg)'] !== ""){
                    const weight = patientDetails['weight(kg)'];
                    if(height) {
                        const BMI = (weight / ((height/100) * (height/100))).toFixed(2);
                        setPatientDetails({ ...patientDetails, [name]: value, ['BMI']: BMI });
                        return;
                    }
                }
            }
            if(name === 'weight(kg)'){
                const weight = value;
                if(patientDetails['height(cm)'] !== ""){
                    const height = patientDetails['height(cm)'];
                    if (height){
                        const BMI = (weight / ((height/100) * (height/100))).toFixed(2);
                        setPatientDetails({ ...patientDetails, [name]: value, ['BMI']: BMI });
                        return;
                    }
                }
            }
        // if val of waist and hip is not empty, calculate waistHipRatio
            if(name === 'waistCircumference(cm)'){
                const waist = value;
                if(patientDetails['hipCircumference(cm)'] !== ""){
                    const hip = patientDetails['hipCircumference(cm)'];
                    if(waist) {
                        const waistHipRatio = (waist / hip).toFixed(2);
                        setPatientDetails({ ...patientDetails, [name]: value, waistHipRatio: waistHipRatio });
                        return;
                    }
                }
            }
            if(name === 'hipCircumference(cm)'){
                const hip = value;
                if(patientDetails['waistCircumference(cm)'] !== ""){
                    const waist = patientDetails['waistCircumference(cm)'];
                    if (waist){
                        const waistHipRatio = (waist / hip).toFixed(2);
                        setPatientDetails({ ...patientDetails, [name]: value, waistHipRatio: waistHipRatio });
                        return;
                    }
                }
            }
        if(name !=='BMI' && name !== 'waistHipRatio'){
            setPatientDetails({ ...patientDetails, [name]: value });
        }
        //console.log(patientDetails);
    }

    const checkPatient = () => {

        // check if subjectNo and initials are empty
        if(patientDetails.subjectNo === "" || patientDetails.initials === "" || patientDetails.subjectNo === null || patientDetails.initials === null){
            alert('Please enter subject number and initials');
            return;
        }

        const token = localStorage.getItem('token');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        axios.get(`${BACKEND_URL}/findpatients?subjectNo=${patientDetails.subjectNo}&initials=${patientDetails.initials}`, { headers })
            .then((res) => {
                if (res.data.length > 0) {

                    // set all null or undefined values to empty string
                    const patientData = res.data[0];
                    for (const key in patientData) {
                        if (patientData[key] === null || patientData[key] === undefined) {
                            patientData[key] = '';
                        }
                    }
                    setPatientDetails(patientData);
                    setNewPatient(false);
                }
                scrollTo('demographics');
            })
            .catch((err) => {
                console.error('Error finding patient:', err);
                if (err.response && err.response.status === 401 && err.response.data.error === 'Token expired') {
                    alert('Session expired. Please log in again.');
                    localStorage.removeItem('token');
                    localStorage.removeItem('role');
                    window.location.href = '/';
                } else {
                    alert('Error finding patient');
                }
            });
    }

    const scrollTo = (name) => {
        scroller.scrollTo(name, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

  return (
    <div className="page" id="add">
        <div className="main-title-container">
            <h1>
            SIDS HOSPITAL FATTY LIVER MEDICAL RECORDS FORM
            </h1>
            <img src={titleBG} alt="SIDS HOSPITAL"/>
        </div>
        <div className="form-container">
            <div className="form-input">
                <TextField
                    id="outlined-basic"
                    label="Subject No."
                    variant="outlined"
                    name="subjectNo"
                    onChange={addPatientDetails}
                    value={patientDetails.subjectNo}
                    sx = {TextFieldStyle}
                    required
                />
            </div>
            <div className="form-input">
                <TextField
                    id="outlined-basic"
                    label="Initials"
                    variant="outlined"
                    name="initials"
                    onChange={addPatientDetails}
                    value={patientDetails.initials}
                    sx = {TextFieldStyle}
                    required
                />  
            </div>
            <div className='form-input'>
                <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="name"
                    onChange={addPatientDetails}
                    value={patientDetails.name}
                    sx = {TextFieldStyle}
                />
            </div>
            <div className='proceed-button'>
                <Proceed checkPatient={checkPatient} />
            </div>
            <Element name="demographics">
                <Demographics addPatientDetails={addPatientDetails} patientDetails={patientDetails} 
                    inputStyleFull={inputStyleFull} 
                    inputStyleHalfLeft={inputStyleHalfLeft} 
                    inputStyleHalfRight={inputStyleHalfRight} next = {scrollTo}
                />
            </Element>
            <Element name="riskFactors">
            <RiskFactors addPatientDetails={addPatientDetails} patientDetails={patientDetails}
                inputStyleFull={inputStyleFull}
                inputStyleHalfLeft={inputStyleHalfLeft}
                inputStyleHalfRight={inputStyleHalfRight} next = {scrollTo}
            />
            </Element>
            <Element name="investigations">
            <Investigations addPatientDetails={addPatientDetails} patientDetails={patientDetails}
                inputStyleFull={inputStyleFull}
                inputStyleHalfLeft={inputStyleHalfLeft}
                inputStyleHalfRight={inputStyleHalfRight} next = {scrollTo}
            />
            </Element>
            <Element name="imaging">
            <Imaging addPatientDetails={addPatientDetails} patientDetails={patientDetails}
                inputStyleFull={inputStyleFull}
                inputStyleHalfLeft={inputStyleHalfLeft}
                inputStyleHalfRight={inputStyleHalfRight} next = {scrollTo}
            />
            </Element>
            <Element name="management">
            <Management addPatientDetails={addPatientDetails} patientDetails={patientDetails}
                inputStyleFull={inputStyleFull}
                inputStyleHalfLeft={inputStyleHalfLeft}
                inputStyleHalfRight={inputStyleHalfRight} next = {scrollTo} submit = {submitPatientDetails}
            />
            </Element>
            {/* <Submit submit={submitPatientDetails} /> */}
        </div>
    </div>
  )
}

export default Add;
