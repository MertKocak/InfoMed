import { Image, StyleSheet, Dimensions } from "react-native";
import colors from "../../colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        backgroundColor: colors.secondaryColor,
        marginLeft: 12,
        marginTop: 12,
        paddingRight: 8,
        width: (windowWidth - 24),
        height: 60,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    body_container: {
        justifyContent: "center",
    },
    title: {
        color: colors.primaryColor,
        paddingLeft: 16,
        justifyContent: "center",
        fontSize: 12,
        height: 40,
        marginRight: 10,
        fontFamily: 'Manrope-SemiBold',
        textAlignVertical: "center"
    },
    trash_container: {
        justifyContent: "center",
        marginRight: 0,
        marginLeft: 2,

    },
    datePicker: {
        height: 120,
        width: windowWidth - 180,
        alignSelf: "center",
        marginTop: 12,
        marginBottom: 6,
    },
    dateContainer: {
        justifyContent: "center",
        backgroundColor: colors.primaryColor,
        alignItems: "center",
        margin: 0,
        marginTop: 4,
        borderRadius: 12,
        marginBottom: 0,
    },
    button: {
        height: 42,
        width: windowWidth - 174,
        backgroundColor: colors.secondaryColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        margin: 0,
        marginRight: 8,
        marginTop: 8,
        marginBottom: 0,
    },
    edit_container: {
        justifyContent: "center",
        marginRight: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    /***************************************** */
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
    },
    modalView: {
        alignContent: "center",
        backgroundColor: colors.primaryColor,
        borderRadius: 12,
        width: windowWidth - 24,
        alignItems: 'center',
        justifyContent: "space-between",
    },
    buttonPopup: {
        borderRadius: 10,
        margin: 12,
        marginBottom: 14,
        width: windowWidth - 48,
        height: 40,
        backgroundColor: colors.secondaryColor,
        justifyContent: "center"
    },
    buttonClose: {
        backgroundColor: colors.secondaryColor,
    },
    buttonOpen: {

        backgroundColor: colors.secondaryColor,
    },
    textStyle: {
        color: colors.primaryColor,
        fontSize: 12,
        marginBottom: 2,
        fontFamily: "Manrope-ExtraBold",
        textAlign: 'center',
    },
})