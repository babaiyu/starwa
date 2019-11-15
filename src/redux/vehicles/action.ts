import { Dispatch } from 'redux';
import { VEHICLES, VEHICLES_SUCCESS, VEHICLES_FAILED } from './types';
import { vehicles } from '../../services/api';

const loadingVeh = () => ({
  type: VEHICLES,
});

const successVeh = (data: any) => ({
  type: VEHICLES_SUCCESS,
  data,
});

const failedVeh = (message: string) => ({
  type: VEHICLES_FAILED,
  message,
});

export const actionVehicles = () => {
  return async (dispatch: Dispatch) => {
    dispatch(loadingVeh());
    try {
      const res = await vehicles();
      if(res.results !== null) {
        return dispatch(successVeh(res.results));
      }
      return dispatch(failedVeh('Failed Get API'));
    } catch (err) {
      return dispatch(failedVeh(err.message));
    }
  };
};
