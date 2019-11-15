import React from 'react';
import { TouchableOpacity as Touch } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
import { themeColor } from '../../../config/constant';
import styles from './styles';

const BackButton = (props: any) => {
  const { onPress } = props;
  const { fab } = styles;
  return (
    <Touch onPress={onPress} style={fab}>
      <Icon name="arrow-left" size={35} color={themeColor.dark} />
    </Touch>
  );
};

export default BackButton;

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};
