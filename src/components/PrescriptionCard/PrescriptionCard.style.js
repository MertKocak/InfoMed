import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryColor,
        marginLeft: 12,
        marginTop: 12,
        paddingLeft: 6,
        paddingBottom: 12,
        paddingRight: 8,
        width: (windowWidth-24),
        height: 192,
        borderRadius: 12,
        flexDirection: "column",
    },
    body_container: {
        marginLeft: 12,
        marginTop: 12,
        justifyContent: "center",
        flex: 1,
    },
    title: {
        marginTop: -2,
        color: colors.primaryColor,
        height: 40,
        justifyContent: "center",
        fontSize: 14,
        marginRight: 20,
        fontFamily: 'Raleway-Medium',
        textAlignVertical: "center"
    },   
    trash_container: {
        justifyContent: "center",
        marginRight: 4,
        marginTop: 10
        
    },
    datePicker: {
        height: 74,
        width: 120,
        alignSelf: "center",
        marginTop: 4,
    
    },
    dateContainer: {
        justifyContent: "center",
        backgroundColor: colors.secondaryColor,
        alignItems: "center",
        margin: 0,
        marginTop: 4,
        borderRadius: 12,
        marginBottom: 0,
    },
    button: {
        height: 42,
        width: windowWidth - 48,
        backgroundColor: colors.primaryColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 0,
        marginTop: 8,
        marginBottom: 0,
    },
    buttonText: {
        fontSize: 14,
        color: "white",
        marginBottom: 2,
        fontFamily: 'Raleway-Bold',
    },
})