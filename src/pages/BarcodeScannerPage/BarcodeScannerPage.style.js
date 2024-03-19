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
        height: 56, 
        width: windowWidth, 
        backgroundColor: colors.primaryColor, 
        justifyContent: "center",
        alignItems: "center",
    },
    titleStyle:{
        color: colors.primaryColor,
        fontSize: 12,
        fontFamily: "Manrope-Bold",
    },
    contentStyle: {
        color: colors.primaryColor,
        fontSize: 12,
        fontFamily: "Manrope-Regular",
    },
    dialogText: {
        color: colors.secondaryColor,
        fontSize: 12,
        fontFamily: "Manrope-Bold",
        marginBottom: 2
    },
    dialogButton: {
        marginTop: 8,
        backgroundColor: colors.primaryColor,
        borderRadius: 6,
        height: 40,
        width: windowWidth - 136
    },
    flashIcon: {
        tintColor: colors.secondaryColor,
        height: 22,
        width: 22,
    }
})