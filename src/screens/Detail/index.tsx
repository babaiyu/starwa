import { connect } from 'react-redux';
import { AppState } from '../../redux/reducer';

import Detail from './Detail';

const mapStateToProps = (state: AppState) => ({
  selectedMovies: state.movies.selectedMovies
});

export default connect(mapStateToProps)(Detail);