import { StyleSheet } from 'react-native';
import { themeColor, fonts } from '../../config/constant';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingTop: 0,
  },
  tabContainer: {
    flex: 1,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: themeColor.lightGray,
  },
  tabContainerActive: {
    borderBottomWidth: 2,
    borderBottomColor: themeColor.white,
  },
  tabText: {
    color: themeColor.white,
    fontFamily: fonts.fontBold,
    textAlign: 'center',
    fontSize: 16,
  },
  tabTextDefault: {
    color: themeColor.lightGray,
    fontSize: 16,
    fontFamily: fonts.fontSemiBold,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
  }
});