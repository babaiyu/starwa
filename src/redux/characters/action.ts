import { Dispatch } from 'redux';
import { CHARACTERS, CHARACTERS_SUCCESS, CHARACTERS_FAILED } from './types';
import { characters } from '../../services/api';

const loadingChar = () => ({
  type: CHARACTERS,
});

const successChar = (data: any) => ({
  type: CHARACTERS_SUCCESS,
  data,
});

const failedChar = (message: string) => ({
  type: CHARACTERS_FAILED,
  message,
});

export const actionCharacters = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingChar());
    try {
      const res = await characters();
      if(res.results !== null) {
        return dispatch(successChar(res.results));
      }
      return dispatch(failedChar('Failed Get API'));
    } catch (err) {
      return dispatch(failedChar(err.message));
    }
  };
};
