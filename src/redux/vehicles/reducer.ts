import {
  VEHICLES,
  VEHICLES_SUCCESS,
  VEHICLES_FAILED,
  Action,
  State,
} from './types';

const initialState: State = {
  data: [],
  isLoading: false
};

const vehiclesReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case VEHICLES:
      return {
        ...state,
        isLoading: true
      };

    case VEHICLES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };

    case VEHICLES_FAILED:
      return {
        ...state,
        isLoading: false,
        data: [],
      };

    default:
      return state;
  }
};

export default vehiclesReducer;
