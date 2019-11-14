import React from 'react';
import { SafeAreaView, View, ActivityIndicator, Image, ScrollView, RefreshControl } from 'react-native';
import _ from 'lodash';
import Wrap from '../../components/HOC';
import { Props } from './types';
import styles from './styles';
import SubHeader from './components/SubHeader';
import MyCarousel from './components/Carousel';
import { themeColor } from '../../config/constant';

const img = 'http://www.pngmart.com/files/3/Star-Wars-Characters-PNG-Photos.png';

class Home extends React.PureComponent<Props> {
  componentDidMount() {
    this.getMovies();
  }

  // Get Data from API
  getMovies = () => {
    const { actionMovies } = this.props;
    actionMovies();
  };

  // Navigate to Detail
  goDetail = () => {
    const { navigation: { navigate } } = this.props;
    navigate('Detail');
  }

  render() {
    const { loadMovies, movies } = this.props;
    const { container } = styles;
    const data = _.sortBy(movies, ['episode_id']);
    const result = _.reverse(data);
    return (
      <SafeAreaView style={container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={loadMovies} onRefresh={this.getMovies} />
          }>
          <SubHeader />
          {loadMovies
            ? <ActivityIndicator size="large" color={themeColor.white} /> :
            <View style={{ marginTop: -25 }}>
              <MyCarousel data={result} {...this.props} />
            </View>}
          <Image source={{ uri: img }} style={{ width: '100%', height: 150, marginTop: 100 }} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Wrap(Home);
