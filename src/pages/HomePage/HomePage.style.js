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
        height: windowHeight / 4.2,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        backgroundColor: colors.primaryColor,
        justifyContent: "center",

    },
    logoImage: {
        height: windowHeight / 2,
        width: windowWidth / 2,
        alignSelf: "center",
        objectFit: "contain",
        marginBottom: 56,

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