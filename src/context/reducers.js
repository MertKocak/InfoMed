import React from 'react';
import Toast from 'react-native-toast-message';
import { Alert, ToastAndroid  } from 'react-native';

const initialState = {
    favDrugsList: [],
    prescriptionList: [],
};

const showToast = (title) => {
    ToastAndroid.show(title, ToastAndroid.SHORT);
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
                showToast("İlaç reçetenize eklendi.");
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
                showToast("İlaç zaten reçetenizde ekli."); 
               /*  Alert.alert("Eklenenemedi", "İlaç zaten reçetenizde ekli." , [
                    {text: 'TAMAM', onPress: () => console.log('OK Pressed')},
                  ] ); */
                return state;
            }
            case 'REMOVE_PRESCRIPTION':
                showToast("İlaç reçetenizden silindi.");
            /* Alert.alert("Silindi", "İlaç reçetenizden silindi.", [
                { text: 'TAMAM', onPress: () => console.log('OK Pressed') },
            ]),  */
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
                showToast("İlaç kaydedilenler listenize eklendi.");
                /* Alert.alert("Eklendi", "İlaç kaydedilenler listenize eklendi." , [
                    {text: 'TAMAM', onPress: () => console.log('OK Pressed')
                    },
                  ] ), */
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
                showToast("İlaç zaten kaydedilenler listenizde ekli.");
               /*  Alert.alert("Eklenenemedi", "İlaç zaten kaydedilenler listenizde ekli." , [
                    {text: 'TAMAM', onPress: () => console.log('OK Pressed')},
                  ] ); */
                return state;
            }
            
        case 'REMOVE_FAV':
            showToast("İlaç kaydedilenler listenizden silindi.")
           /*  Alert.alert("Silindi", "İlaç kaydedilenler listenizden silindi.", [
                { text: 'TAMAM', onPress: () => console.log('OK Pressed') },
            ]),  */
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

            /***
             *    ********************id*********************** *
        case "ADD_FAV_ID":
            var favCheck = false;
            console.log(favCheck);
            [...state.idList].map(function (item, index) {
                (item == action.payload.drug.id) ? favCheck = true : favCheck = favCheck;
            });
            console.log(favCheck)
            if (!favCheck) {
                console.log("id eklendi");
                var newidList = [];
                newidList.id = action.payload.drug.id;            
                return { ...state, idList: [...state.idList, newidList.id] }
            }
            else {  
                console.log("zaten id ekli");
                return state;
            }
            
        case 'REMOVE_FAV_ID':
                console.log("id silindi")
            return {
                ...state, idList: [
                    ...state.idList.filter(drug => drug !== action.payload.drug),
                ],
            };
            ***********************price*************************
        case "ADD_FAV_PRICE":
            var favCheck = false;
            console.log(favCheck);
            [...state.priceList].map(function (item, index) {
                (item == action.payload.drug.price) ? favCheck = true : favCheck = favCheck;
            });
            console.log(favCheck)
            if (!favCheck) {
                console.log("price eklendi");
                var newPriceList = [];
                newPriceList.price = action.payload.drug.price;            
                return { ...state, priceList: [...state.priceList, newPriceList.price] }
            }
            else {  
                console.log("zaten price ekli");
                return state;
            }
            
        case 'REMOVE_FAV_PRICE':
                console.log("price silindi")
            return {
                ...state, priceList: [
                    ...state.priceList.filter(drug => drug !== action.payload.drug),
                ],
            };
            *****************description********************** 
        case "ADD_FAV_DESC":
            var favCheck = false;
            console.log(favCheck);
            [...state.descList].map(function (item, index) {
                (item == action.payload.drug.description) ? favCheck = true : favCheck = favCheck;
            });
            console.log(favCheck)
            if (!favCheck) {
                var newDescList = [];
                newDescList.description = action.payload.drug.description;            
                return { ...state, descList: [...state.descList, newDescList.description] }
            }
            else {  
                return state;
            }
            
        case 'REMOVE_FAV_DESC':
            return {
                ...state, descList: [
                    ...state.descList.filter(drug => drug !== action.payload.drug),
                ],
            };
            ****************img*******************
        case "ADD_FAV_IMG":
            var favCheck = false;
            console.log(favCheck);
            [...state.imgList].map(function (item, index) {
                (item == action.payload.drug.image) ? favCheck = true : favCheck = favCheck;
            });
            console.log(favCheck)
            if (!favCheck) {
                var newImgList = [];
                newImgList.id = action.payload.drug.id;            
                return { ...state, imgList: [...state.imgList, newImgList.image] }
            }
            else {  
                return state;
            }
            
        case 'REMOVE_FAV_IMG':
            return {
                ...state, imgList: [
                    ...state.imgList.filter(drug => drug !== action.payload.drug),
                ],
            };
        ***************etkenmadde************************ 
        case "ADD_FAV_EM":
            var favCheck = false;
            console.log(favCheck);
            [...state.emList].map(function (item, index) {
                (item == action.payload.drug.etkenmadde) ? favCheck = true : favCheck = favCheck;
            });
            console.log(favCheck)
            if (!favCheck) {
                var newEMList = [];
                newEMList.id = action.payload.drug.id;            
                return { ...state, emList: [...state.emList, newEMList.etkenmadde] }
            }
            else {  
                return state;
            }
        case 'REMOVE_FAV_EM':
            return {
                ...state, emList: [
                    ...state.emList.filter(drug => drug !== action.payload.drug),
                ],
            };
            ***************barcode************************ 
        case "ADD_FAV_BARCODE":
            var favCheck = false;
            console.log(favCheck);
            [...state.barcodeList].map(function (item, index) {
                (item == action.payload.drug.barcode) ? favCheck = true : favCheck = favCheck;
            });
            console.log(favCheck)
            if (!favCheck) {
                var newBarcodeList = [];
                newBarcodeList.id = action.payload.drug.id;            
                return { ...state, barcodeList: [...state.barcodeList, newBarcodeList.barcode] }
            }
            else {  
                return state;
            }
        case 'REMOVE_FAV_BARCODE':
            return {
                ...state, barcodeList: [
                    ...state.barcodeList.filter(drug => drug !== action.payload.drug),
                ],
            };
            ****/