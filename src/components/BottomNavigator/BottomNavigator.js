import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from "./BottomNavigator.style";

const BottomNavigator = () => {
    return(
        <TouchableOpacity>
            <SafeAreaView style={styles.container}>
            <Text>Home</Text>
        </SafeAreaView>
        </TouchableOpacity>
    )
}

export default BottomNavigator;