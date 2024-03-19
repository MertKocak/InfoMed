import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryColor,
        marginLeft: 12,
        marginTop: 12,
        padding: 10,
        width: (windowWidth - 36) / 2,
        height: 114,
        borderRadius: 12,
        justifyContent: "space-between",
    },
    title: {
        color: colors.primaryColor,
        fontSize: 12,
        fontFamily: 'Manrope-Bold',
    },
    desc: {
        color: colors.primaryColor,
        fontSize: 11,
        marginTop: 2,
        marginBottom: 2,
        fontFamily: 'Manrope-Light',
    },
    image: {
        height: 20, 
        width:20, 
        alignSelf: 'flex-end', 
        objectFit: "contain",
        tintColor: colors.primaryColor,
    }
})