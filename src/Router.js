import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Pressable, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './pages/HomePage';
import DrugSearchPage from './pages/DrugSearchPage';
import EMSearchPage from './pages/EMSearchPage';
import FavoritesPage from './pages/FavoritesPage';
import IndicationPage from './pages/IndicationPage';
import InfoPage from './pages/InfoPage';
import EquivalentPage from './pages/EquivalentPage';
import { assets } from '../react-native.config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./context/store";
import colors from './colors';
import styles from "./Router.style"

const Router = ({route, navigation}) => {

  const Stack = createNativeStackNavigator();

  const onPressButton = (buttonName) => {
    return(
        navigation.navigate(buttonName)
    )
}

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomePage" component={HomePage} 
        options={{
          title: "",
          headerStyle: {backgroundColor: colors.primaryColor},
          headerTitleStyle: {
            fontFamily: 'Raleway-SemiBold',
            fontSize: 16
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: "white",    
          headerRight: () => (
            <View>
              <Pressable
                        style={[styles.buttonOpen]}
                        onPress={() => setModalVisible(true)}>
                        <Image style={styles.icon} source={require("../assets/icons/info.png")} />
                    </Pressable>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Bu uygulama, kullanıcıların ilaçlar hakkında bilgi edinmelerine ve belirli durumlar için ilaç önerisi almalarına yardımcı olmak amacıyla tasarlanmıştır.{"\n"}Bu bilgiler sadece genel bilgilendirme amaçlıdır. Bir doktordan veya eczacıdan alınacak profesyonel tavsiyenin yerini tutamaz.{"\n"}{"\n"}Herhangi bir sağlık sorunu, belirti veya ilaç kullanımı ile ilgili endişeleriniz varsa, lütfen bir doktora veya eczacıya danışın. </Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}>
                                    <Text style={styles.textStyle}>Tamam</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
            </View>
          )
        }}/>
        <Stack.Screen name="DrugSearchPage" component={DrugSearchPage}
        options={({ navigation }) => ({
          title: "İlaç Ara",
          headerTitleStyle: {
            fontFamily: 'Raleway-SemiBold',
            fontSize: 16
          },
          headerStyle: {backgroundColor: colors.primaryColor},
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: "white",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("FavoritesPage")}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-end'}}><Image style={{height: 20, width: 20, tintColor: colors.secondaryColor}} source={require('../assets/icons/favorite.png')} /></View></TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-start'}}><Image style={{height: 18, width:18, tintColor: colors.secondaryColor}} source={require('../assets/icons/back.png')} /></View></TouchableOpacity>
          ),
        })}/>
        <Stack.Screen name="EMSearchPage" component={EMSearchPage} 
        options={({ navigation }) => ({
          title: "Etken Madde Ara",
          headerTitleStyle: {
            fontFamily: 'Raleway-SemiBold',
            fontSize: 16
          },
          headerStyle: {backgroundColor: colors.primaryColor},
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: "white",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("FavoritesPage")}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-end'}}><Image style={{height: 20, width: 20, tintColor: colors.secondaryColor}} source={require('../assets/icons/favorite.png')} /></View></TouchableOpacity>
          ),
          headerLeft: () => (
             <TouchableOpacity onPress={() => navigation.goBack()}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-start'}}><Image style={{height: 18, width:18, tintColor: colors.secondaryColor}} source={require('../assets/icons/back.png')} /></View></TouchableOpacity>
          ),
        })}/>
        <Stack.Screen name="FavoritesPage" component={FavoritesPage}
        options={({ navigation }) => ({
          title: "Sık Kullanılanlar",
          headerTitleStyle: {
            fontFamily: 'Raleway-SemiBold',
            fontSize: 16
          },
          headerStyle: {backgroundColor: colors.primaryColor},
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: "white",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("HomePage")}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-end'}}><Image style={{height: 20, width: 20, tintColor: colors.secondaryColor}} source={require('../assets/icons/home.png')} /></View></TouchableOpacity>
          ),
          headerLeft: () => (
             <TouchableOpacity onPress={() => navigation.goBack()}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-start'}}><Image style={{height: 18, width:18, tintColor: colors.secondaryColor}} source={require('../assets/icons/back.png')} /></View></TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="IndicationPage" component={IndicationPage}
        options={({ navigation }) => ({
          title: "Semptom",
          headerTitleStyle: {
            fontFamily: 'Raleway-SemiBold',
            fontSize: 16
          },
          headerStyle: {backgroundColor: colors.primaryColor},
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: "white",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("HomePage")}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-end'}}><Image style={{height: 20, width: 20, tintColor: colors.secondaryColor}} source={require('../assets/icons/home.png')} /></View></TouchableOpacity>
          ),
          headerLeft: () => (
             <TouchableOpacity onPress={() => navigation.goBack()}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-start'}}><Image style={{height: 18, width:18, tintColor: colors.secondaryColor}} source={require('../assets/icons/back.png')} /></View></TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="EquivalentPage" component={EquivalentPage}
        options={({ navigation }) => ({
          title: "Muadil İlaç",
          headerTitleStyle: {
            fontFamily: 'Raleway-SemiBold',
            fontSize: 16
          },
          headerStyle: {backgroundColor: colors.primaryColor},
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: "white",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("HomePage")}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-end'}}><Image style={{height: 20, width: 20, tintColor: colors.secondaryColor}} source={require('../assets/icons/home.png')} /></View></TouchableOpacity>
          ),
          headerLeft: () => (
             <TouchableOpacity onPress={() => navigation.goBack()}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-start'}}><Image style={{height: 18, width:18, tintColor: colors.secondaryColor}} source={require('../assets/icons/back.png')} /></View></TouchableOpacity>
          ),
        })} />
        <Stack.Screen name="InfoPage" component={InfoPage}
        options={({ navigation }) => ({
          title: "Prospektüs",
          headerTitleStyle: {
            fontFamily: 'Raleway-SemiBold',
            fontSize: 16
          },
          headerStyle: {backgroundColor: colors.primaryColor},
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTintColor: "white",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("HomePage")}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-end'}}><Image style={{height: 20, width: 20, tintColor: colors.secondaryColor}} source={require('../assets/icons/home.png')} /></View></TouchableOpacity>
          ),
          headerLeft: () => (
             <TouchableOpacity onPress={() => navigation.goBack()}><View style = {{height: 40, width: 40, justifyContent: 'center',alignItems: 'flex-start'}}><Image style={{height: 18, width:18, tintColor: colors.secondaryColor}} source={require('../assets/icons/back.png')} /></View></TouchableOpacity>
          ),
        })} />
      </Stack.Navigator>
    </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

export default Router;