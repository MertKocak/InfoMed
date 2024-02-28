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
        borderRadius: 20,
        padding: 10,
        margin: 20,
        width: windowWidth - 100,
    },
    buttonClose: {
        backgroundColor: colors.primaryColor,
    },
    buttonOpen: {
  
        backgroundColor: colors.primaryColor,
    },
    textStyle: {
        color: colors.secondaryColor,
        fontSize: 16,
        fontFamily: "Raleway-Bold",
        textAlign: 'center',
    },
    modalText: {
        marginTop: 20,
        padding: 14,
        fontSize: 16,
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