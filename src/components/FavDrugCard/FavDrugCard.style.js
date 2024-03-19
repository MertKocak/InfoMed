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
        
        justifyContent: "center",
        fontSize: 12,
        height: 40,
        marginRight: 10,
        fontFamily: 'Manrope-SemiBold',
        textAlignVertical: "center"

    },
    trash_container: {
        justifyContent: "center",
        marginRight: 12,
    },
    
})