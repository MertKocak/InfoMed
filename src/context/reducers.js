import React from 'react';
import { Alert } from 'react-native';

const initialState = {
    favDrugsList: [],
    prescriptionList: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_PRESCRIPTION":
            var prescriptionCheck = false;
            console.log(prescriptionCheck);
            [...state.prescriptionList].map(function (item, index) {
                (item == action.payload.drug.title) ? prescriptionCheck = true : prescriptionCheck = prescriptionCheck;
            });
            console.log(prescriptionCheck)
            if (!prescriptionCheck) {
                Alert.alert("Eklendi", "İlaç reçetenize eklendi." , [
                    {text: 'TAMAM', onPress: () => console.log('OK Pressed')
                    },
                  ] ),
                console.log("r1");
                var newPrescriptionList = [];
                newPrescriptionList.id = action.payload.drug.id;
                newPrescriptionList.title = action.payload.drug.title;
                newPrescriptionList.description = action.payload.drug.description;
                newPrescriptionList.price = action.payload.drug.price;
                newPrescriptionList.etkenmadde = action.payload.drug.etkenmadde;
                newPrescriptionList.muadili = action.payload.drug.muadili;
                newPrescriptionList.image = action.payload.drug.image;
            
                return { ...state, prescriptionList: [...state.prescriptionList, newPrescriptionList.title] }
            }
            else {   
                Alert.alert("Eklenenemedi", "İlaç zaten reçetenizde ekli." , [
                    {text: 'TAMAM', onPress: () => console.log('OK Pressed')},
                  ] );
                return state;
            }
            case 'REMOVE_PRESCRIPTION':
            Alert.alert("Silindi", "İlaç reçetenizden silindi.", [
                { text: 'TAMAM', onPress: () => console.log('OK Pressed') },
            ]), 
                console.log("B1")
            return {
                ...state, prescriptionList: [
                    ...state.prescriptionList.filter(drug => drug !== action.payload.drug),
                ],
            };
        case "ADD_FAV":
            var favCheck = false;
            console.log(favCheck);
            [...state.favDrugsList].map(function (item, index) {
                (item == action.payload.drug.title) ? favCheck = true : favCheck = favCheck;
            });
            console.log(favCheck)
            if (!favCheck) {
                Alert.alert("Eklendi", "İlaç kaydedilenler listenize eklendi." , [
                    {text: 'TAMAM', onPress: () => console.log('OK Pressed')
                    },
                  ] ),
                console.log("A1");
                var newDrugsList = [];
                newDrugsList.id = action.payload.drug.id;
                newDrugsList.title = action.payload.drug.title;
                newDrugsList.description = action.payload.drug.description;
                newDrugsList.price = action.payload.drug.price;
                newDrugsList.etkenmadde = action.payload.drug.etkenmadde;
                newDrugsList.muadili = action.payload.drug.muadili;
                newDrugsList.image = action.payload.drug.image;
            
                return { ...state, favDrugsList: [...state.favDrugsList, newDrugsList.title] }
            }
            else {   
                Alert.alert("Eklenenemedi", "İlaç zaten kaydedilenler listenizde ekli." , [
                    {text: 'TAMAM', onPress: () => console.log('OK Pressed')},
                  ] );
                return state;
            }
            
        case 'REMOVE_FAV':
            Alert.alert("Silindi", "İlaç kaydedilenler listenizden silindi.", [
                { text: 'TAMAM', onPress: () => console.log('OK Pressed') },
            ]), 
                console.log("B1")
            return {
                ...state, favDrugsList: [
                    ...state.favDrugsList.filter(drug => drug !== action.payload.drug),
                ],
            };
        default:
            return state;
    }
}

/**
 * var isInclude = false;
            // Burada yeni eklenecek favori zaten var mı kontrolü yapılır.
            [...state.jobs].map(function (item, index){
                (item.id == action.payload.id) ? isInclude = true : isInclude = isInclude; 
            });
            if(!isInclude){
                var newJobs = {};
                newJobs.id = action.payload.id;
                newJobs.name = action.payload.name;
                newJobs.locations = action.payload.locations;
                newJobs.levels = action.payload.levels;
                newJobs.company = action.payload.company;
                newJobs.publication_date = action.payload.publication_date;
                return {...state, jobs: [...state.jobs, newJobs]}
            }
            else{
               return state; 
            }
 */

/**
 * return {...state, favDrugsList: [...state.favDrugsList, action.payload.drug ]}
 */

/**
 * var favCheck = false;
            [...state.favDrugsList].map(function (item, index) {
                (item.id == action.payload.drug.id) ? favCheck = true : favCheck = favCheck;
            });
            if (!favCheck) {
                Alert.alert("", "İlaç sık kullanılanlar listenize eklendi." , [
                    {text: 'TAMAM', onPress: () => console.log('OK Pressed')},
                  ] ),
                console.log("A1");
                var newDrugsList = [];
                newDrugsList.id = action.payload.drug.id;
                newDrugsList.title = action.payload.drug.title;
                newDrugsList.description = action.payload.drug.description;
                newDrugsList.price = action.payload.drug.price;
                newDrugsList.etkenmadde = action.payload.drug.etkenmadde;
                newDrugsList.muadili = action.payload.drug.muadili;
                newDrugsList.image = action.payload.drug.image;
            
                return { ...state, favDrugsList: [...state.favDrugsList, newDrugsList] }
            }
            else {   
                console.log("A2")
                return state;
            }
 */