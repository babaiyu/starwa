import { Dispatch } from 'redux';
import { MOVIES, MOVIES_SUCCESS, MOVIES_FAILED } from './types';
import { movies } from '../../services/api';

const loadingMovies = () => ({
  type: MOVIES
});

const successMovies = (data: any) => ({
  type: MOVIES_SUCCESS,
  data
});

const failedMovies = (message: string) => ({
  type: MOVIES_FAILED,
  message
});

export const actionMovies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingMovies());
    try {
      const res = await movies();
      if (res.results !== null) {
        return dispatch(successMovies(res.results));
      }
      return dispatch(failedMovies('Failed Get API'));
    } catch (err) {
      return dispatch(failedMovies(err.message));
    }
  };
};
