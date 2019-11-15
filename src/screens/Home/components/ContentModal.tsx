import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from '../../../components/Card';
import styles from './styles';

const ContentModal = ({ data }: any) => {
  const { hr, textNote, padding } = styles;
  return (
    <Card style={padding}>
      <ScrollView>
        {
          data.map((item: any, index: number) => (
            <View key={index}>
              <Text style={textNote}>{item.name}</Text>
              <View style={hr} />
            </View>
          ))
        }
      </ScrollView>
    </Card>
  );
};

export default ContentModal;
