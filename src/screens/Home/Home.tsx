import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import Wrap from '../../components/HOC';
import { Props } from './types';
import styles from './styles';

class Home extends React.PureComponent<Props> {
  componentDidMount() {
    this.getMovies();
  }

  // Get Data from API
  getMovies = () => {
    const { actionMovies } = this.props;
    actionMovies();
  };

  // Flatlist Render Item
  renderItem = ({ item, index }: any) => {
    const { textNote } = styles;
    return (
      <View key={index}>
        <Text style={textNote}>{item.title}</Text>
      </View>
    )
  }

  // Flatlist Key Extractor
  keyExtractor = (_item: any, index: number) => index.toString();
  render() {
    const { loadMovies, movies } = this.props;
    const { container } = styles;
    return (
      <SafeAreaView style={container}>
        <Text>Welcome Home</Text>
        {loadMovies ? <Text>Loading....</Text> : null}
        <FlatList
          keyExtractor={this.keyExtractor}
          data={movies}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default Wrap(Home);
