import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    body: {
        backgroundColor: "white",
        flex: 1
    },
    button: {
        height: 48,
        width: windowWidth-48,
        backgroundColor: colors.primaryColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 12,
    },
    buttonText: {
        fontSize: 16,
        color: "white",
        fontFamily: 'Raleway-Bold',
    },
    content: {
        fontSize: 16,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 6,
        color: colors.primaryColor,
        fontFamily: 'Raleway-Light',
    },
    contentW: {
        fontSize: 11,
        marginTop: 0,
        marginBottom: 4,
        marginLeft: 2,
        marginRight: 34,
        color: colors.primaryColor,
        fontFamily: 'Raleway-Regular',
    },
    title: {
        color: colors.primaryColor, 
        margin: 12,
        marginTop: 16,
        marginBottom: 0, 
        fontSize: 16, 
        textAlign: "center",
        fontFamily: 'Raleway-Bold'
    },
    dateContainer: {
        justifyContent: "center",
        backgroundColor: colors.secondaryColor,
        alignItems: "center",
        margin: 12,
        borderRadius: 12,
        marginBottom: 0,
    },
})