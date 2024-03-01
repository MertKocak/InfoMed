import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';
import styles from "./FavDrugCard.style"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { UseSelector } from 'react-redux';

import { UseDispatch, useDispatch } from 'react-redux';
import colors from '../../colors';

const FavDrugCard = ({ data, onPress }) => {

    const dispatch = useDispatch();

    const handleRemoveFav = () => {
        dispatch({ type: "REMOVE_FAV", payload: { drug: data } });
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <SafeAreaView style={styles.container}>
                <SafeAreaView style={styles.body_container}>
                    <Text style={styles.title} numberOfLines={2}>{data}</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.trash_container}>
                    <TouchableOpacity onPress={handleRemoveFav}>
                    <Image style={{height: 28, width: 28, alignItems: 'center', tintColor: colors.primaryColor}} source={require("../../../assets/icons/trash.png")} />
                    </TouchableOpacity>
                </SafeAreaView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );

}

export default FavDrugCard;