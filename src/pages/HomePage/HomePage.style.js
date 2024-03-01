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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      button: {
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: "#AEDEF4",
      },
      text: {
        color: '#fff',
        fontSize: 15
      }
})