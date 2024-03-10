import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Switch } from 'react-native';
import styles from "./DrugSearchPage.style";
import DrugCard from '../../components/DrugCard';
import drug_data from "../../drug_data.json";
import SearchBar from '../../components/SearchBar';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoPage from '../InfoPage';
import BottomNavigator from '../../components/BottomNavigator';
import { withNavigation } from "react-navigation";
import Toast from 'react-native-toast-message';

const DrugSearchPage = ({ item, navigation, route }) => {
  const [list, setList] = useState(drug_data);
  const [listE, setListE] = useState([]);

  const handleSearch = (text: any) => {
    const filteredList = drug_data.filter(
      drug => {
        const searchedText = text.toLowerCase();
        const currentTitle = drug.title.toLowerCase();
        return currentTitle.indexOf(searchedText) > -1;
      }
    )
    setListE(filteredList);
  };

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
    <SafeAreaView style={styles.body}>
      <View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 12}}
          ListHeaderComponent={
            <View><SearchBar onSearch={handleSearch} /></View>
          }
          data={listE}
          renderItem={({ item }) => <DrugCard data={item} favorite={false} onPress={() => onPressDrug([item.id, item.title, item.description, item.image, item.price, item.etkenmadde, item.muadili, item.isFav])} />}
        />
      </View>
    </SafeAreaView>
  );
}

export default DrugSearchPage;
