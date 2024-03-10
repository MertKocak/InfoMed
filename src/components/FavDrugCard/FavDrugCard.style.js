import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryColor,
        marginLeft: 12,
        marginTop: 12,

        width: (windowWidth - 24),
        height: 60,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    body_container: {
        justifyContent: "center",
        flex: 1,
        marginLeft: 12,
        justifyContent: "center",
        alignContent: "center",
    },
    title: {
        color: colors.primaryColor,
        fontSize: 14,
        marginRight: 20,
        fontFamily: 'Raleway-Medium',

    },
    trash_container: {
        justifyContent: "center",
        marginRight: 12,
    },
    
})