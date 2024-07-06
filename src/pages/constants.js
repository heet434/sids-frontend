const TextFieldStyle = {
    width: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    '@media (max-width: 768px)': {
        width: '80%',
    },
    position: 'relative',
    mt: '15px',
    top: '50px'
}

const inputStyleFull = {
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
    width: '100%',
}

const inputStyleHalfLeft = {

    gridColumnStart: 2,
    gridColumnEnd: 7,
    '@media (max-width: 1024px)': {
        gridColumnStart: 2,
        gridColumnEnd: 6,
    },
    '@media (max-width: 768px)': {
        gridColumnStart: 2,
        gridColumnEnd: 6,
    },
}

const inputStyleHalfRight = {
    gridColumnStart: 7,
    gridColumnEnd: 12,
    '@media (max-width: 1024px)': {
        gridColumnStart: 2,
        gridColumnEnd: 6,
    },
    '@media (max-width: 768px)': {
        gridColumnStart: 2,
        gridColumnEnd: 6,
    },
}

const initialPatientState = {
    subjectNo: "",
    initials: '',
    name: '',
    age: "",
    gender: '',
    'height(cm)': "",
    'weight(kg)': "",
    'BMI': "",
    'BP(mmHg)': "",
    'waistCircumference(cm)': "",
    'hipCircumference(cm)': "",
    waistHipRatio: "",
    historyOfRiskFactors: false,
    "overweight(days)": "",
    "obesity(days)": "",
    "diabetes(days)": "",
    "hypertension(days)": "",
    "increasedTG(days)": "",
    "lowHDL(days)": "",
    "bothIncreasedTGAndLowHDL(days)": "",
    "highLDL(days)": "",
    "CAD(days)": "",
    "CVD(days)": "",
    "DM(days)": "",
    "HT(days)": "",
    "dyslipidaemia(days)": "",
    "familyCAD(days)": "",
    "familyCVD(days)": "",
    "fattyLiver(days)": "",
    'HB(gm/dl)': "",
    'TLC(cells/mm3)': "",
    'plateletCount(1000/mm3)': "",
    'PT(sec)': "",
    'PTI(sec)': "",
    'INR(sec)': "",
    'bilirubin(mg/dl)': "",
    'directBilirubin(mg/dl)': "",
    'indirectBilirubin(mg/dl)': "",
    'AST(U/L)': "",
    'ALT(U/L)': "",
    'alkalinePhosphatase(U/L)': "",
    'albumin(gm/dl)': "",
    'urea(mg/dl)': "",
    'creatinine(mg/dl)': "",
    viralMarkers: false,
    HBsAg: false,
    antiHCV: false,
    HIV: false,
    allMarkers: false,
    ANA: false,
    SMA: false,
    LKM: false,
    AMA: false,
    'fibroscan/transientElastography': false,
    'fibroscan/transientLSM(kPA)': "",
    'fibroscan/transientCAP(dB/m)': "",
    'otherElastography': false,
    'otherElastographyLSM(kPA)': "",
    'otherElastographyCAP(dB/m)': "",
    lifestyleModifications: false,
    lifestyleModificationsAndVitaminE: false,
    lifestyleModificationsAndPioglitazone: false,
    lifestyleModificationsAndOtherDrugs: '',
};


export { TextFieldStyle, inputStyleFull, inputStyleHalfLeft, inputStyleHalfRight, initialPatientState }
