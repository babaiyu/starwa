import React from 'react';
import { SafeAreaView, View, Text, ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import _ from 'lodash';
import Wrap from '../../components/HOC';
import { Props } from './types';
import styles from './styles';
import MyCarousel from './components/Carousel';
import Card from '../../components/Card';
import { themeColor } from '../../config/constant';

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
    const { padding, container, content, listContent, textNote, textCenter, textBold, description, footer, disclaimer, rowDirection, icon } = styles;
    const result = _.reverse(movies);
    return (
      <SafeAreaView style={container}>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={this.getMovies} />
          }>
          <View style={content}>
            <Text style={textBold}>Star Wars Movie List</Text>
            <Text style={textNote}>All the Star Wars movie's you've ever wanted.</Text>
          </View>
          {
            loadMovies
              ? <ActivityIndicator size="large" color={themeColor.white} /> :
              <View style={listContent}>
                <View>
                  <Text style={[textNote, padding]}>List Movie:</Text>
                  <MyCarousel data={result} {...this.props} />
                </View>
              </View>
          }
          <View style={[padding, description, listContent]}>
            <Card style={[padding, disclaimer]}>
              <Icon name="warning" size={30} color={themeColor.bgWhite} style={icon} />
              <Text style={textCenter}>All information is based on swapi.co. If the information is inaccurate or irrelevant from real movies, it's not my fault men. I just display anything from swapi.co</Text>
              <Text style={textCenter}>By using the app, you hereby consent to our disclaimer and agree to its terms</Text>
            </Card>
          </View>
        </ScrollView>
        <View style={footer}>
          <Text style={textNote}>Star Wars</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Wrap(Home);
