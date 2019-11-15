import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../../../components/Card';
import { themeColor } from '../../../config/constant';
import styles from './styles';

const Disclaimer = () => {
  const { padding, description, listContent, disclaimer, icon, textCenter } = styles;
  return (
    <View style={[padding, description, listContent]}>
      <Card style={[padding, disclaimer]}>
        <Icon name="warning" size={30} color={themeColor.bgWhite} style={icon} />
        <Text style={textCenter}>All information is based on swapi.co. If the information is inaccurate or irrelevant from real movies, it's not my fault men. I just display anything from swapi.co</Text>
        <Text style={textCenter}>By using the app, you hereby consent to our disclaimer and agree to its terms</Text>
      </Card>
    </View>
  );
};

export default Disclaimer;
