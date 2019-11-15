import React from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes, { any } from 'prop-types';

const Modalin = (props: any) => {
  const { isVisible, children, onBack } = props;
  return (
    <Modal
      isVisible={isVisible}
      animationIn='zoomIn'
      animationOut='zoomOut'
      useNativeDriver={true}
      onBackButtonPress={onBack}
      onBackdropPress={onBack}
      propagateSwipe={true}
      children={
        <View>
          {children}
        </View>
      }
    />
  );
};

export default Modalin;

Modalin.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onBack: PropTypes.func.isRequired,
  children: any,
}
