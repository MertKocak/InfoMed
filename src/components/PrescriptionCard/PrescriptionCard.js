import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TouchableWithoutFeedback, Image, Alert } from 'react-native';
import styles from "./PrescriptionCard.style"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { UseSelector } from 'react-redux';
import { UseDispatch, useDispatch } from 'react-redux';
import colors from '../../colors';
import DatePicker from 'react-native-date-picker';
import Notifications from '../../../Notifications';

const PrescriptionCard = ({ data, onPress }) => {

    const dispatch = useDispatch();

    const handleRemovePres = () => {
        dispatch({ type: "REMOVE_PRESCRIPTION", payload: { drug: data } });
        Notifications.cancelNotification()
    }

    const [date, setDate] = useState(new Date())
    console.log(date);

    const setNotification = (title, message) => {
        Notifications.schduleNotificationA(date, title, message);
        Alert.alert(data, "Hatırlatıcı " + date.getHours() + ":" + date.getMinutes() + " için ayarlandı." , [
            {text: 'TAMAM', onPress: () => console.log('OK Pressed')
            },
          ] );
    };

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <SafeAreaView style={styles.container}>
                <View style = {{flexDirection: 'row'}}>
                <SafeAreaView style={styles.body_container}>
                    <Text style={styles.title} numberOfLines={2}>{data}</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.trash_container}>
                    <TouchableOpacity onPress={handleRemovePres}>
                    <Image style={{height: 30, width: 30, alignItems: 'center', tintColor: colors.primaryColor}} source={require("../../../assets/icons/trash.png")} />
                    </TouchableOpacity>
                </SafeAreaView>
                </View>
                <View style = {styles.dateContainer}>
                        <DatePicker androidVariant='iosClone' style={styles.datePicker} is24hourSource='device' fadeToColor='#DFEFFF' textColor='#003C7D'  mode='time' date={date} onDateChange={setDate} />
                        <TouchableOpacity onPress={() => setNotification(data , " ilacını alma zamanı!")}>
                        <View style = {styles.button}>
                            <Text style = {styles.buttonText}>Hatırlatıcıyı Ayarla</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default PrescriptionCard;