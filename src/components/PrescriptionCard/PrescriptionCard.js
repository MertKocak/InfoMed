import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import styles from "./PrescriptionCard.style"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { UseSelector } from 'react-redux';
import { UseDispatch, useDispatch } from 'react-redux';
import colors from '../../colors';


const PrescriptionCard = ({ data, onPress }) => {

    const dispatch = useDispatch();

    const handleRemovePres = () => {
        dispatch({ type: "REMOVE_PRESCRIPTION", payload: { drug: data } });
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <SafeAreaView style={styles.container}>
                <SafeAreaView style={styles.body_container}>
                    <Text style={styles.title} numberOfLines={2}>{data}</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.trash_container}>
                    <TouchableOpacity onPress={handleRemovePres}>
                    <Image style={{height: 28, width: 28, alignItems: 'center', tintColor: colors.primaryColor}} source={require("../../../assets/icons/trash.png")} />
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );

}

export default PrescriptionCard;