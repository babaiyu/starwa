import {
  PLANETS,
  PLANETS_SUCCESS,
  PLANETS_FAILED,
  Action,
  State
} from './types';

const initialState: State = {
  data: [],
  isLoading: false
};

const planetsReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case PLANETS:
      return {
        ...state,
        isLoading: true
      };

    case PLANETS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };

    case PLANETS_FAILED:
      return {
        ...state,
        isLoading: false,
        data: []
      };

    default:
      return state;
  }
};

export default planetsReducer;
