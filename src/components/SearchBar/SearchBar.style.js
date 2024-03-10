import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  input: {
    backgroundColor: colors.secondaryColor,
    height: 40,
    width: windowWidth - 100,
    borderRadius: 38,
    fontSize: 14,
    alignContent: "center",
    color: colors.primaryColor,
    fontFamily: 'Raleway-Regular',
    marginLeft: 6,

  },
  searchBody: {
    backgroundColor: colors.secondaryColor,
    flexDirection: "row",
    margin: 12,
    borderRadius: 36,
    height: 42,
    borderWidth: 0.75,
    borderColor: colors.primaryColor,
    marginBottom: 0,
    alignItems: 'center',
  },
  searchIcon: {
    height: 32,
    width: 32,
    marginLeft: 6,
    tintColor: colors.primaryColor
  }
}
)