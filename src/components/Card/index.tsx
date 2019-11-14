import React from 'react';
import { View, StyleSheet } from 'react-native';
import { themeColor } from '../../config/constant';

const styles = StyleSheet.create({
  content: {
    width: '100%',
    borderRadius: 5,
    backgroundColor: themeColor.semiGray
  },
});

const Card = ({ children, style }: any) => {
  const { content } = styles;
  return (
    <View style={[content, style || null]}>
      {children}
    </View>
  );
};

export default Card;
