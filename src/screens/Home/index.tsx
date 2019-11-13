import { connect } from 'react-redux';
import { AppState } from '../../redux/reducer';
import { actionMovies } from '../../redux/movies/action';

import Home from './Home';

const mapStateToProps = (state: AppState) => ({
  movies: state.movies.data,
  loadMovies: state.movies.isLoading
});

const mapDispatchToProps = (dispatch: any) => ({
  actionMovies: () => dispatch(actionMovies()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
