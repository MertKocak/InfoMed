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
        height: 44,
        width: windowWidth - 24,
        backgroundColor: colors.primaryColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        margin: 12,
        marginBottom: 0
    },
    buttonText: {
        fontSize: 12,
        color: "white",
        fontFamily: 'Manrope-Bold',
    },
    content: {
        fontSize: 14,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 6,
        color: colors.primaryColor,
        fontFamily: 'Manrope-Light',
    },
    contentW: {
        fontSize: 10.5,
        marginTop: 0,
        marginBottom: 4,
        marginLeft: 1,
        marginRight: 26,
        color: colors.primaryColor,
        fontFamily: 'Manrope-Light',
    },
    title: {
        color: colors.primaryColor,
        margin: 12,
        marginTop: 8,
        marginBottom: 2,
        fontSize: 12,
        fontFamily: 'Manrope-ExtraBold'
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
        height: 22,
        width: 22,
        margin: 8,
        marginTop: 5,
        marginLeft: 2,
        marginRight: 4,
        tintColor: colors.primaryColor
    },
    input: {
        backgroundColor: colors.secondaryColor,
        height: 38,
        width: windowWidth - 100,
        borderRadius: 36,
        fontSize: 12,
        alignContent: "center",
        color: colors.primaryColor,
        fontFamily: 'Manrope-Regular',
        marginLeft: 4,
        marginTop: 2,
    },
    searchBody: {
        backgroundColor: colors.secondaryColor,
        flexDirection: "row",
        margin: 12,
        borderRadius: 36,
        height: 42,
        borderWidth: 0.5,
        borderColor: colors.primaryColor,
        marginBottom: 0,
        alignItems: "center"
    },
    searchIcon: {
        height: 28,
        width: 28,
        marginLeft: 8,
        tintColor: colors.primaryColor
    }
})