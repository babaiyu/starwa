import React from 'react';
import { StatusBar } from 'react-native';
import { themeColor } from '../../config/constant';

export const BarTranslucent = () => (
  <StatusBar
    hidden
    barStyle="dark-content"
    animated
  />
);

export const BarHome = () => (
  <StatusBar
    // animated
    barStyle="light-content"
    backgroundColor={themeColor.dark}
  />
);
