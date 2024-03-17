import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import styles from "./IndicationPage.style";
import DrugCard from '../../components/DrugCard';
import drug_data from "../../drug_data.json";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import colors from '../../colors';


const IndicationPage = ({ navigation }) => {

    const [list, setList] = useState(drug_data);
    const [listE, setListE] = useState([]);
    const [text, setText] = useState("");
    const [isOk, setisOk] = useState(false);

    const onPress = () => {
        const filteredList = drug_data.filter(
            drug => {
                const searchedText = text.toLowerCase();
                const currentTitle = drug.description.toLowerCase();
                return currentTitle.indexOf(searchedText) > -1;
            }
        );
        setListE(filteredList);

        if (filteredList == "" || null) {
            setisOk(true)
        }
        else (
            setisOk(false)
        );
        console.log("isOK: " + isOk)
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
        <ScrollView>
            <SafeAreaView style={styles.body}>
                <View style={styles.body}>
                    <View style={styles.searchBody}>
                        <Image style={styles.searchIcon} source={require("../../../assets/icons/search.png")} />
                        <TextInput placeholder="Örnek: Öksürük" placeholderTextColor={colors.primaryColor}
                            style={styles.input} onChangeText={setText} />
                    </View>
                    <TouchableOpacity onPress={onPress} style={styles.button}>
                        <Text style={styles.buttonText}>
                            İlaç Öner
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.warning}>
                        <Image style={styles.warningIcon} source={require("../../../assets/icons/warning.png")} />
                        <Text style={styles.contentW}>Önerilen ilacı/ilaçları kullanmadan önce prospektüs bilgilerini mutlaka kontrol ediniz. Doktorunuza veya eczacınıza danışınız.</Text>
                    </View>
                    <Text style={styles.title}>
                        Önerilen İlaç/İlaçlar:
                    </Text>
                    {isOk ? <View style={{ flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ tintColor: colors.primaryColor, marginTop: 40, height: 28, width: 28 }} source={require("../../../assets/icons/foundError.png")} />
                        <Text style={{ fontFamily: "Raleway-Medium", alignSelf: 'center', textAlign: 'center', borderRadius: 12, marginLeft: 16, marginRight: 16, marginTop: 12, fontSize: 12, color: colors.primaryColor }} >Aradığınız semptoma uygun ilaç bulunamadı</Text>
                        <Text style={{ fontFamily: "Raleway-Medium", alignSelf: 'center', textAlign: 'center', borderRadius: 12, marginLeft: 16, marginRight: 16, marginTop: 4, fontSize: 12, color: colors.primaryColor }} >Lütfen semptom ismini doğru yazdığınızdan emin olunuz veya semptomu başka şekilde ifade etmeyi deneyiniz</Text>
                    </View>
                        : <FlatList
                            contentContainerStyle={{ paddingBottom: 12, marginTop: -6 }}
                            data={listE}
                            renderItem={({ item }) => <DrugCard data={item} favorite={false} onPress={() => onPressDrug([item.id, item.title, item.description, item.image, item.price, item.etkenmadde, item.muadili, item.isFav])} />}
                        />}

                </View>
            </SafeAreaView>
        </ScrollView>

    );
}

export default IndicationPage;