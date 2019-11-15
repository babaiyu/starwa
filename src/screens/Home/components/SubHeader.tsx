import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const SubHeader = () => {
  const { subHeader, textBold, textNote } = styles;
  return (
    <View style={subHeader}>
      <Text style={textBold}>Star Wars Movie List</Text>
      <Text style={textNote}>All the Star Wars movie's you've ever wanted.</Text>
    </View>
  );
};

export default SubHeader;