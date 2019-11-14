import { StyleSheet, Dimensions } from 'react-native';
import { fonts, themeColor } from '../../config/constant';
import { scale, verticalScale } from '../../utils/ScaleUtils';

const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  body: {
    backgroundColor: themeColor.darkGray,
    flex: 1,
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    backgroundColor: themeColor.darkGray,
    marginTop: -50,
  },
  imgBackground: { width: '100%', height: deviceHeight / 2 },
  title: {
    fontFamily: fonts.fontBold,
    color: themeColor.white,
    fontSize: 23
  },
  textLight: {
    fontFamily: fonts.fontLight,
    color: themeColor.white,
    fontSize: 14,
  },
  textHighlight: {
    fontFamily: fonts.fontSemiBold,
    color: themeColor.white,
  },
  textReguler: {
    fontFamily: fonts.fontReguler,
    color: themeColor.white,
  },
  hr: {
    width: '100%',
    height: 1,
    backgroundColor: themeColor.white,
    marginVertical: 1,
  },
  columnDirection: {
    flexDirection: 'column',
    width: '100%',
    marginBottom: 3,
  },
  card: {
    width: scale(100),
    height: verticalScale(75),
    backgroundColor: themeColor.blue,
    padding: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  }
});
