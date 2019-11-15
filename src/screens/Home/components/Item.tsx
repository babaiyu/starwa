import React from 'react';
import { Text, TouchableOpacity as Touch } from 'react-native';
import PropTypes from 'prop-types';
import Card from '../../../components/Card';
import styles from './styles';

export const ItemChar = (props: any): any => {
  const { item, textNote } = styles;
  const { onPress, title } = props;
  return (
    <Touch onPress={onPress}>
      <Card style={item}>
        <Text style={textNote}>{title}</Text>
      </Card>
    </Touch>
  );
}

ItemChar.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};