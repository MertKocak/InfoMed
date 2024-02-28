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
        paddingLeft: 6,
        paddingBottom: 12,
        paddingRight: 6,
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        flexDirection: "row",
        width: (windowWidth - 24),
        height: 140,
    },
    body_container: {
        marginLeft: 12,
        marginTop: 12,
        justifyContent: "flex-start",
        flex: 1,
    },
    title: {
        color: colors.primaryColor,
        fontSize: 16,
        marginRight: 8,
        fontFamily: 'Raleway-Bold',
    },
    price: {
        color: colors.primaryColor,
        fontSize: 16,
        marginTop: 2,
        fontFamily: 'Raleway-Regular',
    },
    image: {
        height: 128,
        width: 128,
        borderRadius: 6,
        backgroundColor: "white",
        marginTop: 6,
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
        color: colors.primaryColor,
        fontSize: 16,
        fontFamily: 'Raleway-SemiBold',
    },
    subtitle2: {
        marginTop: 8,
        marginLeft: 6,
        color: colors.primaryColor,
        fontSize: 16,
        fontFamily: 'Raleway-SemiBold',
    },
    contents: {
        marginTop: 2,
        color: "#191919",
        fontSize: 16,
        fontFamily: 'Raleway-Regular',
    },
    contents2: {
        marginTop: 8,
        marginLeft: 6,
        color: "#191919",
        fontSize: 16,
        fontFamily: 'Raleway-Regular',
    }
})