import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput, ScrollView, Image, Alert } from 'react-native';
import styles from "./PrescriptionPage.style";
import drug_data from "../../drug_data.json";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import PrescriptionCard from '../../components/PrescriptionCard';
import { useSelector } from 'react-redux';
import FavDrugCard from '../../components/FavDrugCard';
import DatePicker from 'react-native-date-picker';
import Notifications from '../../../Notifications';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import { request } from 'react-native-permissions';


const PrescriptionPage = ({ navigation }) => {

    const [list, setList] = useState(drug_data);
    const [listE, setListE] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        requestPermission();
      }, []);

    const requestNotificationPermission = async () => {
        const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
        return result;
      };

      const checkNotificationPermission = async () => {
        const result = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
        return result;
      };

      const requestPermission = async () => {
        const checkPermission = await checkNotificationPermission();
        if (checkPermission !== RESULTS.GRANTED) {
         const request = await requestNotificationPermission();
           if(request !== RESULTS.GRANTED){
            }
        }
      };

    const prescriptionList = useSelector(state => state.prescriptionList);

    return (
        <ScrollView style={styles.body}>
            <SafeAreaView >
                <View style={styles.body}>
                    
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 12 }}
                        data={prescriptionList}
                        renderItem={({ item }) => <PrescriptionCard data={item} />}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default PrescriptionPage;

/**
 * <View style={styles.searchBody}>
                        <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
                        <TextInput placeholder="İlaç ekle..." placeholderTextColor={"#002C4C"}
                            style={styles.input} onChangeText={onChangeText} />
                    </View>

                     
                    <FlatList
                        data={listE}
                        renderItem={({ item }) => <PrescriptionCard data={item} favorite={false} onPress={() => onPressDrug([item.id, item.title, item.description, item.image, item.price, item.etkenmadde, item.muadili, item.isFav])} />}
                    />
                    <Text style={styles.title}>
                        Reçetem
                    </Text>
 */