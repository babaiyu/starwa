import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Image } from 'react-native';
import { themeColor } from '../../../config/constant';
import { verticalScale, moderateScale, scale } from '../../../utils/ScaleUtils';

const logo = 'http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG3.png';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: verticalScale(150),
    borderBottomLeftRadius: moderateScale(100),
    padding: 10,
    alignItems: 'flex-end'
  },
  img: {
    width: scale(125),
    height: verticalScale(75)
  }
});

const start = { x: 0, y: 0 };
const end = { x: 1, y: 0 };

const SubHeader = () => {
  const { container, img } = styles;
  return (
    <LinearGradient
      start={start}
      end={end}
      colors={[themeColor.green, themeColor.blue]}
      style={container}>
      <Image source={{ uri: logo }} style={img} />
    </LinearGradient>
  );
};

export default SubHeader;
