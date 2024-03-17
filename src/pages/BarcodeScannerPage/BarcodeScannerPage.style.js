import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    body: {
        backgroundColor: colors.primaryColor,    
        flex: 1
    },
    container: { 
        
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 0,
        
    },
    flash: {
        height: 60, 
        width: windowWidth, 
        backgroundColor: colors.primaryColor, 
        justifyContent: "center",
        alignItems: "center",
    },
    flashText: {
        fontFamily: "Raleway-Bold",
        fontSize: 14,
        color: colors.secondaryColor
    },
    titleStyle:{
        color: colors.primaryColor,
        fontSize: 14,
        fontFamily: "Raleway-Bold",
    },
    contentStyle: {
        color: colors.primaryColor,
        fontSize: 14,
        fontFamily: "Raleway-Medium",
    },
    dialogText: {
        color: colors.secondaryColor,
        fontSize: 12,
        fontFamily: "Raleway-Bold",
        marginBottom: 2
    },
    dialogButton: {
        marginTop: 24,
        backgroundColor: colors.primaryColor,
        borderRadius: 24,
        height: 40,
        width: windowWidth - 134
    },
    flashIcon: {
        tintColor: colors.secondaryColor,
        height: 24,
        width: 24,
    }
})