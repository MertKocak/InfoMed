import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from "./InfoPage.style";
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import drug_data from "../../drug_data.json";
import colors from '../../colors';
import { UseDispatch, useDispatch } from 'react-redux';

const InfoPage = ({ route, navigation }) => {
    const { id, title, description, image, price, etkenmadde, muadili } = route.params;

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

    if (id == 1) {
        img = images.parol;
    }
    else if (id == 2) {
        img = images.aferin;
    }
    else if (id == 3) {
        img = images.ibucold;
    }
    else if (id == 4) {
        img = images.apireks;
    }
    else if (id == 5) {
        img = images.dolgit;
    }
    else if (id == 6) {
        img = images.dolven;
    }
    else if (id == 7) {
        img = images.aerius;
    }
    else if (id == 8) {
        img = images.desrinal;
    }
    else if (id == 9) {
        img = images.fulsac;
    }
    else if (id == 10) {
        img = images.depreks;
    }
    else if (id == 11) {
        img = images.tribeksol;
    }
    else if (id == 12) {
        img = images.apikobal;
    }
    else if (id == 13) {
        img = images.metpamid;
    }
    else if (id == 14) {
        img = images.nastifran;
    }
    else if (id == 15) {
        img = images.metigast;
    }
    else if (id == 16) {
        img = images.metsil;
    }

    const dispatch = useDispatch();


    const handleAddPrescription = () => {
        dispatch({ type: "ADD_PRESCRIPTION", payload: { drug: route.params } });
    }

    const handleAddFav = () => {
        dispatch({ type: "ADD_FAV", payload: { drug: route.params } });
    }

    return (
        <ScrollView style={styles.body}>
            <SafeAreaView style={styles.body}>
                <SafeAreaView style={styles.top_container}>
                    <View style = {{flexDirection: 'row'}}>
                    <Image style={styles.image} source={img} />
                    <View style={styles.body_container}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.price}>Fiyat: {price} ₺</Text>
                    </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={handleAddFav}>
                            <View style={styles.addFavButton}>
                                <Image style={styles.buttonIcon} source={require("../../../assets/icons/save.png")} />
                                <Text style={styles.buttonText} >Sık Kullanılanlara Ekle</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleAddPrescription}>
                            <View style={styles.addPresButton}>
                                <Image style={styles.buttonIcon} source={require("../../../assets/icons/addprescription.png")} />
                                <Text style={styles.buttonText} >Reçeteme Ekle</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>

                <SafeAreaView style={styles.bottom_container}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.subtitle2}>Etken Madde:</Text>
                        <Text style={styles.contents2}>{etkenmadde}</Text>
                    </View>
                    <Text style={styles.subtitle}>Kullanım Talimatları:</Text>
                    <Text style={styles.contents}>{description}</Text>
                </SafeAreaView>
            </SafeAreaView>
        </ScrollView>
    );
}

export default InfoPage;