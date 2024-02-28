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
        height: 76,
        borderRadius: 8,
        flexDirection: "row",
    },
    body_container: {
        marginLeft: 12,
        marginTop: 10,
        justifyContent: "center",
        flex: 1,
        
    },
    title: {
        color: colors.primaryColor,
        fontSize: 14,
        fontWeight: "600",  
        marginRight: 20,
        fontFamily: 'Raleway-SemiBold',
    },
    price: {
        color: colors.primaryColor,
        fontSize: 14,
        fontWeight: "300",
        marginTop: 2,       
        fontFamily: 'Raleway-Light',
    },
    image: {
        height: 64,
        width: 64,
        borderRadius: 8,
        backgroundColor: "white",
        marginTop: 6,
        objectFit: "contain"
    },
    fav_container: {
       justifyContent: "center",
       marginTop: 10,
       marginRight: 4,
        
    },
})