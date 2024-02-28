import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    body: {
        backgroundColor: "white",
        flex: 1
    },
    topContainer: {
        height: windowHeight / 3.6,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        backgroundColor: colors.primaryColor,
        justifyContent: "center",

    },
    logoImage: {
        height: windowHeight / 1.6,
        width: windowWidth / 1.6,
        alignSelf: "center",
        objectFit: "contain",
        marginBottom: 48,

    },
    container1: {
        flexDirection: "row"
    },
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
        color: 'white',
        fontWeight: 'bold',
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
        height: 24,
        width: 24,
        tintColor: colors.secondaryColor,
        alignSelf: "flex-end",
        marginRight: 12,
    }
})