import {
  EXAMPLE,
  EXAMPLE_SUCCESS,
  EXAMPLE_FAILED,
  Action,
  State
} from './types';

const initialState: State = {
  data: [],
  isLoading: false
};

const exampleReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case EXAMPLE:
      return {
        ...state,
        isLoading: true
      };

    case EXAMPLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };

    case EXAMPLE_FAILED:
      return {
        ...state,
        isLoading: false,
        data: []
      }
  
    default:
      return state;
  }
};

export default exampleReducer;
