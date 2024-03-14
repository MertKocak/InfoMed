import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import styles from "./FavoritesPage.style";
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FavDrugCard from '../../components/FavDrugCard';

const FavoritesPage = ({ item, navigation }) => {

  const list = useSelector(state => state.favDrugsList);
  console.log(list);

  
    
  return (
      <SafeAreaView style={styles.body}>
      <View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 12 }}
          data={list}
          renderItem={({ item }) => <FavDrugCard data={item} /> }
        />
      </View>
    </SafeAreaView>

  );
}

export default FavoritesPage;
