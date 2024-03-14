import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryColor,
        marginTop: 2,
        marginRight: 2,
        padding: 6,
        height: 60,
        borderRadius: 12,
        flexDirection: "row",
    },
    body_container: {
        marginLeft: 6,
        justifyContent: "center",
        flex: 1,
    },
    title: {
        color: colors.primaryColor,
        fontSize: 12,
        fontFamily: 'Raleway-SemiBold',
    },
    price: {
        color: colors.primaryColor,
        fontSize: 11,
        fontFamily: 'Raleway-Light',
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 10,
        backgroundColor: "white",
        objectFit: "contain"
    },
})