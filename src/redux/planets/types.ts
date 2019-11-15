export const PLANETS: string = 'PLANETS';
export const PLANETS_SUCCESS: string = 'PLANETS_SUCCESS';
export const PLANETS_FAILED: string = 'PLANETS_FAILED';

export interface Action {
  type: string;
  data: any;
  message?: string;
}

export interface State {
  data: any;
  isLoading: boolean;
}
