import React from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Card = ({ children, style }: any) => {
  const { content } = styles;
  return (
    <View style={[content, style]}>
      {children}
    </View>
  );
};

export default Card;

Card.propTypes = {
  children: PropTypes.any.isRequired,
  style: ViewPropTypes.style,
};

Card.defaultProps = {
  style: null,
};
