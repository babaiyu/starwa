import {
  CHARACTERS,
  CHARACTERS_SUCCESS,
  CHARACTERS_FAILED,
  Action,
  State
} from './types';

const initialState: State = {
  data: '',
  isLoading: false
};

const charactersReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case CHARACTERS:
      return {
        ...state,
        isLoading: true
      };

    case CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };

    case CHARACTERS_FAILED:
      return {
        ...state,
        isLoading: false,
        data: ''
      };

    default:
      return state;
  }
};

export default charactersReducer;
