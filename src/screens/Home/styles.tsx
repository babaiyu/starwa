import { StyleSheet } from 'react-native';
import { fonts, themeColor } from '../../config/constant';

export default StyleSheet.create({
  padding: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: themeColor.dark,
  },
  listContent: {
    paddingTop: 10,
  },
  textNote: {
    fontFamily: fonts.fontSemiBold,
    color: themeColor.white,
  },
});
