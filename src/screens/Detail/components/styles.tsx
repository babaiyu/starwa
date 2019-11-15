import { StyleSheet } from 'react-native';
import { themeColor } from '../../../config/constant';

export default StyleSheet.create({
  fab: {
    top: 20,
    left: 20,
    position: 'absolute',
    paddingHorizontal: 15,
    // width: scale(75),
    backgroundColor: themeColor.bgWhite,
    borderRadius: 30,
    zIndex: 1
  },
})