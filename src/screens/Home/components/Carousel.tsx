import React from 'react';
import { View, Text, Dimensions, ImageBackground, TouchableOpacity as Touch } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import dayjs from 'dayjs';
import Card from '../../../components/Card';
import { scale } from '../../../utils/ScaleUtils';
import styles from './styles';

const width = Dimensions.get('window').width;

const img = 'https://lumiere-a.akamaihd.net/v1/images/uk_sws-9_teaser-poster_r_002319f4.jpeg?region=0,0,960,1420';

const MyCarousel = ({ data }: any) => {

  const renderItem = ({ item, index }: any) => {
    const { contentCard, rowDirection, leftCard, imgBackground, rightCard, textHeadCard, hr, textLight, detail, textBlue } = styles;
    return (
      <Touch key={index}>
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

  return (
    <Carousel
      data={data}
      renderItem={renderItem}
      itemWidth={scale(300)}
      sliderWidth={width}
    />
  );
}

export default MyCarousel;