import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  input: {
    backgroundColor: colors.secondaryColor,
    height: 38,
    width: windowWidth - 100,
    borderRadius: 38,
    fontSize: 12,
    alignContent: "center",
    color: colors.primaryColor,
    fontFamily: 'Manrope-Regular',
    marginLeft: 4,
    marginTop: 2,
  },
  searchBody: {
    backgroundColor: colors.secondaryColor,
    flexDirection: "row",
    margin: 12,
    borderRadius: 36,
    height: 42,
    borderWidth: 0.5,
    borderColor: colors.primaryColor,
    marginBottom: 0,
    alignItems: 'center',
  },
  searchIcon: {
    height: 28,
    width: 28,
    marginLeft: 8,
    tintColor: colors.primaryColor
  }
}
)