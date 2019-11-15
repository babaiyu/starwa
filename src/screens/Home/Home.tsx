import React from 'react';
import { View, Text, ScrollView, RefreshControl, ActivityIndicator, Alert } from 'react-native';
import _ from 'lodash';
import Wrap from '../../components/HOC';
import { BarHome } from '../../components/StatusBar';
import Modalin from '../../components/Modal';
import { Props, State } from './types';
import styles from './styles';
import { themeColor } from '../../config/constant';
import MyCarousel from './components/Carousel';
import SubHeader from './components/SubHeader';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';
import { ItemChar } from './components/Item';
import ContentModal from './components/ContentModal';

class Home extends React.PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      dataMovie: [
        { title: 'Characters', load: this.props.loadCharacters, data: this.props.characters },
        { title: 'Planets', load: this.props.loadPlanets, data: this.props.planets },
        { title: 'Starships', load: this.props.loadStarships, data: this.props.starships },
        { title: 'Vehicles', load: this.props.loadVehicles, data: this.props.vehicles },
      ],
      modal: false,
      contentModal: {},
    }
  }
  componentDidMount() {
    this.getMovies();
  }

  // Get Data from API
  getMovies = () => {
    const { actionMovies, actionCharacters, actionPlanets, actionStarships, actionVehicles } = this.props;
    actionMovies();
    actionCharacters();
    actionPlanets();
    actionStarships();
    actionVehicles();
  };

  // Navigate to Detail
  goDetail = () => {
    const { navigation: { navigate } } = this.props;
    navigate('Detail');
  }

  // Show Modal
  showModal = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

  setContentModal = (item: object) => {
    requestAnimationFrame(() => {
      this.setState({ contentModal: item }, () => {
        this.showModal();
      });
    })
  }

  render() {
    const { loadMovies, movies, loadCharacters, loadPlanets, loadStarships, loadVehicles } = this.props;
    const { dataMovie, modal, contentModal } = this.state;
    const { padding, container, listContent, textNote } = styles;
    const result = _.reverse(movies);
    return (
      <View style={container}>
        <BarHome />
        <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={this.getMovies} />}>
          <SubHeader />
          {loadMovies
            ? <ActivityIndicator size="large" color={themeColor.white} /> :
            <View style={listContent}>
              <Text style={[textNote, padding]}>List Movie:</Text>
              <MyCarousel data={result} {...this.props} />
            </View>}
          <ScrollView
            horizontal={true}
            style={listContent}
          >
            {
              !loadCharacters || !loadStarships || !loadPlanets || !loadVehicles ?
                dataMovie.map((item: any, index: number) => (
                  <View key={index}>
                    {item.load
                      ? null
                      : item.data !== null
                        ? <ItemChar title={item.title} onPress={() => this.setContentModal(item.data)} />
                        : null}
                  </View>
                ))
                : null
            }
          </ScrollView>
          <Disclaimer />
        </ScrollView>
        <Footer />

        {/* Modal */}
        <Modalin
          isVisible={modal}
          onBack={this.showModal}>
          {
            contentModal
              ? <ContentModal data={contentModal} />
              : null
          }
        </Modalin>
      </View>
    );
  }
}

export default Wrap(Home);
