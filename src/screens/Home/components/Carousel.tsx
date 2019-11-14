import React from 'react';
import { View, Text, Dimensions, ImageBackground, TouchableOpacity as Touch } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import dayjs from 'dayjs';
import Card from '../../../components/Card';
import { scale } from '../../../utils/ScaleUtils';
import styles from './styles';
import { Props } from '../types';

const width = Dimensions.get('window').width;

const img = 'https://lumiere-a.akamaihd.net/v1/images/uk_sws-9_teaser-poster_r_002319f4.jpeg?region=0,0,960,1420';

class MyCarousel extends React.PureComponent<Props, object> {

  // Select Movie
  selectMovie = (movie: any) => {
    const { navigation: { navigate }, actionSelectedMovies } = this.props;
    actionSelectedMovies(movie)
    navigate('Detail');
  };

  // Render Item
  renderItem = ({ item, index }: any) => {
    const { contentCard, rowDirection, leftCard, imgBackground, rightCard, textHeadCard, hr, textLight, detail, textBlue } = styles;
    return (
      <Touch key={index} onPress={() => this.selectMovie(item)}>
        <Card style={contentCard}>
          <View style={rowDirection}>
            <View style={leftCard}>
              <ImageBackground source={{ uri: img }} style={imgBackground} />
            </View>
            <View style={rightCard}>
              <Text style={textHeadCard}>{item.title}</Text>
              <View style={hr} />
              <View>
                <Text style={textLight}>{(item.opening_crawl).substring(0, 75)}...</Text>
                <View style={detail}>
                  <View style={rowDirection}>
                    <Text style={textLight}>Released</Text>
                    <Text style={textBlue}>{dayjs(item.release_date).format('MMM YYYY')}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Card>
      </Touch>
    )
  };

  // Main Render
  render() {
    const { data } = this.props;
    return (
      <Carousel
        data={data}
        renderItem={this.renderItem}
        itemWidth={scale(300)}
        sliderWidth={width}
      />
    );
  }
}

export default MyCarousel;