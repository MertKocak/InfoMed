import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import styles from "./PrescriptionPage.style";
import drug_data from "../../drug_data.json";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import PrescriptionCard from '../../components/PrescriptionCard';
import { useSelector } from 'react-redux';
import FavDrugCard from '../../components/FavDrugCard';


const PrescriptionPage = ({ navigation }) => {

    const [list, setList] = useState(drug_data);
    const [listE, setListE] = useState([]);
    const [text, setText] = useState("");

    const prescriptionList = useSelector(state => state.prescriptionList);

    const onChangeText = (text) => {
        const filteredList = drug_data.filter(drug => {
            const searchedText = text.toLowerCase();
            const currentTitle = drug.title.toLowerCase();
            return currentTitle.indexOf(searchedText) > -1;
        });
        setListE(filteredList);
    }

    const onPress = () => {
        const filteredList = drug_data.filter(
            drug => {
                const searchedText = text.toLowerCase();
                const currentTitle = drug.title.toLowerCase();
                return currentTitle.indexOf(searchedText) > -1;
            }
        );
        setListE(filteredList);
    }

    const onPressDrug = ([id, title, description, image, price, etkenmadde, muadili, isFav]) => {
        return (
            navigation.navigate('InfoPage', {
                id: id,
                title: title,
                description: description,
                image: image,
                price: price,
                etkenmadde: etkenmadde,
                muadili: muadili,
                isFav: isFav,
            }
            ))
    };

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