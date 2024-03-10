import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    body: {
        backgroundColor: "white",
        flex: 1
    },
    top_container: {
        backgroundColor: colors.secondaryColor,
        marginLeft: 12,
        marginTop: 12,
        padding: 12,
        borderRadius: 12,
        flexDirection: "column",
        width: (windowWidth - 24),
        height: 186,
    },
    body_container: {
        padding: 12,
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    title: {
        color: colors.primaryColor,
        fontSize: 14,
        fontFamily: 'Raleway-Bold',
    },
    price: {
        color: colors.primaryColor,
        fontSize: 14,
        marginTop: 2,
        fontFamily: 'Raleway-Regular',
    },
    image: {
        height: 108,
        width: 108,
        borderRadius: 10,
        backgroundColor: "white",
        objectFit: "contain",
    },
    bottom_container: {
        marginLeft: 6,
        marginTop: 4,
        paddingLeft: 6,
        paddingBottom: 12,
        paddingRight: 12,
    },
    subtitle: {
        marginTop: 4,
        color: colors.primaryColor,
        fontSize: 14,
        fontFamily: 'Raleway-SemiBold',
    },
    subtitle2: {
        marginTop: 6,
        color: colors.primaryColor,
        fontSize: 14,
        fontFamily: 'Raleway-SemiBold',
    },
    contents: {
        marginTop: 0,
        color: "#191919",
        fontSize: 14,
        fontFamily: 'Raleway-Regular',
    },
    contents2: {
        marginLeft: 6,
        marginTop: 6,
        color: "#191919",
        fontSize: 14,
        fontFamily: 'Raleway-Regular',
    },
    buttonsContainer: {
        flexDirection: "row",
        margin: 12,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: "center"

    },
    addFavButton: {
        backgroundColor: colors.primaryColor,
        height: 42,
        width: (windowWidth - 48) / 2,
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    addPresButton: {
        backgroundColor: colors.primaryColor,
        height: 42,
        width: (windowWidth - 48) / 2,
        borderRadius: 20,
        marginLeft: 6,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    buttonIcon: {
        height: 20,
        width: 20,
        tintColor: colors.secondaryColor,
        marginRight: 6,

    },
    buttonText: {
        marginBottom: 2,
        color: colors.secondaryColor,
        fontFamily: "Raleway-SemiBold",
        fontSize: 11,
    },
})