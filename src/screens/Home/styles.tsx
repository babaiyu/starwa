import { StyleSheet } from 'react-native';
import { fonts, themeColor } from '../../config/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColor.dark,
  },
  textNote: {
    fontFamily: fonts.fontBold,
    color: themeColor.white,
  },
});
