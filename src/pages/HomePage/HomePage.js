import React, { useEffect, useState } from 'react';
import { Alert, Button, Modal, Pressable, Image, StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, Dimensions } from 'react-native';
import styles from "./HomePage.style";
import HomeCard from '../../components/HomeCard';
import DrugSearchPage from '../DrugSearchPage';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { withNavigation } from "react-navigation";
import { UseDispatch, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "../../context/store";
import EquivalentPage from '../EquivalentPage/EquivalentPage';
import colors from '../../colors';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import { request } from 'react-native-permissions';


const HomePage = ({ route, navigation }) => {

    useEffect(() => {
        requestPermission();
      }, []);

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const dispatch = useDispatch();

    const onPressButton = (buttonName) => {
        return (
            navigation.navigate(buttonName)
        )
    }

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

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <SafeAreaView style={styles.body}>
                    <View style={styles.topContainer}>
                        <Image style={styles.logoImage} source={require('../../../assets/images/InfoMed.png')} />
                    </View>
                    <View style={styles.container1}>
                        <HomeCard title={"Kaydedilenler"} desc={"Daha sonra incelemek istediğiniz ilaçları kayıt listenize ekleyebilirsiniz"} imgPath={"4"} onPress={() => onPressButton("FavoritesPage")}></HomeCard>
                        <HomeCard title={"Reçetem"} desc={"Güncel olarak kullandığınız ilaçları reçetenize ekleyebilirsiniz"} imgPath={"6"} onPress={() => onPressButton("PrescriptionPage")}></HomeCard>
                    </View>
                    <View style={styles.container1}>
                        <HomeCard title={"İlaç Bilgisi"} desc={"Prospektüs içeriğine erişmek istediğiniz ilacı aratabilirsiniz"} imgPath={"1"} onPress={() => onPressButton("DrugSearchPage")}></HomeCard>
                        <HomeCard title={"Etken Madde"} desc={"İçerdiği etken maddeye göre ilaç araması yapabilirsiniz"} imgPath={"2"} onPress={() => onPressButton("EMSearchPage")}></HomeCard>
                    </View>
                    <View style={styles.container1}>
                        <HomeCard title={"Semptom"} desc={"Sahip olduğunuz belirtileri aratarak ilaç önerisi alabilirsiniz"} imgPath={"3"} onPress={() => onPressButton("IndicationPage")}></HomeCard>
                        <HomeCard title={"Muadil İlaç"} desc={"Girmiş olduğunuz ilaca eşdeğer ilaç önerisi alabilirsiniz"} imgPath={"5"} onPress={() => onPressButton("EquivalentPage")}></HomeCard>
                    </View>
                    <View>
                    <HomeCard title={"Barkod Okut"} desc={"Prospektüs bilgilerine erişmek istediğiniz ilacın barkodunu okutabilirsiniz"} imgPath={"7"} onPress={() => onPressButton("BarcodeScannerPage")}></HomeCard>

                    </View>
                </SafeAreaView>
            </PersistGate>
        </Provider>

    );
}



export default HomePage;

/**
 * <HomeCard title = {"Sık Kullanılanlar"} desc = {"En sık kullandığınız ilaçları sık kullanılanlar listenize ekleyebilirsiniz"} imgPath={"4"} onPress={() => onPressButton("FavoritesPage")}></HomeCard>
 */

/**
 * <TouchableOpacity onPress={() => onPressButton("FavoritesPage")}>
                        <View style={{
                            width: (windowWidth - 24),
                            height: 80, backgroundColor: colors.secondaryColor, margin: 12, marginBottom: 0, borderRadius: 8, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                        }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <Text style={{
                                    color: colors.primaryColor,
                                    fontSize: 14, paddingLeft: 12,
                                    fontFamily: 'Raleway-Bold',
                                }}>Sık Kullanılanlar</Text>
                                <Text style={{
                                    color: colors.primaryColor,
                                    fontSize: 12,
                                    paddingLeft: 12,
                                    fontFamily: 'Raleway-Light',
                                }}>
                                    Sık kullandığınız ilaçları sık kullanılanlar {"\n"}listenize ekleyebilirsiniz
                                </Text>
                            </View>
                            <Image style={{
                                height: 24,
                                width: 24,
                                marginRight: 16,
                                tintColor: colors.primaryColor,
                            }} source={require("../../../assets/icons/fav.png")} />

                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => onPressButton("PrescriptionPage")}>
                        <View style={{
                            width: (windowWidth - 24),
                            height: 80, backgroundColor: colors.secondaryColor, margin: 12, marginBottom: 0, borderRadius: 8, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                        }}>
                            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <Text style={{
                                    color: colors.primaryColor,
                                    fontSize: 14, paddingLeft: 12,
                                    fontFamily: 'Raleway-Bold',
                                }}>Reçetem</Text>
                                <Text style={{
                                    color: colors.primaryColor,
                                    fontSize: 12,
                                    paddingLeft: 12,
                                    fontFamily: 'Raleway-Light',
                                }}>
                                    Güncel olarak kullandığınız ilaçları {"\n"}reçetenize ekleyebilirsiniz
                                </Text>
                            </View>
                            <Image style={{
                                height: 24,
                                width: 24,
                                marginRight: 16,
                                tintColor: colors.primaryColor,
                            }} source={require("../../../assets/icons/prescription.png")} />

                        </View>
                    </TouchableOpacity>
 */