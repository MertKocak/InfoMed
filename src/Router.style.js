import { Image, StyleSheet, Dimensions, Platform } from "react-native";
import colors from "../src/colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1F1F1F",
        opacity: 0.9
    },
    modalView: {
        alignContent: "center",
        backgroundColor: "white",
        borderRadius: 12,
        width: windowWidth - 60,
        alignItems: 'center',
        justifyContent: "space-between",
        opacity: 1,
        
    },
    button: {
        borderRadius: 10,
        margin: 16,
        marginTop: 6,
        marginBottom: 12,
        width: windowWidth-84,
        height: 40,
        justifyContent: "center"
    },
    buttonClose: {
        backgroundColor: colors.primaryColor,
    },
    buttonOpen: {

        backgroundColor: colors.primaryColor,
    },
    textStyle: {
        color: colors.secondaryColor,
        fontSize: 12,
        fontFamily: "Manrope-Bold",
        textAlign: 'center',
        marginBottom: 2,
    },
    modalText: {
        textAlignVertical: "center",
        padding: 14,
        fontSize: 12,
        color: colors.primaryColor,
        fontFamily: "Manrope-Regular",
        textAlign: 'center',
    },
    modalText2: {
        textAlignVertical: "center",
        padding: 14,
        paddingTop: 0,
        fontSize: 12,
        color: colors.primaryColor,
        fontFamily: "Manrope-Bold",
        textAlign: 'center',
    },
    icon: {
        height: 20,
        width: 20,
        tintColor: colors.secondaryColor,
        alignSelf: "flex-end",
    }
})