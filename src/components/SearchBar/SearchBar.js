import React from "react";
import { View, TextInput, Image } from 'react-native';
import styles from "./SearchBar.style"
import colors from "../../colors";

const SearchBar = props => {

    return(
        <View style = {styles.searchBody}>
            <Image style = {styles.searchIcon} source={require("../../../assets/icons/search.png")} />
            <TextInput  placeholder="Ara..."  placeholderTextColor={colors.primaryColor}
            style={styles.input} onChangeText={props.onSearch} />
        </View>
    )
}

export default SearchBar;