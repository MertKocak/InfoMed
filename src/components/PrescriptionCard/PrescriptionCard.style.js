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
        height: 60,
        borderRadius: 8,
        flexDirection: "row",
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
        fontSize: 14,
        marginRight: 20,
        fontFamily: 'Raleway-Medium',
      
    },   
    trash_container: {
        justifyContent: "center",
        marginRight: 4,
        marginTop: 10
        
    },
})