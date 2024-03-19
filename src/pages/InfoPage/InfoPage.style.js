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
        paddingLeft: 12,
        paddingRight: 8,
        marginBottom: -12,
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
    },
    title: {
        color: colors.primaryColor,
        marginTop: 4,
        fontSize: 14,
        fontFamily: 'Manrope-Bold',
    },
    price: {
        color: colors.primaryColor,
        fontSize: 14,
        marginTop: 4,
        fontFamily: 'Manrope-Regular',
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
        marginTop: 6,
        marginBottom: 2,
        color: colors.primaryColor,
        fontSize: 14,
        fontFamily: 'Manrope-SemiBold',
    },
    subtitle2: {
        marginTop: 8,
        color: colors.primaryColor,
        fontSize: 14,
        fontFamily: 'Manrope-Medium',
    },
    contents: {
        color: "#191919",
        fontSize: 14,
        fontFamily: 'Manrope-Regular',
    },
    contents2: {
        marginTop: 8,
        color: "#191919",
        fontSize: 14,
        fontFamily: 'Manrope-Regular',
    },
    buttonsContainer: {
        flexDirection: "row",
        margin: 12,
        marginLeft: 0,
        marginRight: 0,
        justifyContent: "space-between"

    },
    addFavButton: {
        backgroundColor: colors.primaryColor,
        height: 42,
        width: (windowWidth - 60) / 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    addPresButton: {
        backgroundColor: colors.primaryColor,
        height: 42,
        width: (windowWidth - 60) / 2,
        borderRadius: 10,
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
        fontFamily: "Manrope-SemiBold",
        fontSize: 12,
    },
    barcodeText: {
        fontFamily: 'LibreBarcode128Text-Regular',
        color: "black",
        margin: 12,
        marginTop: 6,
        marginLeft: 2,
        fontSize: 24,
    },
    barcode: {
        marginTop: 4,
        marginBottom: 16,
        color: colors.primaryColor,
        fontSize: 14,
        fontFamily: 'Manrope-Regular',
    }
})