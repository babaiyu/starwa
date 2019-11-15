import React from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableWithoutFeedback as Touch, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import dayjs from 'dayjs';
import Wrap from '../../components/HOC';
import { Props, State } from './types';
import styles from './styles';
import Tabs from '../../components/Tabs';
import Card from '../../components/Card';
import { themeColor } from '../../config/constant';

const img = 'https://lumiere-a.akamaihd.net/v1/images/uk_sws-9_teaser-poster_r_002319f4.jpeg?region=0,0,960,1420';

class Detail extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      hideStory: true,
      detail: [
        { title: 'Director', name: this.props.selectedMovies.director },
        { title: 'Producer', name: this.props.selectedMovies.producer },
        { title: 'Release Date', name: this.props.selectedMovies.release_date }
      ],
      detailMovie: [
        { title: 'Characters', total: this.props.selectedMovies.characters },
        { title: 'Planets', total: this.props.selectedMovies.planets },
        { title: 'Starships', total: this.props.selectedMovies.starships },
        { title: 'Vehicles', total: this.props.selectedMovies.vehicles },
        { title: 'Species', total: this.props.selectedMovies.species }
      ]
    };
  };

  // Function
  showHide = () => {
    const { hideStory } = this.state;
    this.setState({ hideStory: !hideStory });
  };

  // Back to Home
  back = () => {
    const { navigation: { goBack } } = this.props;
    requestAnimationFrame(() => {
      goBack();
    })
  };

  // Flatlist
  renderDetailMovie = ({ item, index }: any) => {
    const { textHighlight, textReguler, card } = styles;
    return (
      <Card key={index} style={card}>
        <Text style={textHighlight}>{item.title}</Text>
        <Text style={textReguler}>{item.total.length}</Text>
      </Card>
    );
  };

  renderDetail = ({ item, index }: any) => {
    const { columnDirection, textLight, textReguler } = styles;
    return (
      <View key={index} style={columnDirection}>
        <Text style={textLight}>{item.title}:</Text>
        <Text style={textReguler}>
          {
            index === 2
              ? dayjs(item.name).format("DD MMM YYYY")
              : item.name
          }
        </Text>
      </View>
    )
  }

  keyExtractor = (item: any, index: number) => index.toString();

  // Main Render
  render() {
    const { selectedMovies } = this.props;
    const { hideStory, detailMovie, detail } = this.state;
    const { body, content, imgBackground, title, textLight, textHighlight, textReguler, hr, columnDirection, fab } = styles;
    return (
      <View style={body}>
        <TouchableOpacity onPress={this.back} style={fab}>
          <Icon name="arrow-left" size={35} color={themeColor.dark} />
        </TouchableOpacity>
        <ScrollView>
          <ImageBackground source={{ uri: img }} style={imgBackground} resizeMode="cover">
          </ImageBackground>
          <View style={content}>
            <Text style={title}>{selectedMovies.title}</Text>
            <View style={hr} />
            <Text style={textLight}>Directed by: <Text style={textHighlight}>{selectedMovies.director}</Text></Text>
            <Tabs>
              <View title="Story" style={columnDirection}>
                <Text style={title}>Story</Text>
                <Touch onPress={this.showHide}>
                  <Text style={textReguler}>
                    {
                      hideStory
                        ? `${(selectedMovies.opening_crawl).substring(0, 250)}...`
                        : selectedMovies.opening_crawl
                    }
                  </Text>
                </Touch>
              </View>
              <View title="Detail" style={columnDirection}>
                <Text style={title}>Detail</Text>
                <View style={columnDirection}>
                  <FlatList
                    data={detail}
                    renderItem={this.renderDetail}
                    keyExtractor={this.keyExtractor}
                    removeClippedSubviews={true}
                  />
                </View>
                <View style={columnDirection}>
                  <FlatList
                    data={detailMovie}
                    renderItem={this.renderDetailMovie}
                    keyExtractor={this.keyExtractor}
                    removeClippedSubviews={true}
                    horizontal={true}
                  />
                </View>
              </View>
            </Tabs>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Wrap(Detail);
