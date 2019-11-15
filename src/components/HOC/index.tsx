import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';

const Wrap = <P extends object>(Component: React.ComponentType<P>) => {
  class WrappedComponent extends React.Component<P> {
    render() {
      const { ...props } = this.props;
      const { container } = styles
      return (
        <SafeAreaView style={container}>
          <Component {...props as P} />
        </SafeAreaView>
      );
    }
  };
  return WrappedComponent;
}

export default Wrap;
