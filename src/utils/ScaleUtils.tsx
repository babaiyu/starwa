import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guideLinesBase = [350, 680]; // Width & Height

export const scale = (size: number) => (width / guideLinesBase[0]) * size;
export const verticalScale = (size: number) => (height / guideLinesBase[1]) * size;
export const moderateScale = (size: number, factor: number = 0.5) =>
  size + (scale(size) - size) * factor;
