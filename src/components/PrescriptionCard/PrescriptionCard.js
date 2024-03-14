import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, TouchableWithoutFeedback, Image, Alert, Modal, Pressable, Dimensions, ToastAndroid } from 'react-native';
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

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);

    const handleRemovePres = (data) => {
        dispatch({ type: "REMOVE_PRESCRIPTION", payload: { drug: data } });
        Notifications.cancelNotification(data)
    }

    const [date, setDate] = useState(new Date())
    console.log(date);

    const showToast = (title) => {
        ToastAndroid.show(title, ToastAndroid.SHORT);
      };

    const setNotification = (title, message) => {
        setModalVisible(!modalVisible);
        
        Notifications.schduleNotification(date, title, message);
        Alert.alert(data, "Hatırlatıcı " + date.getHours().toString() + ":" + date.getMinutes().toString() + " için ayarlandı.", [
            {
                text: 'TAMAM', onPress: () => console.log('OK Pressed')
            },
        ]);
    };

    const openDatepicker = () => {
        setModalVisible(true);
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <SafeAreaView style={styles.container}>
               
               <View style={{flex: 1, flexDirection: 'row'}}>
               <SafeAreaView style={styles.date_container}>
                        <TouchableOpacity onPress={openDatepicker}>
                            <Image style={{ height: 28, width: 28, alignItems: 'center', tintColor: colors.primaryColor }} source={require("../../../assets/icons/reminder.png")} />
                        </TouchableOpacity>
                    </SafeAreaView> 
                    <SafeAreaView style={styles.body_container}>
                        <Text style={styles.title} numberOfLines={2}>{data}</Text>
                    </SafeAreaView>
                   {/*  <TouchableOpacity>
                     <View style = {styles.dateText}>
                        <Text style={styles.notif}>{date.getHours().toString() + ":"}</Text>
                        <Text style={styles.notifB}>{date.getMinutes() < 10 ? "0" + date.getMinutes().toString() : date.getMinutes().toString()}</Text>
                    </View> 
                    </TouchableOpacity> */}
                    
                </View>
                <View style = {styles.edit_container}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                        <View style = {styles.dateContainer}>
                        <DatePicker androidVariant='iosClone'  style={styles.datePicker}  is24hourSource='device' fadeToColor='#003C7D' textColor='#DFEFFF'  mode='time' date={date} onDateChange={setDate} />
                    </View>
                            <TouchableOpacity
                                style={[styles.buttonPopup, styles.buttonClose]}
                                onPress={() => setNotification(data , " ilacını alma zamanı!")}>
                                <Text style={styles.textStyle}>Kaydet</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
               
                    
                
                    <SafeAreaView style={styles.trash_container}>
                        <TouchableOpacity onPress={() => handleRemovePres(data)}>
                            <Image style={{ height: 26, width: 26, alignItems: 'center', tintColor: colors.primaryColor }} source={require("../../../assets/icons/trash.png")} />
                        </TouchableOpacity>
                    </SafeAreaView> 
                </View>
              
                <View style={{
                    flexDirection: 'row',justifyContent: 'space-between', backgroundColor: "red"
                }}>
                    
                    
                    {/* <TouchableOpacity onPress={openDatepicker}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Hatırlatıcı Ayarla</Text>
                        </View>
                    </TouchableOpacity> */}
                </View>
                
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
}

export default PrescriptionCard;

/**
 * 
               
 */