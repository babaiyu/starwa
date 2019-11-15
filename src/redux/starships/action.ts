import { Dispatch } from 'redux';
import { STARSHIPS, STARSHIPS_SUCCESS, STARSHIPS_FAILED } from './types';
import { starships } from '../../services/api';

const loadingStar = () => ({
  type: STARSHIPS
});

const successStar = (data: any) => ({
  type: STARSHIPS_SUCCESS,
  data
});

const failedStar = (message: string) => ({
  type: STARSHIPS_FAILED,
  message
});

export const actionStarships = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingStar());
    try {
      const res = await starships();
      if (res.results !== null) {
        return dispatch(successStar(res.results));
      }
      return dispatch(failedStar('Failed Get API'));
    } catch (err) {
      return dispatch(failedStar(err.message));
    }
  };
};
