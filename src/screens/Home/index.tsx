import { connect } from 'react-redux';
import { AppState } from '../../redux/reducer';
import { actionMovies, actionSelectedMovies } from '../../redux/movies/action';
import { actionCharacters } from '../../redux/characters/action';
import { actionPlanets } from '../../redux/planets/action';
import { actionStarships } from '../../redux/starships/action';
import { actionVehicles } from '../../redux/vehicles/action';

import Home from './Home';

const mapStateToProps = (state: AppState) => ({
  movies: state.movies.data,
  loadMovies: state.movies.isLoading,
  characters: state.characters.data,
  loadCharacters: state.characters.isLoading,
  planets: state.planets.data,
  loadPlanets: state.planets.isLoading,
  starships: state.starships.data,
  loadStarships: state.starships.isLoading,
  vehicles: state.vehicles.data,
  loadVehicles: state.vehicles.isLoading,
});

const mapDispatchToProps = (dispatch: any) => ({
  actionMovies: () => dispatch(actionMovies()),
  actionSelectedMovies: (payload: any) => dispatch(actionSelectedMovies(payload)),
  actionCharacters: () => dispatch(actionCharacters()),
  actionPlanets: () => dispatch(actionPlanets()),
  actionStarships: () => dispatch(actionStarships()),
  actionVehicles: () => dispatch(actionVehicles()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
