import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import Card from '../../../components/Card';
import styles from './styles';

export const ItemChar = ({ title, data }: any) => {
  const { item, textNote, textCenter } = styles;
  return (
    <Card style={item}>
      <Text style={textNote}>{title}</Text>
    </Card>
  );
}

ItemChar.propTypes = {
  data: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};