import { StyleSheet, Platform } from 'react-native';
import { themeColor } from '../../config/constant';
import { verticalScale } from '../../utils/ScaleUtils';

const height = Platform.OS === 'ios'
  ? verticalScale(20)
  : 0

export default StyleSheet.create({
  barStyle: {
    backgroundColor: themeColor.dark,
    height
  }
})
