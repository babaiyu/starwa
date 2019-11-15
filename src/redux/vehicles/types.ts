export const VEHICLES: string = 'VEHICLES';
export const VEHICLES_SUCCESS: string = 'VEHICLES_SUCCESS';
export const VEHICLES_FAILED: string = 'VEHICLES_FAILED';

export interface Action {
  type: string;
  data: any;
  message?: string;
}

export interface State {
  data: any;
  isLoading: boolean;
}
