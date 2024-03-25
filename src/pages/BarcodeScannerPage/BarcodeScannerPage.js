import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Switch, Dimensions, Button, Touchable, TouchableOpacity } from 'react-native';
import styles from "./BarcodeScannerPage.style";
import DrugCard from '../../components/DrugCard';
import drug_data from "../../drug_data.json";
import SearchBar from '../../components/SearchBar';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InfoPage from '../InfoPage';
import { withNavigation } from "react-navigation";
import Toast from 'react-native-toast-message';
import { RNCamera } from 'react-native-camera';
import { Dialog, Image } from '@rneui/themed';
import BarcodeCard from '../../components/BarcodeCard';

const BarcodeScannerPage = ({ item, navigation, route }) => {

  const [barValue, setBarValue] = useState('');
  const [barType, setBarType] = useState('');
  const [flash, setFlash] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const [list, setList] = useState(drug_data);
  const [listE, setListE] = useState([]);
  const [text, setText] = useState("");

  const showDrug = () => {
    const filteredList = drug_data.filter(
      drug => {
        const searchedText = barValue;
        const currentTitle = drug.barcode;
        return currentTitle.indexOf(searchedText) > -1;
      }
    );
    setListE(filteredList);
  }

  const onPressDrug = ([id, title, description, image, price, etkenmadde, muadili, barcode]) => {
    return (
      navigation.navigate('InfoPage', {
        id: id,
        title: title,
        description: description,
        image: image,
        price: price,
        etkenmadde: etkenmadde,
        muadili: muadili,
        barcode: barcode,
      }
      ))
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <RNCamera
          ref={ref => { this.camera = ref; }}
          captureAudio={false}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          defaultTouchToFocus
          flashMode={flash ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}
          mirrorImage={false}
          // onBarCodeRead={readBarcode}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes, barcodes.length)
            if (barcodes.length > 0) {
              setBarValue(barcodes[0].data)
              setBarType(barcodes[0].format)
              setShowDialog(true)
              showDrug()
            }
          }}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: Dimensions.get('window').height,
            width: Dimensions.get('window').width
          }}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        />
          <TouchableOpacity style={{alignSelf:'center'}} onPress={() => setFlash(!flash)}>
            <View style={styles.flash}>
              
                {flash ? <Image style={styles.flashIcon} source={require("../../../assets/icons/flashOff.png")} /> : <Image  style={styles.flashIcon}  source={require("../../../assets/icons/flashOn.png")} />}
              
            </View>
          </TouchableOpacity>
          <Dialog 
        isVisible={showDialog}
        onBackdropPress={() => setShowDialog(!showDialog)}>
            <Dialog.Title titleStyle={styles.titleStyle} title="Taratılan ilaç:"/>
            {listE == "" ? <Text style = {styles.contentStyle}>İlaç bulunumadı :/</Text> : <FlatList     
                        data={listE}
                        renderItem={({ item }) => <BarcodeCard data={item} favorite={false} onPress={() => onPressDrug([item.id, item.title, item.description, item.image, item.price, item.etkenmadde, item.muadili, item.barcode])} />}
                    />}
            <Dialog.Actions>
                <Dialog.Button titleStyle={styles.dialogText} buttonStyle = {styles.dialogButton} title="Yeniden Tara" onPress={() => {
                    setShowDialog(false)
                }}/>
            </Dialog.Actions>
        </Dialog>
      </View>
    </SafeAreaView>
  );
}

export default BarcodeScannerPage;


/***<Text style={styles.contentStyle}>
                {`Data: ${barValue}`}
            </Text> */

            /***
             * {flash ? <View style={{flexDirection: 'row'}}>
                  <Image style={styles.flashIcon} source={require("../../../assets/icons/flashOff.png")} />
                  <Text>Flash Kapat</Text>
                </View> : <View style={{flexDirection: 'row'}}>
                  <Image style={styles.flashIcon} source={require("../../../assets/icons/flashOn.png")} />
                  <Text>Flash Aç</Text>
                </View>}
             */