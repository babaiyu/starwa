import { Dispatch } from 'redux';
import { PLANETS, PLANETS_SUCCESS, PLANETS_FAILED } from './types';
import { planets } from '../../services/api';

const loadingPlan = () => ({
  type: PLANETS
});

const successPlan = (data: any) => ({
  type: PLANETS_SUCCESS,
  data
});

const failedPlan = (message: string) => ({
  type: PLANETS_FAILED,
  message
});

export const actionPlanets = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingPlan());
    try {
      const res = await planets();
      if (res.results !== null) {
        return dispatch(successPlan(res.results));
      }
      return dispatch(failedPlan('Failed Get API'));
    } catch (err) {
      return dispatch(failedPlan(err.message));
    }
  };
};
