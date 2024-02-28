import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import styles from "./HomeCard.style";
import colors from '../../colors';

const HomeCard = ({title, desc, onPress, imgPath}) => {
    const images = {
        image1: require("../../../assets/icons/pill.png"),
        image2: require("../../../assets/icons/pills.png"),
        image3: require("../../../assets/icons/stethoscope.png"),
        image4: require("../../../assets/icons/fav.png"),  
        image5: require("../../../assets/icons/drugs.png"),  
      };

    if(imgPath == "1"){
        img = images.image1;
    }
    else if(imgPath == "2"){
        img = images.image2;
    }
    else if(imgPath == "3"){
        img = images.image3;
    }
    else if(imgPath == "4"){
        img = images.image4;
    }
    else if(imgPath == "5"){
        img = images.image5;
    }
    
    return(
        <TouchableOpacity onPress={onPress}>
            
            <SafeAreaView style = {styles.container}>
            <Image style = {styles.image} source={img} />
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.desc}>{desc}</Text>
        </SafeAreaView>
        </TouchableOpacity>
    );

}

export default HomeCard;