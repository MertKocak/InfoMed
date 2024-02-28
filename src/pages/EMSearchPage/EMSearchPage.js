import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import styles from "./EMSearchPage.style"
import DrugCard from '../../components/DrugCard';
import drug_data from "../../drug_data.json";
import SearchBar from '../../components/SearchBar';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoPage from '../InfoPage';

const EMSearchPage = ({item, navigation}) => {
    const [list, setList] = useState(drug_data);
    const [listE, setListE] = useState([]);

    const onPressDrug = ([id, title, description, image, price, etkenmadde, muadili]) => {
      return(
        console.log("girdi"),
        navigation.navigate('InfoPage', {
          id: id,
          title: title,
          description: description, 
          image: image, 
          price: price, 
          etkenmadde: etkenmadde, 
          muadili: muadili,
        }
      ))
    }

    const handleSearch = (text: any) => {
        const filteredList = drug_data.filter(
          drug => {
            const searchedText = text.toLowerCase();
            const currentTitle = drug.etkenmadde.toLowerCase();
            return currentTitle.indexOf(searchedText) > -1;
          }
        )
        setListE(filteredList);
      };

    return(
        <SafeAreaView style = {styles.body}>
      <View>        
        <FlatList
        contentContainerStyle={{ paddingBottom: 12 }}
        ListHeaderComponent={
          <SearchBar onSearch={handleSearch} />
        }
        data={listE}
        renderItem ={({item}) =><DrugCard data = {item} onPress={() => onPressDrug([item.id, item.title, item.description, item.image, item.price, item.etkenmadde, item.muadili])}/>}
        />
      </View>
    </SafeAreaView>
    );
}

export default EMSearchPage;