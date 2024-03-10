import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import styles from "./EquivalentPage.style";
import DrugCard from '../../components/DrugCard';
import drug_data from "../../drug_data.json";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import colors from '../../colors';


const EquivalentPage = ({ navigation }) => {

    const [list, setList] = useState(drug_data);
    const [listE, setListE] = useState([]);
    const [text, setText] = useState("");

    const onPress = () => {
        const filteredList = drug_data.filter(
            drug => {
                const searchedText = text.toLowerCase();
                const currentTitle = drug.muadili.toLowerCase();
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
                    <View style={styles.searchBody}>
                        <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
                        <TextInput placeholder="Muadil ilaç ara..." placeholderTextColor={colors.primaryColor}
                            style={styles.input} onChangeText={setText} />
                    </View>
                    <TouchableOpacity onPress={onPress} style={styles.button}>
                        <Text style={styles.buttonText}>
                            Muadil İlaç Öner
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.warning}>
                        <Image style={styles.warningIcon} source={require("../../../assets/icons/warning.png")} />
                        <Text style={styles.contentW}>Önerilen ilacı/ilaçları kullanmadan önce prospektüs bilgilerini mutlaka kontrol ediniz. Doktorunuza veya eczacınıza danışınız.</Text>
                    </View>
                    <Text style={styles.title}>
                        Muadil İlaç/İlaçlar:
                    </Text>
                    <FlatList
                        contentContainerStyle={{ paddingBottom: 12 }}
                        data={listE}
                        renderItem={({ item }) => <DrugCard data={item} favorite={false} onPress={() => onPressDrug([item.id, item.title, item.description, item.image, item.price, item.etkenmadde, item.muadili, item.isFav])} />}
                    />

                </View>
            </SafeAreaView>
        </ScrollView>
    );
}

export default EquivalentPage;