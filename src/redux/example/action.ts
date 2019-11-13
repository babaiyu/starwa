import { Dispatch } from 'redux';
import { example } from '../../services/api';
import { EXAMPLE, EXAMPLE_SUCCESS, EXAMPLE_FAILED } from './types';

const loadingEx = () => ({
  type: EXAMPLE
});

const successEx = (data: any[]) => ({
  type: EXAMPLE_SUCCESS,
  data
});

const failedEx = (message: any[]) => ({
  type: EXAMPLE_FAILED,
  message
});

const actionExample = () => {
  return (dispatch: Dispatch) => {
    dispatch(loadingEx());
    example()
      .then((res: any) => {
        dispatch(successEx(res));
      })
      .catch(err => {
        dispatch(failedEx(err.message));
      });
  };
};

export default actionExample;
