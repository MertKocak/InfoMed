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
        height: 42,
        width: windowWidth-24,
        backgroundColor: colors.primaryColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        margin: 12,
        marginBottom: 0
    },
    buttonText: {
        fontSize: 14,
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
        marginTop: 8,
        marginBottom: 0, 
        fontSize: 14, 
        fontFamily: 'Raleway-Bold'
    },
    warning: {
        flexDirection: "row", 
        backgroundColor: "white", 
        margin: 12, 
        marginBottom: 0, 
        marginTop: 6, 
        borderRadius: 12,
    },
    warningIcon: {
        height: 24, 
        width: 24, 
        margin: 8,
        marginTop: 4, 
        marginLeft: 2, 
        marginRight: 4,
        tintColor: colors.primaryColor
    },
    input: {
        backgroundColor: colors.secondaryColor,
        height: 40,
        width: windowWidth - 100,
        borderRadius: 36,
        fontSize: 14,
        alignContent: "center",
        color: colors.primaryColor,
        fontFamily: 'Raleway-Regular',
        marginLeft: 6,

    },
    searchBody: {
        backgroundColor: colors.secondaryColor,
        flexDirection: "row",
        margin: 12,
        borderRadius: 36,
        height: 42,
        borderWidth: 0.8,
        borderColor: colors.primaryColor,
        marginBottom: 0,
        alignItems: 'center',
    },
    searchIcon: {
        height: 32,
        width: 32,
        marginLeft: 6,
        tintColor: colors.primaryColor
    }
})