import React from 'react';
import { Alert } from 'react-native';

const initialState = {
    favDrugsList: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_FAV":
            var favCheck = false;
            console.log(favCheck);
            [...state.favDrugsList].map(function (item, index) {
                (item == action.payload.drug.title) ? favCheck = true : favCheck = favCheck;
            });
            console.log(favCheck)
            if (!favCheck) {
                Alert.alert("Eklendi", "İlaç sık kullanılanlar listenize eklendi." , [
                    {text: 'TAMAM', onPress: () => console.log('OK Pressed'), 
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
                Alert.alert("Eklenenemedi", "İlaç zaten sık kullanılanlar listenizde ekli." , [
                    {text: 'TAMAM', onPress: () => console.log('OK Pressed')},
                  ] );
                return state;
            }
            break;
        case 'REMOVE_FAV':
            Alert.alert("Silindi", "İlaç sık kullanılanlarınızdan silindi.", [
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