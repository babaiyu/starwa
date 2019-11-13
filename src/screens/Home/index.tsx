import { connect } from 'react-redux';
import { AppState } from '../../redux/reducer';
import actionExample from '../../redux/example/action';

import Home from './Home';

const mapStateToProps = (state: AppState) => ({
  example: state.example.data,
  isLoading: state.example.isLoading
});

const mapDispatchToProps = (dispatch: any) => ({
  actionExample: () => dispatch(actionExample())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
