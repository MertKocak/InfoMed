import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../src/colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        alignContent: "center",
        backgroundColor: "white",
        borderRadius: 8,
        width: windowWidth - 60,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    button: {
        borderRadius: 50,
        padding: 10,
        margin: 16,
        marginTop: 6,
        width: 180,
        height: 42
    },
    buttonClose: {
        backgroundColor: colors.primaryColor,
    },
    buttonOpen: {

        backgroundColor: colors.primaryColor,
    },
    textStyle: {
        color: colors.secondaryColor,
        fontSize: 14,
        fontFamily: "Raleway-Bold",
        textAlign: 'center',
    },
    modalText: {
        textAlignVertical: "center",
        padding: 14,
        fontSize: 14,
        color: colors.primaryColor,
        fontFamily: "Raleway-Regular",
        textAlign: 'center',
    },
    icon: {
        height: 22,
        width: 22,
        tintColor: colors.secondaryColor,
        alignSelf: "flex-end",
    }
})