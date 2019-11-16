import React from 'react';
import { StatusBar, View } from 'react-native';
import { themeColor } from '../../config/constant';
import styles from './styles';

export const BarTranslucent = () => {
  const { barStyle } = styles;
  return (
    <View style={barStyle}>
      <StatusBar
        hidden
        barStyle="dark-content"
        animated
      />
    </View>
  );
};

export const BarHome = () => {
  const { barStyle } = styles;
  return (
    <View style={barStyle}>
      <StatusBar
        animated
        barStyle="light-content"
        backgroundColor={themeColor.dark}
      />
    </View>
  )
}
