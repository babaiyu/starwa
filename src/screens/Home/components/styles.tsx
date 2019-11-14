import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../../utils/ScaleUtils';
import { themeColor, fonts } from '../../../config/constant';

export default StyleSheet.create({
  contentCard: {
    width: scale(300),
    height: verticalScale(200)
  },
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '100%'
  },
  leftCard: {
    backgroundColor: themeColor.blue,
    width: '40%',
    height: '100%',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  rightCard: {
    padding: 10,
    width: '60%'
  },
  textHeadCard: {
    fontFamily: fonts.fontSemiBold,
    color: themeColor.white,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: themeColor.bgWhite,
    marginVertical: 2.5,
    marginBottom: 5,
  },
  textLight: {
    fontFamily: fonts.fontLight,
    color: themeColor.white,
    fontSize: 14
  },
  detail: {
    padding: 5,
  },
  textBlue: {
    fontFamily: fonts.fontReguler,
    color: themeColor.blue
  }
});
