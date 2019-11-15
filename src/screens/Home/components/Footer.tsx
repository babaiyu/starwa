import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Footer = () => {
  const { footer, textNote } = styles;
  return (
    <View style={footer}>
      <Text style={textNote}>Star Wars</Text>
    </View>
  );
};

export default Footer;
