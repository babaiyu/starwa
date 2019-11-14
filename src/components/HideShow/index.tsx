// @flow
import React from 'react';
import { ViewPropTypes, View } from 'react-native';
import PropTypes from 'prop-types';

const HideShow = (props: any) => {
  const { children, hide, style } = props;
  if (hide) {
    return null;
  }
  return (
    <View {...props} style={style}>
      {children}
    </View>
  );
};

HideShow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.element,
      ])
    ),
  ]).isRequired,
  style: ViewPropTypes.style,
  hide: PropTypes.bool,
};

export default HideShow;
