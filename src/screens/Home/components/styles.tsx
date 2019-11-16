import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../../utils/ScaleUtils';
import { themeColor, fonts } from '../../../config/constant';

export default StyleSheet.create({
  contentCard: {
    width: scale(300),
    height: verticalScale(150)
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
  },

  // Sub Header Style
  subHeader: {
    padding: 10,
    width: '75%',
    backgroundColor: themeColor.darkGray,
    borderBottomRightRadius: 25,
  },
  textBold: {
    fontFamily: fonts.fontBold,
    color: themeColor.white,
    fontSize: 25
  },
  textNote: {
    fontFamily: fonts.fontSemiBold,
    color: themeColor.white,
  },

  // Disclaimer
  padding: {
    padding: 10,
  },
  description: {
    alignItems: 'center',
  },
  listContent: {
    paddingTop: 20,
  },
  disclaimer: {
    backgroundColor: themeColor.green,
    alignItems: 'center',
  },
  icon: {
    marginBottom: 5,
  },
  textCenter: {
    fontFamily: fonts.fontLight,
    color: themeColor.white,
    textAlign: 'center',
  },

  // Footer
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

  // Item
  item: {
    width: scale(100),
    height: verticalScale(75),
    backgroundColor: themeColor.blue,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});
