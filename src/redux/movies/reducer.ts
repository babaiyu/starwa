import { MOVIES, MOVIES_SUCCESS, MOVIES_FAILED, Action, State } from './types';

const initialState: State = {
  data: {},
  isLoading: false
};

const moviesReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case MOVIES:
      return {
        ...state,
        isLoading: true
      };

    case MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };

    case MOVIES_FAILED:
      return {
        ...state,
        isLoading: false,
        data: {}
      };

    default:
      return state;
  }
};

export default moviesReducer;
