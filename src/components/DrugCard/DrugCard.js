import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TouchableWithoutFeedback, Image, Alert, ToastAndroid  } from 'react-native';
import styles from "./DrugCard.style"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { UseSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import { UseDispatch, useDispatch } from 'react-redux';
import colors from '../../colors';

const DrugCard = ({ data, onPress, favorite }) => {

    const images = {
        parol: require("../../../assets/drug_images/parol.jpg"),
        aferin: require("../../../assets/drug_images/aferin.jpg"),
        ibucold: require("../../../assets/drug_images/ibucold.webp"),
        apireks: require("../../../assets/drug_images/apireks.png"),
        dolgit: require("../../../assets/drug_images/dolgit.webp"),
        dolven: require("../../../assets/drug_images/dolven.jpg"),
        aerius: require("../../../assets/drug_images/aerius.webp"),
        desrinal: require("../../../assets/drug_images/desrinal.jpg"),
        fulsac: require("../../../assets/drug_images/fulsac.jpg"),
        depreks: require("../../../assets/drug_images/depreks.jpg"),
        tribeksol: require("../../../assets/drug_images/tribeksol.jpg"),
        apikobal: require("../../../assets/drug_images/apikobal.jpg"),
        metpamid: require("../../../assets/drug_images/metpamid.jpg"),
        nastifran: require("../../../assets/drug_images/nastifran.png"),
        metigast: require("../../../assets/drug_images/metigast.jpg"),
        metsil: require("../../../assets/drug_images/metsil.jpg"),
    };

    if (data.id == 1) {
        img = images.parol;
    }
    else if (data.id == 2) {
        img = images.aferin;
    }
    else if (data.id == 3) {
        img = images.ibucold;
    }
    else if (data.id == 4) {
        img = images.apireks;
    }
    else if (data.id == 5) {
        img = images.dolgit;
    }
    else if (data.id == 6) {
        img = images.dolven;
    }
    else if (data.id == 7) {
        img = images.aerius;
    }
    else if (data.id == 8) {
        img = images.desrinal;
    }
    else if (data.id == 9) {
        img = images.fulsac;
    }
    else if (data.id == 10) {
        img = images.depreks;
    }
    else if (data.id == 11) {
        img = images.tribeksol;
    }
    else if (data.id == 12) {
        img = images.apikobal;
    }
    else if (data.id == 13) {
        img = images.metpamid;
    }
    else if (data.id == 14) {
        img = images.nastifran;
    }
    else if (data.id == 15) {
        img = images.metigast;
    }
    else if (data.id == 16) {
        img = images.metsil;
    }

    const dispatch = useDispatch();

    const handleAddFav = () => {
        dispatch({ type: "ADD_FAV", payload: { drug: data } });
    }

    const handleAddPrescription = () => {
        dispatch({ type: "ADD_PRESCRIPTION", payload: { drug: data } });
    }

    return (
        <SafeAreaView style={{ backgroundColor: "white" }}>
            <TouchableWithoutFeedback onPress={onPress}>
                <SafeAreaView style={styles.container}>
                    <Image style={styles.image} source={img} />
                    <SafeAreaView style={styles.body_container}>
                        <Text style={styles.title} numberOfLines={2}>{data.title}</Text>
                        <Text style={styles.price}>Fiyat: {data.price} ₺</Text>
                    </SafeAreaView>
                    <SafeAreaView style={styles.fav_container}>
                        <TouchableOpacity onPress={handleAddFav}>
                            <Image style={styles.icon} source={require("../../../assets/icons/save.png")} /></TouchableOpacity>
                            <TouchableOpacity onPress={handleAddPrescription}>
                            <Image style={styles.icon} source={require("../../../assets/icons/addprescription.png")} /></TouchableOpacity>
                    </SafeAreaView>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );

}

export default DrugCard;