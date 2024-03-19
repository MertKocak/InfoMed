import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryColor,
        marginLeft: 12,
        marginTop: 12,
        padding: 6,
        width: (windowWidth - 24),
        height: 72,
        borderRadius: 12,
        flexDirection: "row",
    },
    body_container: {
        marginLeft: 12,
        justifyContent: "center",
        flex: 1,
        
    },
    title: {
        color: colors.primaryColor,
        fontSize: 12,
        marginRight: 20,
        fontFamily: 'Manrope-SemiBold',
    },
    price: {
        color: colors.primaryColor,
        fontSize: 12,
        fontFamily: 'Manrope-Light',
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 10,
        backgroundColor: "white",
        objectFit: "contain"
    },
    fav_container: {
        justifyContent: "center",
        marginRight: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
    icon: {
        tintColor: colors.primaryColor,
        marginLeft: 8,
        marginRight: 4,
        height: 22,
        width: 22,
        alignItems: 'center'
    }
})