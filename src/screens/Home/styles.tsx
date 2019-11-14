import { StyleSheet } from 'react-native';
import { fonts, themeColor } from '../../config/constant';
import { verticalScale } from '../../utils/ScaleUtils';

export default StyleSheet.create({
  padding: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: themeColor.dark,
  },
  content: {
    padding: 10,
    width: '75%',
    backgroundColor: themeColor.darkGray,
    borderBottomRightRadius: 25,
  },
  listContent: {
    paddingTop: 20,
  },
  textNote: {
    fontFamily: fonts.fontSemiBold,
    color: themeColor.white,
  },
  textCenter: {
    fontFamily: fonts.fontLight,
    color: themeColor.white,
    textAlign: 'center',
  },
  textBold: {
    fontFamily: fonts.fontBold,
    color: themeColor.white,
    fontSize: 25
  },
  description: {
    alignItems: 'center',
  },
  footer: {
    width: '55%',
    height: verticalScale(50),
    right: 0,
    bottom: 0,
    position: 'absolute',
    backgroundColor: themeColor.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25,
  },
  disclaimer: {
    backgroundColor: themeColor.green,
    alignItems: 'center',
  },
  rowDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    marginBottom: 5,
  }
});
