import React from 'react';
import { View, Text, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import _ from 'lodash';
import Wrap from '../../components/HOC';
import { Props } from './types';
import styles from './styles';
import { themeColor } from '../../config/constant';
import MyCarousel from './components/Carousel';
import SubHeader from './components/SubHeader';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';

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
    const { padding, container, listContent, textNote } = styles;
    const result = _.reverse(movies);
    return (
      <View style={container}>
        <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={this.getMovies} />}>
          <SubHeader />
          {loadMovies
            ? <ActivityIndicator size="large" color={themeColor.white} /> :
            <View style={listContent}>
              <Text style={[textNote, padding]}>List Movie:</Text>
              <MyCarousel data={result} {...this.props} />
            </View>}
          <Disclaimer />
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

export default Wrap(Home);
