import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryColor,
        marginLeft: 12,
        marginTop: 12,
        padding: 12,
        paddingRight: 10,
        width: (windowWidth - 36) / 2,
        height: 120,
        borderRadius: 8,
        justifyContent: "flex-end",
    },
    title: {
        color: colors.primaryColor,
        fontSize: 14,
        fontFamily: 'Raleway-Bold',
    },
    desc: {
        color: colors.primaryColor,
        fontSize: 12,
        marginTop: 2,
        fontFamily: 'Raleway-Light',
    },
    image: {
        height: 24, 
        width:24, 
        alignSelf: 'flex-end', 
        marginBottom: -2, 
        marginRight: 2,
        objectFit: "contain",
        tintColor: colors.primaryColor,
    }
})