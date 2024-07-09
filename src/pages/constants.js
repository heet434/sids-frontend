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
    "overweight(months)": "",
    "obesity(months)": "",
    "diabetes(months)": "",
    "hypertension(months)": "",
    "increasedTG(months)": "",
    "lowHDL(months)": "",
    "bothIncreasedTGAndLowHDL(months)": "",
    "highLDL(months)": "",
    "CAD(months)": "",
    "CVD(months)": "",
    "DM(months)": "",
    "HT(months)": "",
    "dyslipidaemia(months)": "",
    "familyCAD(months)": "",
    "familyCVD(months)": "",
    "fattyLiver(months)": "",
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
    'FIB4': "",
    viralMarkers: false,
    HBsAg: false,
    antiHCV: false,
    HIV: false,
    allMarkers: false,
    ANA: false,
    SMA: false,
    LKM: false,
    AMA: false,
    'USGAbdomen': false,
    'fattyLiver': false,
    'featuresOfCirrhosis': false,
    'ascites': false,
    'spaceOccupyingLesionsInLiver': false,
    'fibroscan/transientElastography': false,
    'fibroscan/transientLSM(kPA)': "",
    'fibroscan/transientCAP(dB/m)': "",
    'MRElastography': false,
    'MRElastographyLSM(kPA)': "",
    'MRElastographyCAP(dB/m)': "",
    lifestyleModifications: false,
    lifestyleModificationsAndVitaminE: false,
    lifestyleModificationsAndPioglitazone: false,
    lifestyleModificationsAndOtherDrugs: '',
};


export { TextFieldStyle, inputStyleFull, inputStyleHalfLeft, inputStyleHalfRight, initialPatientState }
