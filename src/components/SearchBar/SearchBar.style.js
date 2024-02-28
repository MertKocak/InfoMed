import { StyleSheet, Dimensions} from 'react-native';
import colors from '../../colors';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  input: {
    backgroundColor: colors.secondaryColor,
    height: 42,
    width: windowWidth-100,
    borderRadius: 36,
    fontSize: 16,
    alignContent: "center",
    color: colors.primaryColor,
    fontFamily: 'Raleway-Regular',
    paddingLeft: 10,
    
  },
  searchBody: {
    backgroundColor: colors.secondaryColor,
    flexDirection: "row",
    margin: 12,
    borderRadius: 36,
    height: 44,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    marginBottom: 0
  },
  searchIcon: {
    height: 36,
    width: 36,
    marginLeft: 6,
    marginTop: 3,
    tintColor: colors.primaryColor
  }
}
)