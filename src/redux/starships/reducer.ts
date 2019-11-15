import {
  STARSHIPS,
  STARSHIPS_SUCCESS,
  STARSHIPS_FAILED,
  Action,
  State
} from './types';

const initialState: State = {
  data: [],
  isLoading: false
};

const starshipsReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case STARSHIPS:
      return {
        ...state,
        isLoading: true
      };

    case STARSHIPS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };

    case STARSHIPS_FAILED:
      return {
        ...state,
        isLoading: false,
        data: []
      };

    default:
      return state;
  }
};

export default starshipsReducer;
