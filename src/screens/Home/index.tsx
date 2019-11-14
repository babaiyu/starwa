import { connect } from 'react-redux';
import { AppState } from '../../redux/reducer';
import { actionMovies, actionSelectedMovies } from '../../redux/movies/action';

import Home from './Home';

const mapStateToProps = (state: AppState) => ({
  movies: state.movies.data,
  loadMovies: state.movies.isLoading
});

const mapDispatchToProps = (dispatch: any) => ({
  actionMovies: () => dispatch(actionMovies()),
  actionSelectedMovies: (payload: any) => dispatch(actionSelectedMovies(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
