import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Props } from './types';

class Home extends React.PureComponent<Props> {
  componentDidMount() {
    this.getUser();
  }

  // Get Data from API
  getUser = () => {
    const { actionExample } = this.props;
    actionExample();
  };

  // Flatlist Render Item
  renderItem = ({ item, index }: any) => (
    <View key={index}>
      <Text>{item.name}</Text>
    </View>
  );

  // Flatlist Key Extractor
  keyExtractor = (_item: any, index: number) => index.toString();
  render() {

    // Destructing Assigment
    const { isLoading, example } = this.props;
    return (
      <View>
        <Text>Welcome Home</Text>
        {isLoading ? <Text>Loading....</Text> : null}
        <FlatList
          keyExtractor={this.keyExtractor}
          data={example}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

export default Home;
